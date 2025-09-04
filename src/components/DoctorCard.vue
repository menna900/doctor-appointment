<template>
  <article class="bg-white dark:bg-slate-900 rounded-2xl shadow p-4">
    <img :src="doctor.photo" alt="" class="w-full h-40 object-cover rounded-lg" />
    <h3 class="mt-3 font-semibold">{{ doctor.name }}</h3>
    <p class="text-sm text-slate-500">{{ doctor.specialty }} • {{ doctor.location }}</p>
    <div class="mt-3 flex items-center gap-2">
      <button @click="$emit('book', doctor)" class="flex-1 bg-brand-500 text-white py-2 rounded-xl">Book</button>
      <router-link :to="`/booking/${doctor.id}`" class="px-3 py-2 rounded-xl border">Details</router-link>
    </div>
  </article>
</template>

<script>
export default {
  props: { doctor: Object }
}
</script>