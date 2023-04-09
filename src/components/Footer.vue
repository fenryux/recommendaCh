<template>
    <v-footer>
        <v-col class="pt-9 mb-n14 footer-link">
            <v-row justify="center" no-gutters>
                <span>Нет учетной записи? <router-link to="/sign-up">Зарегистрироваться</router-link></span>
            </v-row>
            <v-row justify="center" no-gutters>
                <span class="ml-2"><router-link to="/home">© РекомендаCh</router-link></span>
                <span class="ml-2"><router-link to="/contacts">Контакты</router-link></span>
            </v-row>
            <v-row justify="center" class="mt-0">
                <span>Лицензия <a href="https://opensource.org/license/mit/">MIT License</a></span>
            </v-row>
        </v-col>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({

        }),
    }
</script>

<style>
    .footer-link span {
        font-size: 14px;
        text-align: center;
    }
    .v-footer span {
        display: block;
        font-size: 18px;
        line-height: 28px;
        color: #1a1f36;
    }
    .v-footer a {
        color: #5469d4;
        text-decoration: unset;
    }
</style>