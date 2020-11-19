<template>
  <div class="main-content">
    <div class="mt-80 mb-80">
      <div class="section-title">
        <h3>tvarkaraštis</h3>
      </div>
      <div class="row">
        <Timetable
          teacher="Aušra"
          :times="[
            { day: 'Pirmadienis', hour: '8:30' },
            { day: 'Trečiadienis', hour: '8:30' },
            { day: 'Penktadienis', hour: '8:30' },
          ]"
        />
        <Timetable
          teacher="Lukas"
          :times="[
            { day: 'Šeštadienis', hour: '12:00' },
            { day: 'Sekmadienis', hour: '12:00' },
          ]"
        />
        <Timetable
          teacher="Gintarė"
          :times="[
            { day: 'Antradienis', hour: '18:00' },
            { day: 'Ketvirtadienis', hour: '18:00' },
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Timetable from "@/components/Timetable.vue";

export default {
  name: "Timetables",
  components: {
    Timetable,
  },
};
</script>
