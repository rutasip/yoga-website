<template>
  <Header />
  <div class="container">
    <router-view />
    <Sidebar />
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Yogendra - Jogos Studija";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: #001d38;
  font-weight: 500;
}

p,
li,
a {
  margin: 0;
  color: #727272;
  font-weight: 400;
  line-height: 1.6rem;
  font-size: 15px;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a,
button {
  text-decoration: none;
  transition: 0.3s;
}

button,
input,
select,
textarea {
  margin: 0;
  font-family: inherit;
}

button {
  border: none;
  outline: none;
  background: none;
  padding: 0;
  cursor: pointer;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
}

.col-one-third {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 30px;
  min-width: 255px;
  flex: 1;
  max-width: 33.33%;
}

.col-two-thirds {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 100%;
}

@media (min-width: 768px) {
  .col-two-thirds {
    max-width: 66.66%;
  }
}

/* ALIGNMENT */
.center-x-y {
  display: flex;
  align-items: center;
  justify-content: center;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.align-center {
  display: flex;
  align-items: center;
}

.text-center {
  text-align: center;
}

/* SPACING */
.m-0 {
  margin: 0;
}

.mt-80 {
  margin-top: 80px;
}

.mt-50 {
  margin-top: 50px;
}

.mt-10 {
  margin-top: 10px;
}

.mb-100 {
  margin-bottom: 100px;
}

.mb-80 {
  margin-bottom: 80px;
}

/* WIDTH */
.mobile-full-width {
  max-width: 100%;
}

@media (min-width: 768px) {
  .mobile-full-width {
    max-width: min-content;
  }
}

.max-width-320 {
  max-width: 320px;
}

.max-width-380 {
  max-width: 380px;
}

.max-width-440 {
  max-width: 440px;
}

/* Items */
.input-field,
.text-field {
  border: 1px solid #f0e9ff;
  margin-bottom: 20px;
  font-size: 13px;
  width: 100%;
  max-width: 100%;
  padding-left: 20px;
}

.input-field {
  height: 50px;
}

.text-field {
  padding-top: 14px;
}

.input-field::placeholder,
.text-field::placeholder {
  color: #999999;
}

.input-field:focus,
.text-field:focus {
  border-color: #f0e9ff;
  outline: 0;
}

.boxed-btn {
  background: #fff;
  font-size: 14px;
  border: 1px solid #f06657;
  letter-spacing: 3px;
  color: #f06657;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  height: 50px;
}

.boxed-btn:hover {
  background: #f06657;
  color: #fff;
}

.boxed-btn:focus {
  outline: none;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h3 {
  font-size: 32px;
}

.section-title h3:first-letter {
  text-transform: capitalize;
}

.box-shadow {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
}

.container {
  display: flex;
  flex-wrap: wrap;
  padding-right: 25px;
  padding-left: 25px;
}

@media (min-width: 1200px) {
  .container {
    flex-wrap: nowrap;
  }
}
</style>
