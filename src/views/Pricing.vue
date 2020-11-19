<template>
  <div class="main-content">
    <div class="mt-80 mb-80">
      <div class="section-title">
        <h3>kainos</h3>
      </div>
      <div class="row">
        <Price
          img="cobra.svg"
          heading="Vienkartinis apsilankymas"
          :features="['Galioja 1 mėn.', 'Trukmė: 1 val. 30 min.']"
          :price="14"
        />
        <Price
          img="camel.svg"
          heading="4 kartų abonementas"
          :features="[
            'Galioja 1 mėn.',
            'Trukmė: 1 val. 30 min.',
            'Įskaičiuota kilimėlio nuoma',
          ]"
          :price="45"
        />
        <Price
          img="candle.svg"
          heading="8 kartų abonementas"
          :features="[
            'Galioja 2 mėn.',
            'Trukmė: 1 val. 30 min.',
            'Įskaičiuota kilimėlio nuoma',
          ]"
          :price="80"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Price from "@/components/Price.vue";

export default {
  name: "Pricing",
  components: {
    Price,
  },
};
</script>
