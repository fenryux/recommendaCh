<template>
    <v-card
        class="mx-auto"
        min-width="700"
        max-width="700"
    >
        <v-text-field
            v-model="search"
            hide-details
            label="Поиск ВУЗов"
            prepend-inner-icon="mdi-magnify"
            single-line
            clearable
            @click:clear="onSearchClear"
        ></v-text-field>
        <v-select
            v-model="select"
            chips closable-chips multiple
            label="Выберите критерии"
            :items="tag_items"
            clearable
            @click:clear="onSelectClear"
        >
        </v-select>
    </v-card> 
    <v-card
        class="mx-auto"
        min-width="700"
        max-width="700"
    >
        <v-expansion-panels variant="accordion">
            <v-expansion-panel
                v-for="item in filteredItems"
                :key="item.shortName"
            >
                <v-expansion-panel-title>
                    <v-avatar class="mr-3">
                        <v-img
                            v-if="item.logo"
                            aspect-ratio="4/3"
                            cover="false"
                            :src="item.logo"
                        ></v-img>
                    </v-avatar>
                    <div class="d-flex flex-column">
                        <span class="text-h6">{{ item.shortName }}</span>
                        <span class="text-body-2">{{ item.fullName }}</span>
                    </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <!-- информация для поступления -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">{{ item.educationalPrograms }}</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Образовательных программ</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar :color="item.places >= 1000 ? 'green' : 'yellow'" size="42">
                                <span class="text-body-1">{{ item.places }}</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Бюджетных мест</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar :color="item.passingScore >= 7 ? 'green' : 'yellow'" size="42">
                                <span class="text-body-1">{{ item.passingScore }}</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средневзвешенный проходной балл за предмет</span>
                        </div>
                    </div>
                    <!-- информация о ВУЗе -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center" v-if="item.hasDorm">
                            <v-avatar icon="mdi-home">
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Есть общежитие</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar :color="item.educationQualityScore >= 7 ? 'green' : 'yellow'" size="42">
                                <span class="text-body-1">{{ item.educationQualityScore }}</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Качество образования</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar :color="item.travelCost >= 1000 ? 'red' : 'green'" size="42">
                                <span class="text-body-1">{{ item.travelCost }}</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средние затраты на дорогу в месяц</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <span class="text-h6">Описание ВУЗа</span>
                        <span class="text-caption"> {{ item.description }} </span>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
</template>

<script>
    // import universities_data from '../assets/universities.json';
    // import recommendation_tags from '../assets/recommendation_tags.json';
    import axios from 'axios';

    export default {
        data: ()=>({
            universities: []/*universities_data*/,
            tag_items: []/*recommendation_tags*/,
            search: '',
            select: []
        }),
        mounted(){
            axios.get("/proforientation").then((response) => {
                if(response.status === 200){
                    this.universities = response.data.universities;
                    console.log("Universities", this.universities);
                    this.tag_items = response.data.tags;
                    console.log("Tags", this.tag_items);
                }
            })
        },
        computed: {
            filteredItems() {
                return this.universities.filter(item=>{
                    return (item.fullName.toLowerCase().includes(this.search.toLowerCase()) ||
                           item.shortName.toLowerCase().includes(this.search.toLowerCase())) &&
                           this.select.every(criteria => item.criterias.includes(criteria));
                });
            }
        },
        methods:{
            onSearchClear(){
                this.search = '';
            },
            onSelectClear(){
                this.select = [];
            }
        }
    }
</script>

<style>
</style>