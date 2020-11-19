<template>
  <div class="sidebar">
    <NewsSmallList />
    <aside class="widget box-shadow">
      <h4 class="widget__title">Instagram nuotraukos</h4>
      <ul class="widget__row">
        <li v-for="(item, index) in images" :key="index">
          <a href="#">
            <img :src="require('@/assets/gallery/' + item.image + '')" alt="" />
          </a>
        </li>
      </ul>
    </aside>
    <aside class="widget box-shadow">
      <h4 class="widget__title">Naujienlaiškio prenumerata</h4>
      <form action="#">
        <input
          type="email"
          class="input-field"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'El. paštas'"
          placeholder="El. paštas"
          required=""
        />
        <button class="boxed-btn" type="submit">prenumeruoti</button>
      </form>
    </aside>
  </div>
</template>

<script>
import NewsSmallList from "@/components/NewsSmallList/NewsSmallList.vue";

export default {
  name: "Sidebar",
  components: {
    NewsSmallList,
  },
  data() {
    return {
      images: [
        { image: "1681.jpg" },
        { image: "14788.jpg" },
        { image: "3434536.jpg" },
        { image: "2757255.jpg" },
        { image: "17785444.jpg" },
        { image: "20278.jpg" },
      ],
    };
  },
};
</script>

<style>
.sidebar {
  width: 100%;
  padding-left: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 1200px) {
  .sidebar {
    width: 30%;
    display: block;
  }
}

.widget {
  padding: 30px;
  margin: 0 15px 30px 15px;
  max-width: 440px;
}

.widget__title {
  font-size: 20px;
  margin-bottom: 40px;
}

.widget__title::after {
  content: "";
  display: block;
  padding-top: 15px;
  border-bottom: 1px solid #f0e9ff;
}

.widget__row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -6px;
  margin-left: -6px;
}

.widget__row li {
  width: 33.33%;
  float: left;
  padding: 0 6px 6px 6px;
}

.widget__row img {
  width: 100%;
}
</style>
