import { createRouter, createWebHistory } from "vue-router";

// استيراد الفيوهات
import Home from "../views/Home.vue";
import Doctor from "../views/Doctors.vue";
import MyAppointments from "../views/MyAppointments.vue";
import Contact from "../views/Contact.vue";
import DoctorLogin from "../views/doctorLogin.vue";
import DoctorDashboard from "../views/DoctorDashboard.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/doctors", component: Doctor },
  { path: "/appointments", component: MyAppointments }, // صححت المسار
  { path: "/contact", component: Contact },
  { path: "/doctor-login", component: DoctorLogin },
  { path: "/doctor-dashboard", component: DoctorDashboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;