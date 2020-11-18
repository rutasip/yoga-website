<template>
  <div class="main-content">
    <div class="hero justify-center mb-100">
      <div class="hero_bg">
        <img :src="hero" />
        <div class="hero_arrow bounce">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4="
          />
        </div>
      </div>
      <div class="hero_title center-x-y">
        <h3>yogendra jogos studija</h3>
      </div>
    </div>
    <div class="three-column-section mb-80">
      <div class="section-title">
        <h3>paslaugos</h3>
      </div>
      <div class="row">
        <div class="col-one-third max-width-320">
          <div class="single_feature box-shadow">
            <div class="icon">
              <img :src="extended" alt="" />
            </div>
            <h4>Asmeninės treniruotės</h4>
            <p>Dėl asmeninių treniruočių susiekti asmeniškai.</p>
          </div>
        </div>
        <div class="col-one-third max-width-320">
          <div class="single_feature box-shadow">
            <div class="icon">
              <img :src="revolver" alt="" />
            </div>
            <h4>Grupinės treniruotės</h4>
            <p>
              Grupinės treniruotės vyksta kas savaitę, po 8-10 žmonių vienoje
              grupėje.
            </p>
          </div>
        </div>
        <div class="col-one-third max-width-320">
          <div class="single_feature box-shadow">
            <div class="icon">
              <img :src="cobra" alt="" />
            </div>
            <h4>Mokytojų kursai</h4>
            <p>
              Dėl jogos mokytojų kursų sekite mūsų naujienas arba susisiekite
              asmeniškai.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="three-column-section mb-80">
      <div class="section-title">
        <h3>naujienos</h3>
      </div>
      <div class="row">
        <div class="col-one-third max-width-440">
          <article>
            <div class="blog_item_img">
              <img class="card-img" :src="gallery_2" alt="" />
              <a href="#" class="blog_item_date">
                <h3>17</h3>
                <p>Rugs.</p>
              </a>
            </div>

            <div class="blog_details box-shadow">
              <a href="#">
                <h2>Renkamos naujos grupės nuo spalio mėn.</h2>
              </a>
              <p>
                Quisque euismod tortor lectus, a elementum ligula maximus sit
                amet. Sed sit amet ex eu justo feugiat dictum. Ut eu risus id
                magna luctus facilisis.
              </p>
              <ul class="blog-info-link">
                <li>
                  <a href="#"> Joga, Hatha</a>
                </li>
                <li>
                  <a href="#"> 5 Komentarai</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="col-one-third max-width-440">
          <article>
            <div class="blog_item_img">
              <img class="card-img" :src="gallery_1" alt="" />
              <a href="#" class="blog_item_date">
                <h3>15</h3>
                <p>Rugs.</p>
              </a>
            </div>

            <div class="blog_details box-shadow">
              <a href="#">
                <h2>Tvarkaraščio pasikeitimai</h2>
              </a>
              <p>
                Nam magna metus, viverra placerat neque ut, pulvinar fringilla
                arcu. Nulla facilisi. Nam orci dolor, accumsan ut volutpat.
              </p>
              <ul class="blog-info-link">
                <li>
                  <a href="#"> Joga, Hatha</a>
                </li>
                <li>
                  <a href="#"> 5 Komentarai</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="col-one-third max-width-440">
          <article>
            <div class="blog_item_img">
              <img class="card-img" :src="gallery_3" alt="" />
              <a href="#" class="blog_item_date">
                <h3>10</h3>
                <p>Rugs.</p>
              </a>
            </div>

            <div class="blog_details box-shadow">
              <a href="#">
                <h2>Naujas adresas Vilniuje</h2>
              </a>
              <p>
                Donec id tincidunt est, a interdum lacus. Nullam ac egestas
                lacus. Nulla vel purus vitae mi gravida iaculis. Aenean in urna
                sit amet enim imperdiet scelerisque.
              </p>
              <ul class="blog-info-link">
                <li>
                  <a href="#"> Joga, Hatha</a>
                </li>
                <li>
                  <a href="#"> 5 Komentarai</a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      hero: require("@/assets/hero.png"),
      extended: require("@/assets/yoga/extended.svg"),
      revolver: require("@/assets/yoga/revolver.svg"),
      cobra: require("@/assets/yoga/cobra.svg"),
      gallery_1: require("@/assets/gallery/blog_1.jpg"),
      gallery_2: require("@/assets/gallery/blog_2.jpg"),
      gallery_3: require("@/assets/gallery/blog_3.jpg"),
    };
  },
};
</script>

<style>
.main-content {
  width: 100%;
}

@media (min-width: 1200px) {
  .main-content {
    width: 70%;
  }
}

.hero {
  position: relative;
}

.hero_bg {
  text-align: center;
}

.hero_bg img {
  width: 100%;
  opacity: 0.6;
}

@media (min-width: 768px) {
  .hero_bg img {
    width: 85%;
  }
}

@media (min-width: 992px) {
  .hero_bg img {
    width: 75%;
  }
}

.hero_title {
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
  background-color: #fff;
  border-radius: 30px;
  opacity: 0.85;
  padding: 1rem;
}

.hero_title h3 {
  font-size: 5.3vw;
  text-transform: capitalize;
}

@media (min-width: 768px) {
  .hero_title h3 {
    font-size: 4vw;
  }
}

@media (min-width: 992px) {
  .hero_title h3 {
    font-size: 3.3vw;
  }
}

@media (min-width: 1200px) {
  .hero_title h3 {
    font-size: 2.7vw;
  }
}

/* Bouncing arrow */
.hero_arrow {
  width: 100%;
}

.hero_arrow img {
  width: 40px;
  height: 40px;
}

.bounce {
  animation: bounce 3s infinite;
}
@-moz-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

/* Services */
.three-column-section .single_feature {
  padding: 30px;
  text-align: center;
}

.three-column-section .single_feature img {
  width: 60px;
}

.three-column-section .single_feature h4 {
  font-size: 18px;
  margin: 16px 0 13px;
  font-weight: 400;
}

/* Blog */
.blog_item_img {
  position: relative;
}

.blog_item_img .blog_item_date {
  position: absolute;
  bottom: -20px;
  left: 40px;
  background-color: #f06657;
  padding: 8px 15px;
  border-radius: 5px;
}

.blog_item_img .blog_item_date h3 {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
}

.blog_item_img .blog_item_date p {
  font-size: 18px;
  color: #fff;
}

.card-img {
  width: 100%;
}

.blog_details {
  padding: 60px 30px 35px 35px;
}

.blog_details h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
}

.blog_details p {
  margin-bottom: 30px;
}

.blog_details a:hover {
  color: #f06657;
}

.blog-info-link li {
  float: left;
  font-size: 14px;
}

.blog-info-link li a {
  color: #999999;
}

.blog-info-link li i,
.blog-info-link li span {
  font-size: 13px;
  margin-right: 5px;
}

.blog-info-link li::after {
  content: "|";
  padding-left: 10px;
  padding-right: 10px;
}

.blog-info-link li:last-child::after {
  display: none;
}

.blog-info-link::after {
  content: "";
  display: block;
  clear: both;
  display: table;
}
</style>
