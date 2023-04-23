<template>
    <v-card
        class="mx-auto"
        min-width="700"
        max-width="700"
    >
        <v-text-field
            v-model="search"
            clearable
            hide-details
            label="Поиск ВУЗов"
            prepend-inner-icon="mdi-magnify"
            single-line
        ></v-text-field>
        <v-select
            chips
            closable-chips
            label="Выберите критерии"
            :items="tag_items"
            clearable
            multiple
        >
        </v-select>
    </v-card> 
</template>

<script>
    export default {
        data: () => ({
            tag_items: [
                {title: 'Общежитие', value: 1, icon: 'mdi-home', color: 'success'},
                {title: 'Военная кафедра', value: 2, icon: 'mdi-account-tie-hat', color: 'green'},
                {title: 'Технический', value: 3, icon: 'mdi-wrench', color: 'primary'},
                {title: 'Гуманитарный', value: 4, icon: 'mdi-pen', color: 'orange'},
                {title: 'Медицинский', value: 5, icon: 'mdi-medical-bag', color: 'red'},
                {title: 'Военный', value: 6, icon: 'mdi-knife-military', color: 'green'}
            ]
        }),
    }
</script>

<style>

</style>