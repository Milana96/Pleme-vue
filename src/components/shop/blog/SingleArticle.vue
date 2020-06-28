<template>
    <div class="single-article">
        <div class="single-article-images" v-if="blogItem" :id="blogItem.id">
            <img v-if="blogItem.gallery_images[0].image1" 
                 :src="blogItem.gallery_images[0].image1" 
                 alt="">
            <img v-if="blogItem.gallery_images[0].image2" 
                 :src="blogItem.gallery_images[0].image2" 
                 alt="">
        </div>
        <h1>{{ blogItem.title }}</h1>
        <div class="single-article-description">
            <p>{{ blogItem.description[0].paragraph1 }}</p>
             <img v-if="blogItem.gallery_images[0].image3" 
                 :src="blogItem.gallery_images[0].image3" 
                 alt="">
            <p>{{ blogItem.description[0].paragraph2 }}</p>     
            <img v-if="blogItem.gallery_images[0].image4" 
                 :src="blogItem.gallery_images[0].image4" 
                 alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogItem: null
        };
    },
    props: [
        "id",
        "title",
        "image",
        "gallery_images",
        "description",
    ],
    created() {
        this.fetchBlogItem();
    },
    watch: {
        $route() {
            this.fetchBlogItem();
        }
    },
    methods: {
          fetchBlogItem() {
            const blogItem = this.$store.state.blogs.find(
                e => e.id == this.$route.params.id
            );

            if (blogItem) {
                this.blogItem = blogItem;
                return;
            }

            this.$router.replace("/NotFound404");
        }
    }
}
</script>