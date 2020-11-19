<template>
  <div class="main-content">
    <div class="three-column-section mt-80 mb-80">
      <div class="section-title">
        <h3>susisiekite su mumis</h3>
      </div>
      <form action="#">
        <div class="row">
          <div class="col-one-third mobile-full-width m-0">
            <input
              type="text"
              class="input-field"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Vardas'"
              placeholder="Vardas"
              required
            />
            <input
              type="email"
              class="input-field"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'El. paštas'"
              placeholder="El. paštas"
              required
            />
          </div>
          <div class="col-two-thirds m-0">
            <textarea
              class="text-field"
              rows="7"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Pranešimas'"
              placeholder="Pranešimas"
              required
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
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      check: require("@/assets/primary-check.png"),
    };
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
</style>
