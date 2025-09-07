<template>
  <div class="container">
    <h1>My Appointments</h1>
    <ul>
      <li v-for="(appt, index) in appointments" :key="index">
        Doctor ID: {{ appt.id }} - Patient: {{ appt.patientName }} - Day: {{ appt.day }} - Time: {{ appt.time }}
        <button @click="cancelAppointment(index)">Cancel</button>
      </li>
      <li v-if="appointments.length === 0">No appointments yet.</li>
    </ul>
  </div>
</template>

<script>
import { appointments } from "../data/appointments";

export default {
  setup() {
    const cancelAppointment = (index) => {
      if (confirm("Are you sure you want to cancel this appointment?")) {
        appointments.splice(index, 1);
      }
    };

    return { appointments, cancelAppointment };
  }
};
</script>

<style scoped>
.container { max-width: 800px; margin: 20px auto; padding: 20px; }
h1 { font-size: 24px; margin-bottom: 20px; text-align: center; }
ul { list-style: none; padding: 0; }
li { padding: 8px; border-bottom: 1px solid #ccc; display: flex; justify-content: space-between; align-items: center; }
li button { padding: 4px 8px; border-radius: 6px; border: none; background: gray; color: #fff; cursor: pointer; }
li button:hover { background: #22c55e; }
</style>