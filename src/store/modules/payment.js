import firebase from "firebase"
var stripe = require('stripe')('sk_test_E0PPctRoJFyoAEC3PCjXLYqT001n1BC4yL');

exports.CheckoutSession = functions.https.onRequest((request, response) => {

    cors(request, response => {
        stripe.checkout.sessions.create(
            {
              success_url: 'http://localhost:8080/Checkout',
              cancel_url: 'http://localhost:8080/Blog',
              payment_method_types: ['card'],
              line_items: [
                {
                  name: 'Pearl drop earring',
                  description: 'Elegant pearl drop earring',
                  amount: 1200,
                  currency: 'rsd',
                  quantity: 2,
                },
              ],
            },
            function(err, session) {
             response.send(session);
            }
          );
    })


})



