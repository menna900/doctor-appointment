<template>
  <div>
  
    <header class="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <h1 class="text-2xl font-bold text-blue-600">Doctor Booking</h1>
      <nav class="flex gap-6">
        <router-link to="/" class="hover:text-blue-600 transition">Home</router-link>
        <router-link to="/doctors" class="hover:text-blue-600 transition">Doctors</router-link>
        <router-link to="/appointments" class="hover:text-blue-600 transition">My Appointments</router-link>
        <router-link to="/contact" class="hover:text-blue-600 transition">Contact</router-link>
        <router-link to="/login" class="hover:text-blue-600 transition">Doctor Login</router-link>
      </nav>
    </header>

    
    <router-view />
  </div>
</template>