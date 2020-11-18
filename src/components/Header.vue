<template>
  <header class="header">
    <div class="logo">
      <a href="index.html">
        <img :src="logo" alt="" />
      </a>
    </div>
    <nav class="menu">
      <ul>
        <li>
          <router-link to="/">pradinis</router-link>
        </li>
        <li>
          <router-link to="/kainos">kainos</router-link>
        </li>
        <li>
          <router-link to="/tvarkarastis">tvarkaraštis</router-link>
        </li>
        <li>
          <router-link to="/galerija">galerija</router-link>
        </li>
        <li>
          <router-link to="/kontaktai">kontaktai</router-link>
        </li>
      </ul>
    </nav>
    <div class="contact-btn">
      <a href="#" class="align-center"
        ><img :src="phone" alt="" />+370 6452 9901</a
      >
    </div>
    <button class="open-nav-overlay-btn" v-on:click="openNav">&#9776;</button>
    <div id="nav-overlay">
      <button class="nav-overlay_close-btn" v-on:click="closeNav">
        &times;
      </button>
      <nav class="nav-overlay_menu">
        <ul>
          <li>
            <router-link to="/">pradinis</router-link>
          </li>
          <li>
            <router-link to="/kainos">kainos</router-link>
          </li>
          <li>
            <router-link to="/tvarkarastis">tvarkaraštis</router-link>
          </li>
          <li>
            <router-link to="/galerija">galerija</router-link>
          </li>
          <li>
            <router-link to="/kontaktai">kontaktai</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logo: require("@/assets/logo.svg"),
      phone: require("@/assets/phone.png"),
    };
  },
  methods: {
    openNav() {
      document.getElementById("nav-overlay").style.width = "100%";
    },
    closeNav() {
      document.getElementById("nav-overlay").style.width = "0%";
    },
  },
};
</script>

<style>
.header {
  padding: 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.header .logo img {
  max-width: 50px;
  opacity: 0.6;
}

.header .menu {
  display: none;
}

@media (min-width: 768px) {
  .header .menu {
    display: flex;
  }
}

.header .menu li {
  display: inline-block;
  margin: 0 10px;
}

.header .menu li a {
  text-transform: capitalize;
}

.header .menu li a:hover,
.header .menu li .router-link-exact-active {
  color: #f06657;
}

.contact-btn {
  display: none;
}

@media (min-width: 768px) {
  .header .contact-btn {
    display: flex;
  }
}

.contact-btn a {
  padding: 9px 17px;
  border: 1px solid #f06657;
  color: #f06657;
  border-radius: 30px;
}

@media (min-width: 992px) {
  .header .contact-btn a {
    padding: 11px 26px;
  }
}

.contact-btn a:hover {
  color: #fff;
  background: #f06657;
}

.contact-btn img {
  width: 16px;
  margin-right: 6px;
  transform: rotate(80deg);
}

.open-nav-overlay-btn {
  font-size: 28px;
  opacity: 0.6;
  transform: scale(1.2, 1);
}

#nav-overlay {
  height: 100%;
  width: 0%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #fff;
  transition: 0.5s;
}

.nav-overlay_menu {
  position: relative;
  top: 25%;
  text-align: center;
}

#nav-overlay a {
  font-size: 24px;
  display: block;
  text-transform: capitalize;
  line-height: 50px;
}

#nav-overlay a:hover,
#nav-overlay a:focus {
  color: #f06657;
}

.nav-overlay_close-btn {
  position: absolute;
  top: 35px;
  left: 35px;
  line-height: 0.8;
  font-size: 50px;
  opacity: 0.6;
}

@media (min-width: 768px) {
  .header #nav-overlay {
    display: none;
  }
  .header .open-nav-overlay-btn {
    display: none;
  }
}
</style>
