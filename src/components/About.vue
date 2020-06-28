<template>
  <div id="primary" class="content-area">
    <main id="main" class="site-main">
      <section class="about-image-section">
        <div class="about-1">
          <img src="../../public/src/images/about-1.jpg" alt="" />
        </div>
        <div class="about-1 top-margin">
          <img src="../../public/src/images/about-2.jpg" alt="" />
        </div>
      </section>
      <section class="about" id="about">
        <h1>{{ $t("about.aboutUs") }}</h1>
        <div class="intro">
          <p>{{ $t("about.aboutStory") }}</p>
        </div>
        <h1>{{ $t("about.story") }}</h1>
        <div class="image-story-section">
          <div class="image-story-1">
            <img
              class="beige-womans"
              src="../../public/src/images/story.jpg"
              alt=""
            />
          </div>
          <div class="image-story-1 black-image">
            <img src="../../public/src/images/story-girl.jpg" alt="" />
          </div>
          <div class="image-story-2">
            <img src="../../public/src/images/story-girl.jpg" alt="" />
          </div>
        </div>
        <div class="intro story">
          <p>
            {{ $t("about.theStory") }}
          </p>
        </div>
        <h1>{{ $t("about.behind") }}</h1>
        <div class="intro story">
          <p>
            {{ $t("about.behindStory") }}
          </p>
        </div>
        <div class="image-story-section">
          <div class="image-story-1">
            <img
              class="opacity-image"
              src="../../public/src/images/juan-manuel-merino-_Nd19leRtQc-unsplash.jpg"
              alt=""
            />
          </div>
          <div class="commitment">
            <p>
              {{ $t("about.commitment") }}
            </p>
          </div>
        </div>
      </section>
    </main>
    <!-- #main -->
  </div>
  <!-- #primary -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
