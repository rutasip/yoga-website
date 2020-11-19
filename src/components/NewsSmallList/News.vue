<template>
  <div class="news">
    <img
      class="news__img"
      :src="require('@/assets/gallery/' + img + '')"
      alt="post"
    />
    <div class="news__content">
      <a href="#">
        <h3>{{ heading }}</h3>
      </a>
      <p>{{ time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  props: {
    img: String,
    heading: String,
    time: String,
  },
};
</script>

<style>
.news {
  display: flex;
}

.news__img {
  height: 55px;
}

.news__content {
  padding-left: 20px;
}

.news__content h3 {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 6px;
}

.news__content p {
  font-size: 14px;
}

.news + .news {
  margin-top: 20px;
}
</style>
