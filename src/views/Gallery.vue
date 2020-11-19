<template>
  <div class="main-content">
    <div class="mt-80 mb-80">
      <div class="section-title">
        <h3>galerija</h3>
      </div>
      <div class="row">
        <div v-for="(item, index) in images" :key="index" class="gallery__item">
          <img
            :src="require('@/assets/gallery/' + item.image + '')"
            class="gallery__img"
            alt=""
          />
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
      images: [
        { image: "1681.jpg" },
        { image: "17785444.jpg" },
        { image: "3434536.jpg" },
        { image: "2757255.jpg" },
        { image: "14788.jpg" },
        { image: "20278.jpg" },
        { image: "blog_2.jpg" },
        { image: "blog_1.jpg" },
        { image: "blog_3.jpg" },
      ],
    };
  },
};
</script>

<style>
.gallery__item {
  width: 100%;
  padding: 7px 11px;
}

@media (min-width: 576px) {
  .gallery__item {
    width: 50%;
  }
}

@media (min-width: 768px) {
  .gallery__item {
    width: 33%;
  }
}

.gallery__img {
  width: 100%;
}
</style>
