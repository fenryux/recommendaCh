<template>
  <div class="login-root">
    <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
      <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1>RecommendaCh</h1>
      </div>
      <div class="formbg-outer">
        <div class="formbg">
          <div class="formbg-inner padding-horizontal--48">
            <span class="padding-bottom--15">Forgot your password?</span>
            <form id="stripe-login" @submit.prevent="submitForm">
              <div class="field padding-bottom--24">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email">
              </div>
              <div class="field padding-bottom--24">
                <input type="submit" id="submit" value="Send link">
              </div>
            </form>
          </div>
        </div>
        <div class="footer-link padding-top--24">
          <span>Don't have an account? <RouterLink to="/register">Sign up</RouterLink></span>
          <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
            <!-- need to change href to RouterLink's, add link in router/index.js  -->
            <span><a href="#">© RecommendaCh</a></span>
            <span><a href="#">Contact</a></span>
            <span><a href="#">Privacy & terms</a></span>
          </div>
        </div>
      </div>
    </div>
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