<template>
  <div class="mb-80">
    <div class="section-title">
      <h3>naujienos</h3>
    </div>
    <div class="row">
      <News
        img="blog_1.jpg"
        heading="Renkamos naujos grupės nuo spalio mėn."
        paragraph="Quisque euismod tortor lectus, a elementum ligula maximus sit
              amet. Sed sit amet ex eu justo feugiat dictum. Ut eu risus id
              magna luctus facilisis."
      />
      <News
        img="blog_2.jpg"
        heading="Tvarkaraščio pasikeitimai"
        paragraph="Nam magna metus, viverra placerat neque ut, pulvinar fringilla
              arcu. Nulla facilisi. Nam orci dolor, accumsan ut volutpat."
      />
      <News
        img="blog_3.jpg"
        heading="Naujas adresas Vilniuje"
        paragraph="Donec id tincidunt est, a interdum lacus. Nullam ac egestas lacus.
              Nulla vel purus vitae mi gravida iaculis. Aenean in urna sit amet
              enim imperdiet scelerisque."
      />
    </div>
  </div>
</template>

<script>
import News from "@/components/NewsLargeList/News.vue";

export default {
  name: "NewsLargeList",
  components: {
    News,
  },
};
</script>
