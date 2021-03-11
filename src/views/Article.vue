<template>
  <div class="main-content">
    <div class="mt-80 mb-80">
      <div class="section-title">
        <h3>tinklaraštis</h3>
      </div>
      <div class="row">
        <article>
          <img
            class="card-img"
            :src="require('@/assets/gallery/20278_cropped.jpg')"
            alt=""
          />
          <div class="article_content">
            <h2>Paieškoms pritaikyta puslapio kliento dalis</h2>
            <ul class="article-links">
              <li>
                <a> Joga, Hatha</a>
              </li>
              <li>
                <a> 5 Komentarai</a>
              </li>
            </ul>
            <p>
              <b
                >*tekstas nukopijuotas iš kolegijos užduoties ir atlieką tik
                "placeholder" paskirtį.</b
              ><br />
              Mano kurtame puslapyje, kuris yra jogos mokyklos reprezentacinis
              puslapis parinkau tinkamas spalvas, kurios nekrenta per daug į
              akį, bei nukreipia vartotojo dėmesį ten kur reikia. Kainų
              puslapyje matome abonementų sąrašą, kuriame yra paveikslėliai su
              tarpusavyje derančiomis ir panašaus intensyvumo spalvomis. Svarbi
              informacija yra paryškintu tekstu, taip užtikrinant, kad
              vartotojas susiras jam reikiamą informaciją ir todėl nepaliks
              puslapio iškart neradęs ko jam reikia.<br />Spalvų derinimui
              naudojau
              <a href="https://paletton.com" target="_blank">
                https://paletton.com </a
              >.
              <img
                class="article-img"
                :src="require('@/assets/article/1.png')"
              />
              Pagrindiniame puslapyje yra „šokinėjanti“ aukštyn ir žemyn
              rodyklytė, kuri parodo vartotojui, kad pažiūrėtų žemiau (skiltį
              „Paslaugos“). Tokios rodyklytės yra gan dažnai įdedamos, jei
              nelabai aišku, kad žemiau yra daugiau turinio.<br />Turint tokią
              rodyklę yra daugiau šansų, kad vartotojas pažiūrės kas yra žemiau.
              Labai nukentėtų puslapio SEO, jei vartotojas pagalvotų, kad
              apačioje nieko nėra ir paliktų puslapį vos į jį atėjęs.
              <img
                class="article-img"
                :src="require('@/assets/article/2.png')"
              />
              Puslapis yra visiškai prisitaikantis prie visų ekranų, įskaitant
              net pačius mažiausius telefonus ir tarpinius variantus.
              Informaciją yra labai patogu žiūrėti nesvarbu kokiu prietaisu
              vartotojas naudojasi.<br />Neužtenka sukurti puslapio kuris atrodo
              gražiai vien tik kompiuterio ekrane, reikia dar pagalvoti apie
              mobilius prietaisus naudojančius lankytojus. Vis gi net 62%
              lankytojų puslapiuose lankosi mobiliu telefonu!<br />Jei nebus
              prisitaikyta prie vartotojų ekranų dydžių, jie paliks puslapį ir
              todėl nukentės SEO.
              <img
                class="article-img"
                :src="require('@/assets/article/3.png')"
              />
              Greitai užkraunamas puslapis yra taipogi svarbu. Turintys įprastą
              interneto greitį mes gal ir nebūname priversti laukti, kol
              psulapis užsikraus. Tačiau, yra vartotojų mažose gyvenvietėse,
              kuriose interneto greitis gali būti ne toks greitas. Tokie
              vartotojai ne visada lauks, kol puslapis užsikraus ir gali palikti
              puslapį.<br />Jei aplikacija kuriama pasauliniu mastu, dar labiau
              reikia pagalvoti apie greitį ir per tinklą pernašamų duomenų
              kiekį, nes kai kuriose šalyse internetas yra nepalyginamai
              lėtesnis. Nuotraukoje matosi, kaip savo Vuejs projekte paleidus
              „npm run build“ komandą yra sugeneruojamas /dist aplankas su
              sumažintais (minified) CSS, HTML, JS failais.
              <img
                class="article-img"
                :src="require('@/assets/article/4.png')"
              />
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
};
</script>

<style scoped>
article {
  max-width: 730px;
}

.card-img {
  width: 100%;
}

.article_content {
  padding-top: 30px;
}

.article_content h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
}

.article_content p {
  margin: 20px 0;
}

.article_content a {
  color: -webkit-link;
}

.article_content a:hover {
  color: #f06657;
}

.article-links li {
  float: left;
  font-size: 14px;
}

.article-links li a {
  color: #999999;
}

.article-links li i,
.article-links li span {
  font-size: 13px;
  margin-right: 5px;
}

.article-links li::after {
  content: "|";
  padding-left: 10px;
  padding-right: 10px;
}

.article-links li:last-child::after {
  display: none;
}

.article-links::after {
  content: "";
  display: block;
  clear: both;
  display: table;
}

.article-img {
  width: 100%;
  margin: 20px 0 40px;
}
</style>
