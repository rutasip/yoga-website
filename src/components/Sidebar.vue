<template>
  <div class="sidebar">
    <aside class="news-widget box-shadow">
      <h3 class="widget_title">Naujausi pranešimai</h3>
      <div class="widget_post">
        <img :src="gallery_6" alt="post" />
        <div class="widget_text">
          <a href="#">
            <h3>Renkamos naujos grupės nuo spalio mėn.</h3>
          </a>
          <p>prieš 2 val.</p>
        </div>
      </div>
      <div class="widget_post">
        <img :src="gallery_7" alt="post" />
        <div class="widget_text">
          <a href="#">
            <h3>Tvarkaraščio pasikeitimai</h3>
          </a>
          <p>prieš 12 val.</p>
        </div>
      </div>
      <div class="widget_post">
        <img :src="gallery_8" alt="post" />
        <div class="widget_text">
          <a href="#">
            <h3>Naujas adresas Vilniuje</h3>
          </a>
          <p>prieš 1 d.</p>
        </div>
      </div>
    </aside>

    <aside class="instagram-widget box-shadow">
      <h4 class="widget_title">Instagram nuotraukos</h4>
      <ul class="widget_row">
        <li>
          <a href="#">
            <img :src="gallery_7" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img :src="gallery_1" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img :src="gallery_2" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img :src="gallery_3" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img :src="gallery_4" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img :src="gallery_6" alt="" />
          </a>
        </li>
      </ul>
    </aside>

    <aside class="newsletter-widget box-shadow">
      <h4 class="widget_title">Naujienlaiškio prenumerata</h4>
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
export default {
  name: "Sidebar",
  data() {
    return {
      gallery_1: require("@/assets/gallery/1681.jpg"),
      gallery_2: require("@/assets/gallery/17785444.jpg"),
      gallery_3: require("@/assets/gallery/3434536.jpg"),
      gallery_4: require("@/assets/gallery/2757255.jpg"),
      gallery_5: require("@/assets/gallery/17785444.jpg"),
      gallery_6: require("@/assets/gallery/blog_2.jpg"),
      gallery_7: require("@/assets/gallery/blog_1.jpg"),
      gallery_8: require("@/assets/gallery/blog_3.jpg"),
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

.sidebar .widget_title {
  font-size: 20px;
  margin-bottom: 40px;
}

.sidebar .widget_title::after {
  content: "";
  display: block;
  padding-top: 15px;
  border-bottom: 1px solid #f0e9ff;
}

.sidebar .news-widget,
.sidebar .instagram-widget,
.sidebar .newsletter-widget {
  padding: 30px;
  margin: 0 15px 30px 15px;
  max-width: 440px;
}

.sidebar .news-widget .widget_post {
  display: flex;
}

.sidebar .news-widget .widget_post img {
  height: 55px;
}

.sidebar .news-widget .widget_post .widget_text {
  padding-left: 20px;
}

.sidebar .news-widget .widget_post .widget_text h3 {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 6px;
}

.sidebar .news-widget .widget_post .widget_text p {
  font-size: 14px;
}

.sidebar .news-widget .widget_post + .widget_post {
  margin-top: 20px;
}

.sidebar .instagram-widget .widget_row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -6px;
  margin-left: -6px;
}

.sidebar .instagram-widget .widget_row li {
  width: 33.33%;
  float: left;
  padding: 0 6px 6px 6px;
}

.sidebar .instagram-widget .widget_row img {
  width: 100%;
}

@media (min-width: 1200px) {
  .sidebar {
    width: 30%;
    display: block;
  }
}
</style>
