<template>
  <div class="fixed inset-0 z-40 flex items-center justify-center p-4" v-if="open">
    <div class="absolute inset-0 bg-black/40" @click="$emit('close')"></div>
    <div class="relative bg-white dark:bg-slate-900 rounded-2xl p-6 w-full max-w-lg shadow-lg">
      <button class="absolute right-3 top-3" @click="$emit('close')">✕</button>
    <slot />
    </div>
  </div>
</template>
<script>export default { props:['open'] }</script>