<template>
  <div class="max-w-6xl mx-auto p-6">
    <div class="mb-4 grid md:grid-cols-4 gap-3">
      <input v-model="search" placeholder="Search name or specialty" class="col-span-2 p-2 rounded border" />
      <select v-model="filter" class="p-2 rounded border">
        <option value="">All specialties</option>
        <option v-for="s in specialties" :key="s">{{ s }}</option>
      </select>
      <div class="flex items-end">
        <button @click="reset" class="px-3 py-2 rounded border">Reset</button>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <DoctorCard v-for="d in paginated" :key="d.id" :doctor="d" @book="openBooking" />
    </div>

    <div class="mt-6 flex items-center justify-center gap-3">
      <button @click="prevPage" class="px-3 py-1 border rounded">Prev</button>
      <span>Page {{ page }} / {{ totalPages }}</span>
      <button @click="nextPage" class="px-3 py-1 border rounded">Next</button>
    </div>

    <BookingModal :open="modalOpen" @close="modalOpen=false">
      <div v-if="activeDoc">
        <h3 class="text-xl font-semibold">Book — {{ activeDoc.name }}</h3>
        <form @submit.prevent="confirm">
          <input v-model="form.name" required placeholder="Patient name" class="w-full p-2 rounded border mt-2" />
          <input v-model="form.phone" required placeholder="Phone" class="w-full p-2 rounded border mt-2" />
          <input v-model="form.email" required placeholder="Email" class="w-full p-2 rounded border mt-2" />
          <input v-model="form.date" type="date" required class="w-full p-2 rounded border mt-2" :min="today" />
          <select v-model="form.time" required class="w-full p-2 rounded border mt-2">
            <option value="">Choose time</option>
            <option v-for="t in times" :key="t">{{ t }}</option>
          </select>
          <button class="mt-3 w-full bg-brand-500 text-white py-2 rounded">Confirm</button>
        </form>
      </div>
    </BookingModal>
  </div>
</template>

<script>
import DoctorCard from '../components/DoctorCard.vue'
import BookingModal from '../components/BookingModal.vue'
import { ref, computed } from 'vue'
import { useAppointmentsStore } from '../store/appointments'

export default {
  components: { DoctorCard, BookingModal },
  setup(){
    const store = useAppointmentsStore()

    // sample doctors
    const doctors = ref([
      {id:1, name:'Dr. Sara Hassan', specialty:'Dentist', location:'Dokki', photo:'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1200&auto=format&fit=crop'},
      {id:2, name:'Dr. Omar Mostafa', specialty:'Cardiologist', location:'Nasr City', photo:'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1200&auto=format&fit=crop'},
      {id:3, name:'Dr. Lina El‑Sayed', specialty:'Dermatologist', location:'Heliopolis', photo:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop'},
      {id:4, name:'Dr. Karim Adel', specialty:'Pediatrician', location:'Sheikh Zayed', photo:'https://media.istockphoto.com/id/143922192/photo/that-tickles.jpg?s=1024x1024&w=is&k=20&c=EtrCtq7z7zaJu6hmgcN7BoKC7EC3pAd0ZqsUXG46Sqk='},
      {id:5, name:'Dr. Mariam Nabil', specialty:'Neurologist', location:'Maadi', photo:'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop'},
      {id:6, name:'Dr. Youssef Samir', specialty:'Orthopedic', location:'Alexandria', photo:'https://plus.unsplash.com/premium_photo-1726768840957-5a9ebaa1e33a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
    ])

    const search = ref('')
    const filter = ref('')
    const page = ref(1)
    const perPage = 6

    const specialties = computed(()=> [...new Set(doctors.value.map(d=>d.specialty))])

    const filtered = computed(()=> {
      return doctors.value.filter(d=>{
        const s = search.value.toLowerCase()
        if(filter.value && d.specialty !== filter.value) return false
        return (d.name+ ' ' + d.specialty + ' ' + d.location).toLowerCase().includes(s)
      })
    })
const totalPages = computed(()=> Math.max(1, Math.ceil(filtered.value.length / perPage)))
    const paginated = computed(()=> filtered.value.slice((page.value-1)*perPage, page.value*perPage))

    const reset = ()=>{ search.value=''; filter.value=''; page.value=1 }
    const prevPage = ()=> page.value = Math.max(1, page.value-1)
    const nextPage = ()=> page.value = Math.min(totalPages.value, page.value+1)

    // booking modal
    const modalOpen = ref(false)
    const activeDoc = ref(null)
    const form = ref({ name:'', phone:'', email:'', date:'', time:'' })
    const today = new Date().toISOString().slice(0,10)
    const times = ['10:00','12:00','15:00']

    const openBooking = (doc)=>{ activeDoc.value = doc; modalOpen.value = true }
    const confirm = ()=>{
      if(!form.value.name || !form.value.phone || !form.value.email || !form.value.date || !form.value.time) return alert('Fill all')
      const apt = { id: 'apt_'+Math.random().toString(36).slice(2), doctor: activeDoc.value, datetime: new Date(form.value.date + 'T' + form.value.time + ':00').toISOString(), patient: { ...form.value } }
      store.add(apt)
      modalOpen.value = false
      form.value = { name:'', phone:'', email:'', date:'', time:'' }
      alert('Booked ✓')
    }

    return { search, filter, reset, prevPage, nextPage, page, totalPages, paginated, specialties, modalOpen, activeDoc, openBooking, form, confirm, today, times }
  }
}
</script>