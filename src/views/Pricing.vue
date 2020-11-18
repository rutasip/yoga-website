<template>
  <div class="main-content">
    <div class="three-column-section mt-80 mb-80">
      <div class="section-title">
        <h3>kainos</h3>
      </div>
      <div class="row">
        <div class="col-one-third max-width-320">
          <div class="pricing box-shadow">
            <div class="icon center-x-y">
              <img :src="cobra" alt="" />
            </div>
            <h3>Vienkartinis apsilankymas</h3>
            <ul>
              <li>Trukmė: 1 val. 30 min.</li>
              <li></li>
              <li>Kaina: <b>14€</b></li>
            </ul>
          </div>
        </div>
        <div class="col-one-third max-width-320">
          <div class="pricing box-shadow">
            <div class="icon center-x-y">
              <img :src="camel" alt="" />
            </div>
            <h3>
              4 kartų <br />
              abonementas
            </h3>
            <ul>
              <li>Galioja 1 mėn.</li>
              <li>Trukmė: 1 val. 30 min.</li>
              <li>Įskaičiuota kilimėlio nuoma</li>
              <li>Kaina: <b>45€</b></li>
            </ul>
          </div>
        </div>
        <div class="col-one-third max-width-320">
          <div class="pricing box-shadow">
            <div class="icon center-x-y">
              <img :src="candle" alt="" />
            </div>
            <h3>
              8 kartų <br />
              abonementas
            </h3>
            <ul>
              <li>Galioja 2 mėn.</li>
              <li>Trukmė: 1 val. 30 min.</li>
              <li>Įskaičiuota kilimėlio nuoma</li>
              <li>Kaina: <b>80€</b></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      cobra: require("@/assets/yoga/cobra.svg"),
      camel: require("@/assets/yoga/camel.svg"),
      candle: require("@/assets/yoga/candle.svg"),
    };
  },
};
</script>

<style>
.three-column-section .pricing {
  padding: 45px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.three-column-section .pricing .icon {
  width: 95px;
  height: 95px;
  border-radius: 50%;
}

.three-column-section .col-one-third:nth-child(1) .pricing .icon {
  background: #f5f5ff;
}

.three-column-section .col-one-third:nth-child(2) .pricing .icon {
  background: #fff0f8;
}

.three-column-section .col-one-third:nth-child(3) .pricing .icon {
  background: #effdf5;
}

.three-column-section .pricing .icon img {
  width: 50px;
  height: 50px;
}

.three-column-section .pricing h3 {
  font-size: 22px;
  font-weight: 400;
  margin: 36px 0 24px 0;
}
</style>
