<template>
    <v-card class="mx-auto pa-5" width="400">
        <v-card-title primary-title>
            Войдите в учетную запись
        </v-card-title>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
                clearable
                label="Логин"
                type="login"
                prepend-icon="mdi-text-account"
                variant="underlined"
                required
            ></v-text-field>
            <v-text-field
                clearable
                label="Пароль"
                type="password"
                prepend-icon="mdi-lock"
                variant="underlined"
                required
            ></v-text-field>
            <v-btn
                @click="submit"
                block
            >
                Продолжить
            </v-btn>
        </v-form>
    </v-card>
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
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style>
</style>