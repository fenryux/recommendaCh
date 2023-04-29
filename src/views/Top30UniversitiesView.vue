<template>
<div class="d-flex mx-auto pt-10 pb-10 align-center">
    <v-card
        class="mx-auto"
        max-width="700"
        min-width="700"
    >
        <v-list lines="one">
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :title="item.title"
                :subtitle="item.subtitle"
                :prepend-avatar="item.avatar"
                :append-icon="item.appendIcon"
                item-props
            >{{item.value}}</v-list-item>
        </v-list>
    </v-card>
</div>
</template>

<script>
    export default{
        data: () => ({
            items:[
                {
                    title:'МГУ им. М.В.Ломоносова',
                    subtitle:'Московский государственный университет имени М.В.Ломоносова', 
                    avatar: 'src/assets/msu_logo.png',
                    value: 1,
                },
                {
                    title:'МГТУ им. Н.Э.Баумана', 
                    subtitle:'Московский государственный технический университет имени Н.Э.Баумана', 
                    avatar: 'src/assets/bauman_logo.svg',
                    value: 2,
                    appendIcon: 'mdi-arrow-up'
                },
                {
                    title:'НИТУ МИСИС', 
                    subtitle:'Научный исследовательский технический университет МИСИС', 
                    avatar: 'src/assets/misis_logo.png',
                    value: 3,
                },
                {
                    title:'РТУ МИРЭА', 
                    subtitle:'Российский технический университет МИРЭА', 
                    avatar: 'src/assets/mirea_logo.png',
                    value: 4,
                    appendIcon: 'mdi-arrow-down'
                },
                {
                    title:'МГТУ "СТАНКИН"', 
                    subtitle:'Московский государственный технический университет "СТАНКИН"', 
                    avatar: 'src/assets/stankin_logo.png',
                    value: 5,
                    appendIcon: 'mdi-arrow-up'
                },
            ]
        })
    }
</script>

<style>

</style>