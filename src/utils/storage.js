const BOOKINGS_KEY = 'medibook_bookings_v1'

export function getBookings() {
  const raw = localStorage.getItem(BOOKINGS_KEY)
  try {
    return JSON.parse(raw) || []
  } catch (e) {
    return []
  }
}

export function saveBookings(bookings) {
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))
}

export function addBooking(booking) {
  const list = getBookings()
  list.push(booking)
  saveBookings(list)
}

export function removeBooking(id) {
  const list = getBookings().filter(b => b.id !== id)
  saveBookings(list)
}

export default {
  getBookings, saveBookings, addBooking, removeBooking
}