<template>
  <div class="main-content">
    <div class="hero justify-center mb-100">
      <div class="hero_bg">
        <img :src="hero" />
        <div class="hero_arrow bounce">
          <i class="material-icons">expand_more</i>
        </div>
      </div>
      <div class="hero_title center-x-y">
        <h3>yogendra jogos studija</h3>
      </div>
    </div>
    <ServicesList />
    <NewsLargeList />
  </div>
</template>

<script>
import ServicesList from "@/components/ServicesList/ServicesList.vue";
import NewsLargeList from "@/components/NewsLargeList/NewsLargeList.vue";

export default {
  name: "Home",
  components: {
    ServicesList,
    NewsLargeList,
  },
  data() {
    return {
      hero: require("@/assets/hero.png"),
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
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.hero_arrow .material-icons {
  opacity: 0.6;
  font-size: 50px;
  cursor: default;
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
</style>
