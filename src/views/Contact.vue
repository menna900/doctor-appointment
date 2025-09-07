<template>
  <div class="container">
    <h1 class="page-title">Contact Us</h1>

    <form @submit.prevent="submitForm" class="contact-form">
      <input type="text" v-model="name" placeholder="Your Name" />
      <input type="email" v-model="email" placeholder="Your Email" />
      <textarea v-model="messageText" placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>

    <p v-if="successMsg" class="success-msg">{{ successMsg }}</p>
    <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const messageText = ref("");
    const successMsg = ref("");
    const errorMsg = ref("");

    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    const submitForm = () => {
      errorMsg.value = "";
      successMsg.value = "";

      if (!name.value || !email.value || !messageText.value) {
        errorMsg.value = "Please fill in all fields.";
        return;
      }

      if (!validateEmail(email.value)) {
        errorMsg.value = "Please enter a valid email.";
        return;
      }

      
      successMsg.value = "Message sent successfully!";
      
    
      name.value = "";
      email.value = "";
      messageText.value = "";
    };

    return { name, email, messageText, successMsg, errorMsg, submitForm };
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  color:#22c55e ;
}
.page-title {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;

}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  
}
.contact-form input,
.contact-form textarea {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid rgb(223, 221, 221);
  background: rgb(223, 221, 221); 
  color: black;
}
.contact-form textarea {
  resize: vertical;
  min-height: 100px;
  
}
.contact-form button {
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: #22c55e;
  color: #fff;
  cursor: pointer;
}
.contact-form button:hover {
  background: #0a8637;
}
.success-msg {
  color: #059b37;
  margin-top: 10px;
  text-align: center;
}
.error-msg {
  color: #ff4d4f;
  margin-top: 10px;
  text-align: center;
}



</style>

