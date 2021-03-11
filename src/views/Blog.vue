<template>
  <div class="main-content">
    <div class="mt-80 mb-80">
      <div class="section-title">
        <h3>tinklaraštis</h3>
      </div>
      <div class="row">
        <article>
          <div class="news_item_img">
            <img
              class="card-img"
              :src="require('@/assets/gallery/20278_cropped.jpg')"
              alt=""
            />
            <a class="news_item_date">
              <h3>11</h3>
              <p>Kov.</p>
            </a>
          </div>
          <div class="news_details box-shadow">
            <router-link to="/tinklarastis/pritaikymas-paieskoms">
              <h2>Paieškoms pritaikyta puslapio kliento dalis</h2>
            </router-link>
            <p>
              Mano kurtame puslapyje, kuris yra jogos mokyklos reprezentacinis
              puslapis parinkau tinkamas spalvas, kurios nekrenta per daug į
              akį, bei nukreipia vartotojo dėmesį ten kur reikia...
            </p>
            <ul class="news-info-link">
              <li>
                <a> Joga, Hatha</a>
              </li>
              <li>
                <a> 5 Komentarai</a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
};
</script>

<style scoped>
article {
  max-width: 650px;
  min-width: 255px;
}
.news_item_img {
  position: relative;
}

.news_item_img .news_item_date {
  position: absolute;
  bottom: -20px;
  left: 40px;
  background-color: #f06657;
  padding: 8px 15px;
  border-radius: 5px;
}

.news_item_img .news_item_date h3 {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
}

.news_item_img .news_item_date p {
  font-size: 18px;
  color: #fff;
}

.card-img {
  width: 100%;
}

.news_details {
  padding: 60px 30px 35px 35px;
}

.news_details h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
}

.news_details p {
  margin-bottom: 30px;
}

.news_details a:hover {
  color: #f06657;
}

.news-info-link li {
  float: left;
  font-size: 14px;
}

.news-info-link li a {
  color: #999999;
}

.news-info-link li i,
.news-info-link li span {
  font-size: 13px;
  margin-right: 5px;
}

.news-info-link li::after {
  content: "|";
  padding-left: 10px;
  padding-right: 10px;
}

.news-info-link li:last-child::after {
  display: none;
}

.news-info-link::after {
  content: "";
  display: block;
  clear: both;
  display: table;
}
</style>
