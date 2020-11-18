<template>
  <div class="main-content">
    <div class="three-column-section mt-80 mb-80">
      <div class="section-title">
        <h3>galerija</h3>
      </div>
      <div class="row">
        <div class="col-one-third mobile-full-width">
          <img :src="gallery_1" class="gallery_img" />
        </div>
        <div class="col-one-third mobile-full-width">
          <img :src="gallery_2" class="gallery_img" />
        </div>
        <div class="col-one-third mobile-full-width">
          <img :src="gallery_3" class="gallery_img" />
        </div>
      </div>
      <div class="row">
        <div class="col-one-third mobile-full-width">
          <img :src="gallery_4" class="gallery_img" />
        </div>
        <div class="col-one-third mobile-full-width">
          <img :src="gallery_5" class="gallery_img" />
        </div>
        <div class="col-one-third mobile-full-width">
          <img :src="gallery_6" class="gallery_img" />
        </div>
      </div>
      <div class="row">
        <div class="col-one-third mobile-full-width">
          <img :src="gallery_7" class="gallery_img" />
        </div>
        <div class="col-one-third mobile-full-width">
          <img :src="gallery_8" class="gallery_img" />
        </div>
        <div class="col-one-third mobile-full-width">
          <img :src="gallery_9" class="gallery_img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      gallery_1: require("@/assets/gallery/1681.jpg"),
      gallery_2: require("@/assets/gallery/17785444.jpg"),
      gallery_3: require("@/assets/gallery/3434536.jpg"),
      gallery_4: require("@/assets/gallery/2757255.jpg"),
      gallery_5: require("@/assets/gallery/14788.jpg"),
      gallery_6: require("@/assets/gallery/20278.jpg"),
      gallery_7: require("@/assets/gallery/blog_2.jpg"),
      gallery_8: require("@/assets/gallery/blog_1.jpg"),
      gallery_9: require("@/assets/gallery/blog_3.jpg"),
    };
  },
};
</script>

<style>
.gallery_img {
  width: 100%;
}
</style>
