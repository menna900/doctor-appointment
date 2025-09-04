<template>
  <div class="max-w-5xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Doctor Dashboard</h2>
    <div v-if="apts.length===0" class="p-4 rounded bg-white dark:bg-slate-800">No upcoming appointments.</div>
    <div class="space-y-3">
      <div v-for="a in apts" :key="a.id" class="p-4 rounded bg-white dark:bg-slate-800 flex justify-between">
        <div>
          <p class="font-semibold">{{ a.patient.name }} <span class="text-sm text-slate-400">({{ a.patient.phone }})</span></p>
          <p class="text-sm">{{ new Date(a.datetime).toLocaleString() }}</p>
        </div>
        <div class="text-sm">{{ a.doctor.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAppointmentsStore } from '../store/appointments'
import { computed } from 'vue'
export default {
  setup(){
    const store = useAppointmentsStore()
    // demo: show all appointments assigned to doctor id 2 (if you want auth, replace)
    const apts = computed(()=> store.appointments.filter(a=> a.doctor && a.doctor.id === 2))
    return { apts }
  }
}
</script>