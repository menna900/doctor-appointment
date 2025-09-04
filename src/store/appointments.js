import { defineStore } from 'pinia'

const LS_KEY = 'clinicx:appointments'

export const useAppointmentsStore = defineStore('appointments', {
  state: () => ({
    appointments: JSON.parse(localStorage.getItem(LS_KEY) || '[]')
  }),
  actions: {
    add(apt) {
      this.appointments.push(apt)
      this.save()
    },
    remove(id) {
      this.appointments = this.appointments.filter(a => a.id !== id)
      this.save()
    },
    save() {
      localStorage.setItem(LS_KEY, JSON.stringify(this.appointments))
    }
  },
  getters: {
    upcoming: (state) => state.appointments.filter(a => new Date(a.datetime) > new Date()).sort((a,b)=>new Date(a.datetime)-new Date(b.datetime))
  }
})