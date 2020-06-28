<template>
    <div class="blog">
        <div class="blog inner">
            <div class="blog nav">
               <h1>P.L.E.M.E</h1>
               <p>BLOG</p>
               <p>Find Out What Is Inside!</p>
            </div>
            <div class="blog blog-items">
                <blog-article v-for="blog in $store.state.blogs"
                    :key="blog.id"
                    :id="blog.id"
                    :image="blog.image"
                    :title="blog.title"
                    :gallery_images="blog.gallery_images"
                    :description="blog.description"
                ></blog-article>
            </div>
        </div>
    </div>
</template>

<script>
import BlogArticle from '../blog/BlogArticle';
export default {
    components: {
        'blog-article': BlogArticle
    },
    data () {
        return {
            url: 'articles'
            }
    },
    mounted() {
        this.$store.dispatch("getArticles", this.url)
    }
}
</script>