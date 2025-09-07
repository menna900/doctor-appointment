<template>
  <div class="login-container">
    <h1>Doctor Login</h1>
    <input v-model="enteredId" type="text" placeholder="Enter your Doctor ID" />
    <button @click="login">Login</button>
    <p v-if="message" :class="{'success-msg': success, 'error-msg': !success}">
      {{ message }}
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const enteredId = ref("");
    const message = ref("");
    const success = ref(false);

    const login = () => {
      if (enteredId.value.trim() !== "") {
        localStorage.setItem("doctorId", enteredId.value);
        message.value = `✅ Welcome Doctor ID: ${enteredId.value}`;
        success.value = true;
        setTimeout(() => router.push("/doctor-dashboard"), 1000);
      } else {
        message.value = "❌ Please enter a valid Doctor ID!";
        success.value = false;
      }
    };

    return { enteredId, login, message, success };
  },
};
</script>

<style scoped> 
.login-container {  
  max-width: 400px;  
  margin: 100px auto;  
  padding: 20px;  
  background: #16a34a;  
  border-radius: 12px;  
  text-align: center;  
  box-shadow: 0 4px 8px #ccc;  
  color:#1f1e1e
}  
  
input {  
  width: 100%;  
  padding: 10px;  
  margin-bottom: 12px;  
  border-radius: 6px;  
  border: 1px solid #1f1e1e;  
}  
  
button {  
  padding: 10px 16px;  
  border: none;  
  border-radius: 6px;  
  background: #22c55e;  
  color: #1f1e1e;  
  font-weight: bold;  
  cursor: pointer;  
}  



button:hover {
  background: #16a34a;
}

.success-msg { color: #f7f9f8; margin-top: 10px; }
.error-msg { color: #b91c1c; margin-top: 10px; }
</style>

