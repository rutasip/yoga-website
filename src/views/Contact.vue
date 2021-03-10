<template>
  <div class="main-content">
    <div class="three-column-section mt-80 mb-80">
      <div class="section-title">
        <h3>susisiekite su mumis</h3>
      </div>
      <form class="contact-form" action="#" @submit.prevent="sendMessage">
        <div class="row">
          <div class="col-one-third m-0">
            <input
              type="text"
              class="input-field"
              v-model="nameInput"
              pattern="[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ ]+"
              minlength="3"
              maxlength="20"
              oninvalid="this.setCustomValidity('Įveskite vardą. Leidžiamos mažosios raidės, didžiosios raidės, skaičiai')"
              oninput="this.setCustomValidity('')"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Vardas *'"
              placeholder="Vardas *"
            />
            <input
              type="email"
              class="input-field"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2}$"
              v-model="emailInput"
              minlength="6"
              maxlength="40"
              oninvalid="this.setCustomValidity('Įveskite el. pašto adresą formatu: vardas@gmail.com')"
              oninput="this.setCustomValidity('')"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'El. paštas *'"
              placeholder="El. paštas *"
            />
            <input
              type="tel"
              class="input-field"
              v-model="telInput"
              pattern="([+370]{4}|[86]{2})[0-9]{6,}"
              minlength="6"
              maxlength="15"
              oninvalid="this.setCustomValidity('Įveskite tel. nr. formatu: 86123456')"
              oninput="this.setCustomValidity('')"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Tel. numeris'"
              placeholder="Tel. numeris"
              required
            />
          </div>
          <div class="col-two-thirds m-0">
            <textarea
              type="text"
              class="text-field"
              v-model="messageInput"
              maxlength="200"
              oninvalid="this.setCustomValidity('Įveskite pranešimą iki 200 simbolių')"
              oninput="this.setCustomValidity('')"
              rows="8"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Pranešimas iki 200 simbolių *'"
              placeholder="Pranešimas iki 200 simbolių *"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-one-third m-0">
            <div class="newsletter">
              <div class="newsletter-checkbox">
                <input type="checkbox" id="newsletter-checkbox" />
                <label for="newsletter-checkbox"></label>
              </div>
              <p>Prenumeruoti naujienlaiškį?</p>
            </div>
          </div>
          <div class="col-two-thirds">
            <div class="newsletter">
              <div class="newsletter-checkbox">
                <input type="checkbox" id="newsletter-checkbox" />
                <label for="newsletter-checkbox"></label>
              </div>
              <p>Ar galime saugoti Jūsų kontaktinius duomenis?</p>
            </div>
          </div>
        </div>
        <div class="row justify-center mt-50">
          <div class="col-one-third">
            <button class="boxed-btn" type="submit">siųsti pranešimą</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <teleport v-if="showModal" to="#modals">
    <div class="modal">
      <p>Vardas: {{ nameInput }}</p>
      <p>El. paštas: {{ emailInput }}</p>
      <p>Tel. numeris: {{ telInput }}</p>
      <p>Pranešimas: {{ messageInput }}</p>
      <button class="boxed-btn" @click="closeModalAndReset">Uždaryti</button>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      nameInput: "",
      emailInput: "",
      telInput: "",
      messageInput: "",
      oninput: "this.setCustomValidity('')",
      check: require("@/assets/primary-check.png"),
      showModal: false,
    };
  },
  mounted() {
    const headings = document.body.querySelectorAll("h2, h3, h4, h5");
    localStorage.getItem("headingsColor") &&
      headings.forEach((heading) => heading.classList.add("red-font"));
    localStorage.getItem("headingsSize") &&
      headings.forEach((heading) => heading.classList.add("enlarge-font"));
  },
  methods: {
    sendMessage() {
      this.nameInput &&
        this.emailInput &&
        this.messageInput !== "" &&
        (this.showModal = true);
    },
    closeModalAndReset() {
      this.showModal = false;
      this.nameInput = "";
      this.emailInput = "";
      this.telInput = "";
      this.messageInput = "";
    },
  },
};
</script>

<style>
.newsletter {
  display: flex;
  align-items: center;
}

.newsletter p {
  padding-left: 10px;
}

.newsletter-checkbox {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
}

.newsletter-checkbox input {
  opacity: 0;
}

.newsletter-checkbox input + label {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #f06657;
}

.newsletter-checkbox input:checked + label {
  background: url("~@/assets/primary-check.png") no-repeat center center/cover;
  border: none;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 400px;
  background: lightgray;
  text-align: center;
}
</style>
