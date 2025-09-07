<template>
  <div class="container">
    <!-- Search & Filter -->
    <div class="search-filter">
      <input type="text" v-model="searchQuery" placeholder="Search doctors..." />
      <select v-model="filterSpecialty">
        <option value="">All Specialties</option>
        <option v-for="spec in specialties" :key="spec" :value="spec">{{ spec }}</option>
      </select>
    </div>

    <div class="cards">
      <div v-for="doctor in paginatedDoctors" :key="doctor.id" class="card">
        <img :src="doctor.photo" alt="Doctor Photo" class="card-img" />
        <div class="card-body">
          <h2>{{ doctor.name }}</h2>
          <p><strong>Specialty:</strong> {{ doctor.specialty }}</p>
          <p><strong>Location:</strong> {{ doctor.location }}</p>
          <button class="book-btn" @click="openBooking(doctor)">Book</button>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>

    <!-- Booking Modal -->
    <div v-if="showBooking" class="modal-overlay" @click.self="closeBooking">
      <div class="modal-card">
        <h2>Book Appointment with {{ activeDoctor.name }}</h2>
        <input v-model="patientName" placeholder="Your Name" />
        <input v-model="patientPhone" placeholder="Phone" />
        <input v-model="patientEmail" placeholder="Email" />
        <select v-model="selectedSlot">
          <option disabled value="">Select Time</option>
          <option v-for="slot in activeDoctor.availableSlots" :key="slot.day + slot.time" :value="slot">
            {{ slot.day }} - {{ slot.time }}
          </option>
        </select>
        <button @click="bookAppointment">Confirm Booking</button>
        <p v-if="message" class="success-msg">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { doctors } from "../data/doctors";
import { appointments } from "../data/appointments";

export default {
  setup() {
    const currentPage = ref(1);
    const perPage = 5;
    const showBooking = ref(false);
    const activeDoctor = ref(null);
    const patientName = ref("");
    const patientPhone = ref("");
    const patientEmail = ref("");
    const selectedSlot = ref(null);
    const message = ref("");

    // Search & Filter
    const searchQuery = ref("");
    const filterSpecialty = ref("");
    const specialties = [...new Set(doctors.map(d => d.specialty))];

    const filteredDoctors = computed(() => {
      return doctors.filter(d => {
        const matchesSearch = d.name.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesFilter = filterSpecialty.value ? d.specialty === filterSpecialty.value : true;
        return matchesSearch && matchesFilter;
      });
    });

    const paginatedDoctors = computed(() => {
      const start = (currentPage.value - 1) * perPage;
      return filteredDoctors.value.slice(start, start + perPage);
    });

    const totalPages = computed(() => Math.ceil(filteredDoctors.value.length / perPage));

    const openBooking = (doctor) => {
      activeDoctor.value = doctor;
      showBooking.value = true;
      patientName.value = "";
      patientPhone.value = "";
      patientEmail.value = "";
      selectedSlot.value = null;
      message.value = "";
    };

    const closeBooking = () => { showBooking.value = false; };

    const bookAppointment = () => {
      if (!patientName.value || !selectedSlot.value) {
        message.value = "Please enter your name and select a slot.";
        return;
      }
      appointments.push({
      id: activeDoctor.value.id, // لازم يكون نفس الـ id اللي في doctors
      patientName: patientName.value,
      day: selectedSlot.value.day,
      time: selectedSlot.value.time
     });
      message.value = `Appointment booked for ${patientName.value} on ${selectedSlot.value.day} at ${selectedSlot.value.time}`;
      setTimeout(() => showBooking.value = false, 1500);
    };


const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++; };
    const prevPage = () => { if (currentPage.value > 1) currentPage.value--; };

    return {
      paginatedDoctors, currentPage, totalPages, nextPage, prevPage,
      showBooking, activeDoctor, openBooking, closeBooking,
      patientName, patientPhone, patientEmail, selectedSlot, message,
      bookAppointment, searchQuery, filterSpecialty, specialties
    };
  }
};
</script>
<style scoped>
.container { max-width: 1000px; margin: 0 auto; padding: 20px; }
.cards { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
.card { background:rgb(22 163 74); border-radius: 12px; width: 250px; padding: 10px; box-shadow: 0 10px 10px; color: rgba(43, 42, 42, 0.799); }
.card-img { width: 100%; height: 200px; object-fit: cover; }
.book-btn { width: 100%; margin-top: 10px; padding: 8px; border:none;border-radius: 6px; background:rgb(22 163 74); color: rgb(6, 71, 30); cursor: pointer;}
.book-btn:hover { background: rgb(16, 123, 55);  }
.modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background:#ccccccaf; display: flex; justify-content: center; align-items: center; z-index: 1000; color:#131313; }
.modal-card { background:rgb(22 163 74); padding: 20px; border-radius: 12px; width: 350px; position: relative; }
.modal-card input, .modal-card select, .modal-card button { width: 100%; margin-top: 10px; padding: 8px; border-radius: 6px; border: 1px solid #f8f8f8; }
.modal-card button { background: rgb(22 163 74); color: #121212; border: none; cursor: pointer; }
.modal-card button:hover { background: rgb(18, 151, 67); }
.success-msg { color: rgb(246, 247, 246); margin-top: 10px; text-align: center; }
.pagination { text-align: center; margin-top: 20px; }
.pagination button { margin: 5px; padding: 8px 12px; border-radius: 6px; border: none; cursor: pointer; background: rgb(22 163 74); color: #fff; }
.pagination button:disabled { background: #ccc; cursor: not-allowed; }

/* Search & Filter */
.search-filter {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}
.search-filter input, .search-filter select {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fff;
  color: #131313;
}
.search-filter input::placeholder { color: #bbb; }
</style>