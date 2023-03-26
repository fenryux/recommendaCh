<template>
    <div class="forgot-password-form">
        <h2>Forgot you password?</h2>
        <p>Please, enter your email adress and we'll send you a link to reset your password.</p>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <button type="submit">Reset password</button>
        </form>
    </div>
</template>
  
<script>
    export default {
        name: 'ForgotPasswordForm',
        data() {
            return {
            email: '',
            }
        },
        methods: {
            submitForm() {
            // код для запроса ссылки на ресет пароля
            console.log('Form submitted with email:', this.email, 'and password:', this.password);
            this.email = '';
            }
        }
    }
</script>

<style scoped>
.forgot-password-form {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
.form-group {
  margin: 20px 0;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
input[type="email"] {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
}
button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>