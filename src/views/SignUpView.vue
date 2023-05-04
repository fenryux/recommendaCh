<template>
  <div class="overflow-y-auto pt-10 mt-10">
    <v-card class="mx-auto pa-5" width="400">
      <v-card-title class="d-flex flex-column align-center justify-center">
          Регистрация
      </v-card-title>
      <v-cart-content></v-cart-content>
        <v-text-field
            clearable
            v-model="name"
            label="Имя"
            prepend-icon="mdi-account"
            variant="underlined"
            required
        ></v-text-field>
        <v-text-field
            v-model="login"
            clearable
            label="Логин"
            type="login"
            prepend-icon="mdi-text-account"
            variant="underlined"
            required
        ></v-text-field>
        <v-text-field
            v-model="email"
            clearable
            label="Электронная почта"
            type="email"
            prepend-icon="mdi-email"
            variant="underlined"
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
            clearable
            label="Пароль"
            type="password"
            prepend-icon="mdi-lock"
            variant="underlined"
            required
        ></v-text-field>
        <v-text-field
            v-model="confirmPass"
            clearable
            label="Подтвердите пароль"
            type="password"
            prepend-icon="mdi-lock"
            variant="underlined"
            required
        ></v-text-field>
        <v-btn
            @click="doRegister"
            block
        >
            Продолжить
        </v-btn>
    </v-card>
    <v-snackbar v-model="snackSamePass" color="red">
      Пароли различаются.
    </v-snackbar>
    <v-snackbar v-model="snackSuccess" color="green">
      Регистрация прошла успешно
    </v-snackbar>
  </div>
</template>
  
<script>
  import axios from "axios";
  import router from "@/router";

  export default {
    data() {
      return {
          name: '',
          login: '',
          email: '',
          password: '',
          confirmPass: '',
          snackSamePass: false,
          snackSuccess: false
      }
    },
    methods: {
      doRegister() {
        var data = {
          password: this.password, 
          login: this.login,
          name: this.name,
          email: this.email
        };
        console.log(data);
        if(this.password === this.confirmPass){
          axios.put("/register",data).then(
            (response)=>{
              if(response.status === 201){
                this.snackSuccess = true;
                setTimeout(()=>
                    {router.push('/login')}
                    ,1000)
              }
          })
        } 
        else {
          this.snackSamePass =true
        }
      }
    }
  }
</script>
  
<style>
</style>