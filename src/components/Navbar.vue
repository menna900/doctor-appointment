<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10 top-0 left-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <h1 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            MediBook
          </h1>
        </div>

        <!-- Desktop menu -->
        <div class="hidden md:flex space-x-6 items-center">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/doctors" class="nav-link">Doctors</router-link>
          <router-link to="/appointments" class="nav-link">My Appointments</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>

          <!-- Dark Mode Toggle -->
          <button
            @click="$emit('toggle-dark')"
            class="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            Toggle Dark
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden bg-white dark:bg-gray-900 px-2 pt-2 pb-3 space-y-1">
      <router-link to="/" class="mobile-link">Home</router-link>
      <router-link to="/doctors" class="mobile-link">Doctors</router-link>
      <router-link to="/appointments" class="mobile-link">My Appointments</router-link>
      <router-link to="/contact" class="mobile-link">Contact</router-link>

      <button
        @click="$emit('toggle-dark')"
        class="w-full mt-2 px-3 py-2 rounded-md text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      >
        Toggle Dark
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition;
}
.mobile-link {
  @apply block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition;
}
</style>
