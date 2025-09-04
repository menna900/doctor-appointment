<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">My Appointments</h2>
    <div v-if="appointments.length===0" class="p-6 rounded bg-white dark:bg-slate-800">No appointments yet.</div>
    <div class="space-y-3">
      <AppointmentCard v-for="a in appointments" :key="a.id" :apt="a" @cancel="cancel" @remind="remind" />
    </div>
  </div>
</template>

<script>
import AppointmentCard from '../components/AppointmentCard.vue'
import { useAppointmentsStore } from '../store/appointments'
import { computed } from 'vue'

export default {
  components: { AppointmentCard },
  setup(){
    const store = useAppointmentsStore()
    const appointments = computed(()=> store.appointments)
    const cancel = (id)=>{ if(confirm('Cancel?')) store.remove(id) }
    const remind = (apt)=>{ const mins = Math.round((new Date(apt.datetime) - new Date())/60000); alert(`Appointment in ${mins} minute(s)`)}
    return { appointments, cancel, remind }
  }
}
</script>