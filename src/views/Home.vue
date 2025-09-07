<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 py-12 transition-colors duration-300">
    <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      <!-- النص -->
        <div
    class="home-hero flex flex-col items-center justify-center text-center py-32 px-4 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-gray-900 dark:to-gray-800"
  >
        <h1 class="text-5xl md:text-6xl font-extrabold text-blue-600 mb-6 leading-tight">
      Welcome to <span class="text-green-600">WellnessWay</span>
    </h1>
    <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-12">
      Book appointments with top doctors effortlessly and manage your health with ease.
    </p>
        <router-link 
          to="/doctors"
          class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
        >
          Find Doctors
        </router-link>
      </div>

       <div class="image-section  flex justify-center">
      <img 
        src="https://media.istockphoto.com/id/1021670950/photo/health-worker-holding-patients-hand.jpg?s=1024x1024&w=is&k=20&c=mdub0L_YuhCATYp1BqWS_7NPhhvHN_YC6mCgvozWR7I=" 
        alt="Health Care" 
        class="rounded-xl shadow-lg max-w-full h-auto object-cover"
      />
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped> 
.image-section img:hover {
  
  filter: brightness(1.1);
}
</style>

<script setup>
</script>