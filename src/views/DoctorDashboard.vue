<template>
  <div class="dashboard">
    <h1>Doctor Dashboard</h1>
    <div v-if="doctorAppointments.length > 0">
      <h2>Your Appointments:</h2>
      <ul>
        <li v-for="(appt, index) in doctorAppointments" :key="index">
          <strong>Patient:</strong> {{ appt.patientName }} <br />
          <strong>Day:</strong> {{ appt.day }} <br />
          <strong>Time:</strong> {{ appt.time }}
        </li>
      </ul>
    </div>
    <p v-else>No appointments found for your ID.</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { appointments } from "../data/appointments";

export default {
  setup() {
    const id = localStorage.getItem("doctorId"); // جاي من صفحة اللوجن

    const doctorAppointments = computed(() =>
      appointments.filter((appt) => appt.id.toString() === id)
    );

    return { doctorAppointments };
  },
};
</script>

<style scoped>
.dashboard {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: #22c55e;
  border-radius: 12px;
  box-shadow: 0 4px 10px #ccc;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 12px;
  margin-bottom: 10px;
  background: #fffefe;
  border-radius: 8px;
}
</style>