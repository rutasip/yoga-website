<template>
  <aside class="widget box-shadow">
    <h3 class="widget__title">Naujausi pranešimai</h3>
    <News
      img="blog_2.jpg"
      heading="Renkamos naujos grupės nuo spalio mėn."
      time="prieš 2 val."
    />
    <News
      img="blog_1.jpg"
      heading="Tvarkaraščio pasikeitimai"
      time="prieš 12 val."
    />
    <News
      img="blog_3.jpg"
      heading="Naujas adresas Vilniuje"
      time="prieš 1 d."
    />
  </aside>
</template>

<script>
import News from "@/components/NewsSmallList/News.vue";

export default {
  name: "NewsSmallList",
  components: {
    News,
  },
};
</script>
