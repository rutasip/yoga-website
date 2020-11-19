<template>
  <div class="col-one-third max-width-320">
    <div class="single_feature box-shadow">
      <div class="icon">
        <img :src="require('@/assets/yoga/' + img + '')" alt="" />
      </div>
      <h4>{{ heading }}</h4>
      <p>{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
    img: String,
    heading: String,
    paragraph: String,
  },
};
</script>

<style>
.single_feature {
  padding: 30px;
  text-align: center;
}

.single_feature img {
  width: 60px;
}

.single_feature h4 {
  font-size: 18px;
  margin: 16px 0 13px;
  font-weight: 400;
}
</style>
