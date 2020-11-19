<template>
  <div class="mb-80">
    <div class="section-title">
      <h3>paslaugos</h3>
    </div>
    <div class="row">
      <Service
        img="extended.svg"
        heading="Asmeninės treniruotės"
        paragraph="Dėl asmeninių treniruočių susiekti asmeniškai."
      />
      <Service
        img="revolver.svg"
        heading="Grupinės treniruotės"
        paragraph="Grupinės treniruotės vyksta kas savaitę, po 8-10 žmonių vienoje grupėje."
      />
      <Service
        img="cobra.svg"
        heading="Mokytojų kursai"
        paragraph="Dėl jogos mokytojų kursų sekite mūsų naujienas arba susisiekite asmeniškai."
      />
    </div>
  </div>
</template>

<script>
import Service from "@/components/ServicesList/Service.vue";

export default {
  name: "ServicesList",
  components: {
    Service,
  },
};
</script>
