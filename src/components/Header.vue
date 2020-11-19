<template>
  <header class="header">
    <div class="logo">
      <a href="index.html">
        <img :src="logo" alt="" />
        <h4>Yogendra</h4>
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
        ><i class="material-icons">phone</i>+370 6452 9901</a
      >
    </div>
    <button class="open-nav-overlay-btn" v-on:click="openNav">
      <i class="material-icons">menu</i>
    </button>
    <div id="nav-overlay">
      <button class="nav-overlay_close-btn" v-on:click="closeNav">
        <i class="material-icons">close</i>
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

.header .logo a {
  display: flex;
  align-items: center;
  opacity: 0.8;
}

.header .logo img {
  max-width: 50px;
  margin-right: 8px;
  opacity: 0.7;
}

.header .logo h4 {
  color: #f06657;
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

@media (min-width: 992px) {
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

.contact-btn .material-icons {
  font-size: 18px;
  font-weight: 600;
  margin-right: 3px;
  transform: rotate(12deg);
}

.open-nav-overlay-btn .material-icons {
  opacity: 0.6;
  font-size: 34px;
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
  top: 30px;
  left: 30px;
}

.nav-overlay_close-btn .material-icons {
  opacity: 0.6;
  font-size: 34px;
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
