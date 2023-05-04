<script>
import UniversitiesList from '../components/UniversitiesList.vue';

export default{
    data:()=>({

    }),
    components:{
        UniversitiesList
    }
}
</script>

<template>
    <v-spacer></v-spacer>
    <div class="overflow-y-auto mx-auto pt-10 pb-10">
        <UniversitiesList />    
    </div>
    <v-spacer></v-spacer>
</template>

<style>

</style>