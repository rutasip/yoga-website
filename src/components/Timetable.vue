<template>
  <div class="col-one-third max-width-380">
    <div class="timetable box-shadow">
      <h3>
        Treneris(-ė) <b>{{ teacher }}</b>
      </h3>
      <div class="table-head">
        <div class="day">Diena</div>
        <div class="time">Laikas</div>
      </div>
      <div v-for="(time, index) in times" :key="index" class="table-row">
        <div class="day">{{ time.day }}</div>
        <div class="time">{{ time.hour }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timetable",
  props: {
    teacher: String,
    times: Array,
  },
};
</script>

<style>
.timetable {
  padding-bottom: 24px;
}

.timetable h3 {
  font-weight: 400;
  padding: 24px 30px;
  margin-bottom: 24px;
  background-color: #fff0f8;
}

.col-one-third:nth-child(2) .timetable h3 {
  background-color: #f5f5ff;
}

.col-one-third:nth-child(3) .timetable h3 {
  background-color: #effdf5;
}

.timetable h3 b {
  font-weight: 500;
}

.timetable .table-head {
  display: flex;
  padding-bottom: 16px;
}

.timetable .table-head .day,
.timetable .table-head .time {
  color: #415094;
  text-transform: uppercase;
  font-weight: 500;
}

.timetable .day {
  width: 65%;
  padding-left: 30px;
}

.timetable .time {
  width: 35%;
}

.timetable .table-row {
  padding: 15px 0;
  border-top: 1px solid #edf3fd;
  display: flex;
}
</style>
