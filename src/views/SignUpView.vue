<template>
  <v-card class="mx-auto pa-5" width="400">
    <v-card-title primary-title>
        Регистрация
    </v-card-title>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
          clearable
          label="Имя"
          prepend-icon="mdi-account"
          variant="underlined"
          required
      ></v-text-field>
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
      <v-text-field
          clearable
          label="Подтвердите пароль"
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
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          confirmPass: ''
        }
      }
    },
    methods: {
      submitForm() {
        // code for submitting the form to the server
      }
    }
  }
</script>
  
<style>
</style>