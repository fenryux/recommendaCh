<template>
    <div class="overflow-y-auto pt-10 pb-10 mx-auto">
        <v-card
            class="mx-auto"
            min-width="700"
            max-width="700"
            v-for="group in specializationsGroups"
        >
            <v-card-title class="d-flex flex-column align-center justify-center">
                <span class="text-h6">{{ group.title }}</span>
                <span class="text-body-1">{{ group.subtitle }}</span>
            </v-card-title>
            <v-expansion-panels variant="accordion">
                <v-expansion-panel
                    v-for="item in group.specializations"
                    :key="item.shortName"
                >
                    <v-expansion-panel-title>
                        <v-avatar class="mr-3">
                            <v-icon>
                                {{item.icon}}
                            </v-icon>
                        </v-avatar>
                        <div class="d-flex flex-column">
                            <span class="text-body-1">{{ item.shortName }}</span>
                            <span class="text-caption">{{ item.fullName }}</span>
                        </div>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="d-flex flex-column">
                            <span class="text-body-1">Средний проходной балл: {{ item.averagePassingScore }}</span>
                            <span class="text-body-1">Описание специальности</span>
                            <span class="text-caption"> {{ item.description }} </span>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
    </div>
</template>

<script>
    import axios from 'axios';
    
    export default {
        data: ()=>({
            specializationsGroups: []
        }),
        mounted(){
            axios.get("/specializations").then((response) => {
                if(response.status === 200){
                    this.specializationsGroups = response.data;
                }
            })
        }
    }
</script>