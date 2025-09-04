<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col">
    <!-- Hero Section -->
    <main class="flex flex-col md:flex-row flex-1 items-center justify-center p-8">
      <!-- Text -->
      <div class="md:w-1/2 text-center md:text-left space-y-6">
        <h2 class="text-5xl font-extrabold text-gray-800">
          Book Your Doctor Easily
        </h2>
        <p class="text-lg text-gray-600">
          Find the right doctor for your needs and book an appointment in just a few clicks.
        </p>
        <router-link
          to="/doctors"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Book Now
        </router-link>
      </div>

      <!-- Image -->
      <div class="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
          alt="Doctor Appointment"
          class="max-w-md rounded-2xl shadow-lg"
        />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>