<template>
  <form @submit.prevent="onSubmit" class="space-y-3">
    <input v-model.trim="name" placeholder="Name" required class="w-full p-2 rounded border" />
    <input v-model.trim="email" type="email" placeholder="Email" required class="w-full p-2 rounded border" />
    <textarea v-model.trim="message" placeholder="Message" rows="4" class="w-full p-2 rounded border" required></textarea>
    <button class="bg-brand-500 text-white px-4 py-2 rounded">Send</button>
    <p v-if="sent" class="text-green-600">Sent — thanks!</p>
  </form>
</template>
<script>
import { ref } from 'vue'
export default {
  setup(){
    const name = ref(''), email = ref(''), message = ref(''), sent = ref(false)
    const onSubmit = ()=>{ sent.value = true; name.value=''; email.value=''; message.value=''; setTimeout(()=>sent.value=false, 2000) }
    return { name, email, message, sent, onSubmit }
  }
}
</script>