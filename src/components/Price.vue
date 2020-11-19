<template>
  <div class="col-one-third max-width-320">
    <div class="price box-shadow">
      <div class="icon center-x-y">
        <img :src="require('@/assets/yoga/' + img + '')" alt="" />
      </div>
      <h3>{{ heading }}</h3>
      <ul>
        <li v-for="(feature, index) in features" :key="index">
          {{ feature }}
        </li>
        <li>
          Kaina: <b>{{ price }}€</b>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Price",
  props: {
    img: String,
    heading: String,
    features: Array,
    price: Number,
  },
};
</script>

<style>
.price {
  padding: 45px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.price .icon {
  width: 95px;
  height: 95px;
  border-radius: 50%;
}

.col-one-third:nth-child(1) .price .icon {
  background: #f5f5ff;
}

.col-one-third:nth-child(2) .price .icon {
  background: #fff0f8;
}

.col-one-third:nth-child(3) .price .icon {
  background: #effdf5;
}

.price .icon img {
  width: 50px;
  height: 50px;
}

.price h3 {
  font-size: 22px;
  font-weight: 400;
  margin: 36px 0 24px 0;
}
</style>
