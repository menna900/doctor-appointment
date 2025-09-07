
import { reactive, watch } from "vue";

// نجيب البيانات من LocalStorage أو نعمل مصفوفة فاضية
export const appointments = reactive(
  JSON.parse(localStorage.getItem("appointments") || "[]")
);

// نراقب أي تغيير يحصل في الـ appointments ونخزنه في LocalStorage
watch(
  appointments,
  (newVal) => {
    localStorage.setItem("appointments", JSON.stringify(newVal));
    const id = localStorage.getItem("id");
  },
 
  { deep: true }
);