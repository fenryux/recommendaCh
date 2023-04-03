<template>
    <div class="footer-link padding-top--24">
        <span>Don't have an account? <router-link to="/sign-up">Sign up</router-link></span>
        <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
            <span><router-link to="/">© RecommendaCh</router-link></span>
            <span><router-link to="/contacts">Contacts</router-link></span>
            <span><router-link to="/privacy">Privacy & terms</router-link></span>
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