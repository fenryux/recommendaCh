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
    export default {
        data: () => ({
            valid: true,
            login: "",
            password: "",
            checkbox: false
        }),
        methods: {
            submit() {
            },
        }
    };
</script>

<style>
</style>