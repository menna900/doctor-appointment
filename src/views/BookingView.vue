<template>
  <div class="max-w-4xl mx-auto p-6">
    <div v-if="doctor">
      <h2 class="text-2xl font-bold">Book with {{ doctor.name }}</h2>
      <p class="text-sm text-slate-500">{{ doctor.specialty }} • {{ doctor.location }}</p>
      <form @submit.prevent="submit" class="mt-4 space-y-3 max-w-md">
        <input v-model="name" placeholder="Your name" required class="w-full p-2 rounded border" />
        <input v-model="phone" placeholder="Phone" required class="w-full p-2 rounded border" />
        <input v-model="email" type="email" placeholder="Email" required class="w-full p-2 rounded border" />
        <input v-model="date" type="date" :min="today" required class="w-full p-2 rounded border" />
        <select v-model="time" required class="w-full p-2 rounded border">
          <option value="">Choose time</option>
          <option v-for="t in times" :key="t">{{ t }}</option>
        </select>
        <button class="bg-brand-500 text-white px-4 py-2 rounded">Confirm</button>
      </form>
    </div>
    <div v-else>Doctor not found.</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppointmentsStore } from '../store/appointments'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    const id = Number(route.params.id)
    const doctors = [
      {id:1, name:'Dr. Sara Hassan', specialty:'Dentist', location:'Dokki', photo:''},
      {id:2, name:'Dr. Omar Mostafa', specialty:'Cardiologist', location:'Nasr City', photo:''}
    ]
    const doctor = doctors.find(d=>d.id===id) || null

    const name = ref(''), phone = ref(''), email = ref(''), date = ref(''), time = ref('')
    const times = ['10:00','12:00','15:00']
    const today = new Date().toISOString().slice(0,10)
    const store = useAppointmentsStore()

    const submit = ()=>{
      if(!name.value||!phone.value||!email.value||!date.value||!time.value) return alert('fill all')
      const apt = { id: 'apt_'+Math.random().toString(36).slice(2), doctor, datetime: new Date(date.value+'T'+time.value+':00').toISOString(), patient:{ name:name.value, phone:phone.value, email:email.value } }
      store.add(apt)
      alert('Booked!')
      router.push('/appointments')
    }

    return { doctor, name, phone, email, date, time, times, today, submit }
  }
}
</script>