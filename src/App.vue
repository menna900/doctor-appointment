<template>
  <div :class="darkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'">
    <!-- Navbar -->
    <nav class="bg-gray-800 dark:bg-gray-900 px-4 py-2 flex items-center justify-between sticky top-0 z-50">
      <h1 class="text-xl font-bold text-white">WellnessWay</h1>

      <div class="flex items-center">
        <button @click="toggleMenu" class="md:hidden text-white text-2xl mr-2">☰</button>
        <ul
          :class="[
            'md:flex md:space-x-6 md:static absolute top-12 right-0 w-1/2 md:w-auto p-3 md:p-0 transition-all rounded shadow-lg',
            darkMode ? 'bg-gray-900 text-white' : 'bg-white text-green-600',
            menuOpen ? 'block' : 'hidden'
          ]"
        >
          <li><router-link class="nav-link" to="/">Home</router-link></li>
          <li><router-link class="nav-link" to="/doctors">Doctors</router-link></li>
          <li><router-link class="nav-link" to="/appointments">My Appointments</router-link></li>
          <li><router-link class="nav-link" to="/contact">Contact</router-link></li>
          <li><router-link class="nav-link" v-if="!isDoctorLoggedIn" to="/doctor-login">Doctor Login</router-link></li>
          <li><router-link class="nav-link" v-if="isDoctorLoggedIn" to="/doctor-dashboard">Doctor Dashboard</router-link></li>
        </ul>

        <button @click="darkMode = !darkMode" class="ml-4 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
          {{ darkMode ? '☀️' : '🌙' }}
        </button>
      </div>
    </nav>

    <!-- صفحات المشروع -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style>
.container { max-width: 1000px; margin: 0 auto; }

.nav-link {
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background 0.3s, color 0.3s;
}

.nav-link:hover {
  color: #22c55e; /* text-green-600 on hover */
  background: rgba(255,255,255,0.1);
}

/* Mobile menu adjustments */
@media (max-width: 768px) {
  ul {
    border-radius: 12px;
  }
}
</style>