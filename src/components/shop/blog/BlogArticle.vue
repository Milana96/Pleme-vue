<template>
  <div>
    <div class="blog">
      <div>
        <router-link :to="`/blog/${id}`">
          <img :src="image" alt="" />
        </router-link>
      </div>
      <h6>{{ title }}</h6>
      <p>{{ description[0].paragraph1 }}</p>
      <router-link :to="`/blog/${id}`" tag="button">
        READ MORE
     </router-link>
    </div>
  </div>
</template>

<script>
export default {
    props: [
        "id",
        "title",
        "image",
        "gallery_images",
        "description",
    ]
};
</script>
