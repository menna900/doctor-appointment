<template>
  <button @click="toggle" class="p-2 rounded-full bg-slate-100 dark:bg-slate-700">
    <span v-if="isDark">☀️</span>
    <span v-else>🌙</span>
  </button>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup(){
    const isDark = ref(false)
    onMounted(()=>{
      isDark.value = localStorage.theme === 'dark'
      document.documentElement.classList.toggle('dark', isDark.value)
    })
    const toggle = ()=>{
      isDark.value = !isDark.value
      document.documentElement.classList.toggle('dark', isDark.value)
      localStorage.theme = isDark.value ? 'dark' : 'light'
    }
    return { isDark, toggle }
  }
}
</script>