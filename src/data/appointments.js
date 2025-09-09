
import { reactive, watch } from "vue";


export const appointments = reactive(
  JSON.parse(localStorage.getItem("appointments") || "[]")
);


watch(
  appointments,
  (newVal) => {
    localStorage.setItem("appointments", JSON.stringify(newVal));
    const id = localStorage.getItem("id");
  },
 
  { deep: true }
);
