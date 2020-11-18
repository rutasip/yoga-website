<template>
  <div class="main-content">
    <div class="three-column-section mt-80 mb-80">
      <div class="section-title">
        <h3>tvarkaraštis</h3>
      </div>
      <div class="row">
        <div class="col-one-third max-width-380">
          <div class="timetable box-shadow">
            <h3>Trenerė <b>Aušra</b></h3>
            <div class="table-head">
              <div class="day">Diena</div>
              <div class="time">Laikas</div>
            </div>
            <div class="table-row">
              <div class="day">Pirmadienis</div>
              <div class="time">8:00</div>
            </div>
            <div class="table-row">
              <div class="day">Trečiadienis</div>
              <div class="time">8:00</div>
            </div>
            <div class="table-row">
              <div class="day">Penktadienis</div>
              <div class="time">8:00</div>
            </div>
          </div>
        </div>
        <div class="col-one-third max-width-380">
          <div class="timetable box-shadow">
            <h3>Trenerė <b>Gintarė</b></h3>
            <div class="table-head">
              <div class="day">Diena</div>
              <div class="time">Laikas</div>
            </div>
            <div class="table-row">
              <div class="day">Pirmadienis</div>
              <div class="time">8:00</div>
            </div>
            <div class="table-row">
              <div class="day">Trečiadienis</div>
              <div class="time">8:00</div>
            </div>
            <div class="table-row">
              <div class="day">Penktadienis</div>
              <div class="time">8:00</div>
            </div>
            <div class="table-row">
              <div class="day">Šeštadienis</div>
              <div class="time">8:00</div>
            </div>
          </div>
        </div>
        <div class="col-one-third max-width-380">
          <div class="timetable box-shadow">
            <h3>Treneris <b>Lukas</b></h3>
            <div class="table-head">
              <div class="day">Diena</div>
              <div class="time">Laikas</div>
            </div>
            <div class="table-row">
              <div class="day">Pirmadienis</div>
              <div class="time">8:00</div>
            </div>
            <div class="table-row">
              <div class="day">Trečiadienis</div>
              <div class="time">8:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timetable",
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
}

.row .col-one-third:nth-child(1) .timetable h3 {
  background-color: #f5f5ff;
}

.row .col-one-third:nth-child(2) .timetable h3 {
  background-color: #fff0f8;
}

.row .col-one-third:nth-child(3) .timetable h3 {
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
