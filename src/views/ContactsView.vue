<template>
    <v-card 
        class="overflow-y-auto mx-auto mt-10"
        width="fit-content"
    >
        <div class="d-flex flex-column align-center justify-center">
            <v-avatar image="src/assets/photo.jpg" size="64" class="mt-2"></v-avatar>
            <v-card-title>Коваленко Владимир Маркович</v-card-title>
            <v-card-subtitle>Разработчик ИС "РекомендаCh"</v-card-subtitle>
            <v-card-text>В разработке использовались
                <a class="text-decoration-none text-teal font-italic" href="https://vuejs.org/">Vue.JS</a>,
                <a class="text-decoration-none text-light-blue font-italic" href="https://vuetifyjs.com/en/">Vuetify</a>,
                <a class="text-decoration-none text-green font-italic" href="https://nodejs.org/">Node.JS</a>,
                <a class="text-decoration-none text-blue font-italic" href="https://postgresql.org/">PostgreSQL</a>
            </v-card-text>
            <v-card-text>Контактные данные: vlmkovalenko@gmail.com</v-card-text>
        </div>

    </v-card>
</template>

<script>
    export default {
        data: () => ({

        })
    }
</script>