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
    export default {
        data: ()=>({
            specializationsGroups: [
                {
                    title: 'Математика и механика',
                    subtitle: 'Укрупненная группа 01.00.00',
                    specializations: [
                        {
                            icon: 'mdi-math-cos',
                            shortName:'01.03.01',
                            fullName:'Математика',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                        {
                            icon: 'mdi-state-machine',
                            shortName:'01.03.02',
                            fullName:'Прикладная математика и информатика',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                        {
                            icon: 'mdi-math-integral',
                            shortName:'01.03.03',
                            fullName:'Механика и математическое моделирование',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                        {
                            icon: 'mdi-math-norm',
                            shortName:'01.03.04',
                            fullName:'Прикладная математика',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                        {
                            icon: 'mdi-chart-bar',
                            shortName:'01.03.05',
                            fullName:'Статистика',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                    ]
                },
                {
                    title: 'Физика и астрономия',
                    subtitle: 'Укрупненная группа 03.00.00',
                    specializations: [
                        {
                            icon: 'mdi-beta',
                            shortName:'03.03.01',
                            fullName:'Прикладная математика и физика',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                        {
                            icon: 'mdi-lambda',
                            shortName:'03.03.02',
                            fullName:'Физика',
                            averagePassingScore: 70,
                            description: 'Тут могла быть ваша реклама'
                        }
                    ]
                },
                {
                    title: 'Информатика и вычислительная техника',
                    subtitle: 'Укрупненная группа 09.00.00',
                    specializations: [
                        {
                            icon: 'mdi-hexadecimal',
                            shortName:'09.03.01',
                            fullName:'Информатика и вычислительная техника',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                        {
                            icon: 'mdi-api',
                            shortName:'09.03.02',
                            fullName:'Информационные системы и технологии',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                        {
                            icon: 'mdi-bash',
                            shortName:'09.03.03',
                            fullName:'Прикладная информатика',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                        {
                            icon: 'mdi-code-tags',
                            shortName:'09.03.04',
                            fullName:'Программная инженерия',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                    ]
                },
                {
                    title: 'Информационная безопасность',
                    subtitle: 'Укрупненная группа 10.00.00',
                    specializations: [
                        {
                            icon: 'mdi-security',
                            shortName:'10.03.01',
                            fullName:'Информационная безопасность',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                        {
                            icon: 'mdi-security',
                            shortName:'10.05.01',
                            fullName:'Компьютерная безопасность',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                        {
                            icon: 'mdi-security-network',
                            shortName:'10.05.02',
                            fullName:'Информационная безопасность телекоммуникационных систем',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                        {
                            icon: 'mdi-server-security',
                            shortName:'10.05.03',
                            fullName:'Информационная безопасность автоматизированных систем',
                            averagePassingScore: 69,
                            description: 'Тут могла быть ваша реклама'
                        },
                    ]
                },
            ]
        })
    }
</script>