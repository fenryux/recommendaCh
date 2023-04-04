<template>
    <div class="footer-link padding-top--24">
        <span>Нет учетной записи? <router-link to="/sign-up">Зарегистрироваться</router-link></span>
        <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
            <span><router-link to="/">© РекомендаCh</router-link></span>
            <span><router-link to="/contacts">Контактные данные</router-link></span>
            <span><router-link to="/privacy">Пользовательское соглашение</router-link></span>
        </div>
    </div>
</template>

<script>
</script>

<style>
    .footer-link span {
        font-size: 14px;
        text-align: center;
    }
</style>