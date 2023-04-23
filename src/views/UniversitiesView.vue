<script>
import Searchbar from '../components/Searchbar.vue';
import UniversitiesList from '../components/UniversitiesList.vue';

export default{
    data:()=>({

    }),
    components:{
        Searchbar,
        UniversitiesList
    }
}
</script>

<template>
    <v-spacer></v-spacer>
    <Searchbar />
    <UniversitiesList />
    <v-spacer></v-spacer>
</template>

<style>

</style>