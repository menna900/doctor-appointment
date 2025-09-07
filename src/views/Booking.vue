<template>
  <div
    v-if="doctor"
    :class="[
      'booking-form mt-4 p-4 rounded-lg shadow-lg transition-all',
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    ]"
  >
    <label class="block mb-2 font-semibold">Your Name</label>
    <input
      v-model="patientName"
      type="text"
      placeholder="Enter your name"
      :class="[
        'w-full mb-3 p-2 rounded border',
        darkMode
          ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
          : 'bg-gray-100 text-gray-900 border-gray-300 placeholder-gray-600'
      ]"
    />

    <label class="block mb-2 font-semibold">Choose a Slot</label>
    <select
      v-model="selectedSlot"
      :class="[
        'w-full mb-3 p-2 rounded border',
        darkMode
          ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
          : 'bg-gray-100 text-gray-900 border-gray-300 placeholder-gray-600'
      ]"
    >
      <option
        v-for="slot in doctor.availableSlots"
        :key="slot.day + slot.time"
        :value="slot"
      >
        {{ slot.day }} - {{ slot.time }}
      </option>
    </select>

    <button
      @click="bookAppointment"
      :class="[
        'w-full py-2 rounded mt-2',
        darkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'
      ]"
    >
      Confirm Booking
    </button>

    <p v-if="message" class="success-msg mt-2">{{ message }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import { appointments } from "../data/appointments";

export default {
  props: {
    doctor: Object,
    darkMode: Boolean
  },
  setup(props) {
    const patientName = ref("");
    const selectedSlot = ref(null);
    const message = ref("");

    const bookAppointment = () => {
      if (!patientName.value || !selectedSlot.value) {
        message.value = "Please enter your name and select a slot.";
        return;
      }

      appointments.push({
        id: props.doctor.id,
        patientName: patientName.value,
        day: selectedSlot.value.day,
        time: selectedSlot.value.time
      });

      message.value = `Appointment booked for ${patientName.value} on ${selectedSlot.value.day} at ${selectedSlot.value.time}`;
      patientName.value = "";
      selectedSlot.value = null;
    };

    return { patientName, selectedSlot, message, bookAppointment };
  }
};
</script>