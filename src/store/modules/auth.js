import axios from 'axios';
import authaxios from '../../router/axios-auth';
import router from '../../router/index';
import firebase from "firebase";

const state = {
    idToken: null,
    userId: null,
    shipped: false
};

const mutations = {
    authUser(state, userData) {
        state.idToken = userData.idToken;
        state.userId = userData.userId;
      },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
    }
};

const actions = {
      //auto log out
      setLogoutTimer({ commit }, expirationTime) {
        setTimeout(() => {
          commit("clearAuthData");
        }, expirationTime * 1000);
      },
      storeUser({ state }, userData) {
        console.log(state.idToken);
  
        if (!state.idToken) {
          return;
        }
        console.log("Test store user:");
        axios
          .post(
            "https://pleme-f3591.firebaseio.com/users.json" +
              "?auth=" +
              state.idToken,
              userData
          )
          .then(res => console.log("Response" + res))
          .catch(err => console.log(err));
      },
      signUp({ commit, dispatch }, authData) {
        authaxios
          .post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxzzEvnpQY4I1o3YURyJaXkco5ykjlhCc", {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(res => {
            console.log(res);
            commit("authUser", {
              idToken: res.data.idToken,
              userId: res.data.localId
            });
  
            const now = new Date();
            //get the date when idToken expires -->
            //get the today date in miliseconds, get the expiresIn in miliseconds
            //get the date from that value
            const expirationDate = new Date(
              now.getTime() + res.data.expiresIn * 1000
            );
            //store id token in local storage so it wont be lost when we reload the page
            localStorage.setItem("idToken", res.data.idToken);
            //store the time when the idToken expires and all of our data are lost
            localStorage.setItem("expirationDate", expirationDate);
            //get the userId for the auto log in
            localStorage.setItem("userId", res.data.localId);
  
            dispatch("storeUser", authData);
            dispatch("setLogoutTimer", res.data.expiresIn);
          })
          .catch(err => console.log(err));
      },
      logIn({ commit, dispatch }, authData) {
        authaxios
          .post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxzzEvnpQY4I1o3YURyJaXkco5ykjlhCc",
            {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true
            }
          )
          .then(res => {
            console.log(res);
            commit("authUser", {
              idToken: res.data.idToken,
              userId: res.data.localId
            });
            const now = new Date();
            // //get the date when idToken expires -->
            // //get the today date in miliseconds, get the expires in miliseconds
            // //get the date from that value
            const expirationDate = new Date(
              now.getTime() + res.data.expiresIn * 1000
            );
            //  //store id token in local storage so it wont be lost when we reload the page
            localStorage.setItem("idToken", res.data.idToken);
            // //get the userId for the auto log in
            localStorage.setItem("userId", res.data.localId);
            // //store the time when the idToken expires and all of our data are lost
            localStorage.setItem("expirationDate", expirationDate);
            dispatch("setLogoutTimer", res.data.expiresIn);
          })
          .catch(err => console.log(err));
      },
      // everythime when the user sign in after some time token expires and all data are lost
      // so we are creating auto log in method which checks if the token is valid, and then calls authUser method
      // authUser method fill the token and the userId so you are loged in again
      tryAutoLogin({ commit }) {
        //get the token from the local storage
        const idToken = localStorage.getItem("idToken");
        //if there is no token return
        if (!idToken) {
          return;
        }
        //get the expiration date of the token from the local storage
        const expirationDate = localStorage.getItem("expirationDate");
        //get the current date
        const now = new Date();
        //check if the current date is greater then expiration date
        //if it is, that means that the token expired and it is not valid so we can return
        if (now >= expirationDate) {
          return;
        }
        //if the token is valid, get the userId from the local storage
        const userId = localStorage.getItem("userId");
        //commit authUser which fill the idToken and the userId and send them from local storage
        commit("authUser", {
          idToken: idToken,
          userId: userId
        });
      },
      logout({ commit }) {
        commit("clearAuthData");
        //after we logout we will be navigated to the sign in component
        router.replace("/signIn");
        //after we logout we should clear all data from the local storage
        localStorage.removeItem("expirationDate");
        localStorage.removeItem("userId");
        localStorage.removeItem("idToken");
      },
      resetPassword({commit}, resetData) {
        console.log(resetData);
        var auth = firebase.auth();
        var actionCodeSettings = {
          // After password reset, the user will be give the ability to go back
          // to this page.
          url: 'http://localhost:8081/signIn#resetPassword',
          handleCodeInApp: false
        };

        auth.sendPasswordResetEmail(resetData.resetEmail, actionCodeSettings).then(res => {
          //Successful
        }).catch(err => {
          console.log(err);
        });

        // authaxios.post("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAxzzEvnpQY4I1o3YURyJaXkco5ykjlhCc", {
        //   email: resetData.email
        // })
        //   .then(res => {
        //       console.log(res);
        //       commit("authUser", {
        //         idToken: res.data.idToken,
        //         userId: res.data.localId
        //       });
        //       window.alert("Email has been sent to you, Please check and verify.")
        //   })
        //   .catch(err => {
        //     console.log(err);
            
        //   })
      }
};

const getters = {
    isAuthenticated(state) {
        return state.idToken !== null;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}