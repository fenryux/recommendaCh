<template>
  <div class="overflow-y-auto pt-10 pb-10 mt-10">
    <v-card class="mx-auto pa-5" width="400">
      <v-card-title class="d-flex flex-column align-center justify-center">
          Войдите в учетную запись
      </v-card-title>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          clearable
          v-model="login"
          label="Логин"
          type="login"
          prepend-icon="mdi-text-account"
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
        <v-btn
          @click="dologin()"
          block
        >
          Войти
        </v-btn>
        <div class="pt-6 d-flex align-center justify-center">
          <RouterLink
            class="text-h6 text-decoration-none text-blue font-size-16"
            :to="'/forgot-password'"
          >
            Забыли пароль?
          </RouterLink>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default{
  data() {
    return {
      password:"",
      login:""
    }},
  methods:{
    async dologin(){
      var data = {pass:this.password, login:this.login};
      console.log(data);
      axios.post(
          '/login',data
      ).then((response)=>{
        if(response.status === 200){
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<style>
</style>