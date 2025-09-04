<template>
  <nav class="bg-white dark:bg-slate-800 shadow px-4 py-3">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="h-10 w-10 rounded-lg bg-gradient-to-tr from-brand-500 to-blue-300 text-white flex items-center justify-center font-bold">CX</div>
        <div class="hidden sm:block font-semibold">ClinicX</div>
      </div>
      <ul class="hidden md:flex items-center gap-4 text-sm">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/doctors">Doctors</router-link></li>
        <li><router-link to="/appointments">My Appointments</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/dashboard">Doctor Dashboard</router-link></li>
      </ul>
      <div class="flex items-center gap-3">
        <DarkToggle />
        <button @click="$router.push('/appointments')" class="text-sm">Appointments</button>
      </div>
    </div>
  </nav>
</template>

<script>
import DarkToggle from './DarkToggle.vue'
export default { components: { DarkToggle } }
</script>