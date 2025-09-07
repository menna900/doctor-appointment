<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
    <div class="flex items-center space-x-4">
      <img :src="doctor.photo" class="w-16 h-16 rounded-full object-cover" />
      <div>
        <h3 class="font-semibold">{{ doctor.name }}</h3>
        <p class="text-sm">{{ doctor.specialty }} • {{ doctor.location }}</p>
        <p class="text-xs">Rating: {{ doctor.rating }}</p>
      </div>
    </div>
    <div class="mt-3 flex justify-end">
      <router-link :to="`/doctor/${doctor.id}`" class="px-3 py-1 bg-blue-500 text-white rounded">Book</router-link>
      <RouterLink
  :to="{ name: 'Booking', params: { id: doctor.id } }"
  class="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition"
>
  Book Appointment
</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoctorCard',
  props: {
    doctor: { type: Object, required: true }
  }
}
</script>