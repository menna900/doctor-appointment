<template>
  <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-between">
    <div>
      <p class="font-semibold">{{ apt.doctor.name }} <span class="text-sm text-slate-400">— {{ apt.doctor.specialty }}</span></p>
      <p class="text-sm">{{ formatDate(apt.datetime) }}</p>
    </div>
    <div class="flex gap-2">
      <button @click="$emit('remind', apt)" class="px-3 py-1 border rounded">Remind</button>
      <button @click="$emit('cancel', apt.id)" class="px-3 py-1 bg-red-600 text-white rounded">Cancel</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['apt'],
  methods: {
    formatDate(iso){ return new Date(iso).toLocaleString() }
  }
}
</script>