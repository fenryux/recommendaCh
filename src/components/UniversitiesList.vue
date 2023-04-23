<template>
    <v-card
        class="mx-auto"
        min-width="700"
        max-width="700"
    >
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    <v-avatar class="mr-3">
                        <v-img
                            aspect-ratio="4/3"
                            cover="false"
                            src="src/assets/stankin_logo.png"
                        ></v-img>
                    </v-avatar>
                    <div class="d-flex flex-column">
                        <span class="text-h6">МГТУ "СТАНКИН"</span>
                        <span class="text-body-2">Московский государственный технический университет "СТАНКИН"</span>
                    </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <!-- информация для поступления -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">20</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Образовательных программ</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">1054</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Бюджетных мест</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">69.5</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средневзвешенный проходной балл за предмет</span>
                        </div>
                    </div>
                    <!-- информация о ВУЗе -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar icon="mdi-home">
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Есть общежитие</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">7.25</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Качество образования</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="yellow" size="42">
                                <span class="text-body-1">638</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средние затраты на дорогу в месяц</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <span class="text-h6">Описание ВУЗа</span>
                        <span class="text-caption">
                            МГТУ «СТАНКИН» - ведущий государственный университет в области цифрового машиностроения, один из девяти системообразующих университетов России, участник программы развития лучших вузов России – «Приоритет – 2030», основан в 1930 г.
                            МГТУ «СТАНКИН» - центр инновационного творчества и молодежного технологического предпринимательства.
                            Сотрудничает с ведущими зарубежными университетами Швейцарии, Италии, Германии, Франции, Финляндии, Польши, Китая и других стран.
                        </span>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    <v-avatar class="mr-3">
                        <v-img
                            aspect-ratio="4/3"
                            cover="false"
                            src="src/assets/bauman_logo.svg"
                        ></v-img>
                    </v-avatar>
                    <div class="d-flex flex-column">
                        <span class="text-h6">МГТУ им. Н.Э.Баумана</span>
                        <span class="text-body-2">Московский государственный технический университет "СТАНКИН"</span>
                    </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <!-- информация для поступления -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-subtitle-1">118</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Образовательных программ</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">3710</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Бюджетных мест</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">74.5</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средневзвешенный проходной балл за предмет</span>
                        </div>
                    </div>
                    <!-- информация о ВУЗе -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar icon="mdi-home">
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Есть общежитие</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="yellow" size="42">
                                <span class="text-body-1">6.61</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Качество образования</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="yellow" size="42">
                                <span class="text-body-1">832</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средние затраты на дорогу в месяц</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <span class="text-h6">Описание ВУЗа</span>
                        <span class="text-caption">
                            МГТУ им. Н.Э.Баумана (также известный как Бауманка) - национальный исследовательский университет техники и технологий, реализующий интеграцию образования и науки с целью подготовки высококвалифицированных специалистов.
                            Основан в 1830 году, является одним из престижных ВУЗов России - 3 место в рейтинге Forbes.
                        </span>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    <v-avatar class="mr-3">
                        <v-img
                            aspect-ratio="4/3"
                            cover="false"
                            src="src/assets/mirea_logo.png"
                        ></v-img>
                    </v-avatar>
                    <div class="d-flex flex-column">
                        <span class="text-h6">РТУ МИРЭА</span>
                        <span class="text-body-2">МИРЭА - Российский технологический университет</span>
                    </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <!-- информация для поступления -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">52</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Вариантов образовательных программ</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">3237</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Бюджетных мест</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">76</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средневзвешенный проходной балл за предмет</span>
                        </div>
                    </div>
                    <!-- информация о ВУЗе -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar icon="mdi-home">
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Есть общежитие</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="yellow" size="42">
                                <span class="text-body-1">6.31</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Качество образования</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="yellow" size="42">
                                <span class="text-body-1">838</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средние затраты на дорогу в месяц</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <span class="text-h6">Описание ВУЗа</span>
                        <span class="text-caption">
                            МИРЭА — Российский технологический университет - создан в результате объединения МИРЭА, МГУПИ, МИТХТ имени М.В. Ломоносова и ряда крупных образовательных, научных, конструкторских и производственных организаций. Реструктуризация в несколько раз приумножила потенциал вуза.
                            РТУ МИРЭА тесно сотрудничает с предприятиями сферы высоких технологий: корпорациями «Ростех», «Росатом», «Роскосмос» и др. Благодаря уникальной программе непрерывного образования «Колледж → вуз → базовая кафедра → базовое предприятие» студентам обеспечено гарантированное трудоустройство.
                        </span>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    <v-avatar class="mr-3">
                        <v-img
                            aspect-ratio="4/3"
                            cover="false"
                            src="src/assets/misis_logo.png"
                        ></v-img>
                    </v-avatar>
                    <div class="d-flex flex-column">
                        <span class="text-h6">НИТУ МИСИС</span>
                        <span class="text-body-2">Университет науки и технологий МИСИС</span>
                    </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <!-- информация для поступления -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">70</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Вариантов образовательных программ</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="yellow" size="42">
                                <span class="text-body-1">739</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Бюджетных мест</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">77.6</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средневзвешенный проходной балл за предмет</span>
                        </div>
                    </div>
                    <!-- информация о ВУЗе -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar icon="mdi-home">
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Есть общежитие</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">7.5</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Качество образования</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="red" size="42">
                                <span class="text-body-1">1217</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средние затраты на дорогу в месяц</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <span class="text-h6">Описание ВУЗа</span>
                        <span class="text-caption">
                            НИТУ МИСИС — это ведущий вуз страны в области создания, внедрения и применения новых технологий и материалов. 
                            Университет входит в ТОП-500 лучших вузов мира по версии глобального рейтинга QS World University Rankings, в ТОП-5 национального рейтинга «Интерфакс». 
                            Вуз занимает ведущие позиции в предметных и отраслевых международных рейтингах по 22 направлениям, входя в ТОП-30 QS «Инжиниринг – Горное дело», ТОП-75 ARWU «Инжиниринг – Металлургия». 
                            Университет МИСИС – в группе 101+ предметного глобального рейтинга QS «Материаловедение», является лидером в этой области среди российских вузов.
                        </span>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    <v-avatar class="mr-3">
                        <v-img
                            aspect-ratio="4/3"
                            cover="false"
                            src="src/assets/sechenov_logo.png"
                        ></v-img>
                    </v-avatar>
                    <div class="d-flex flex-column">
                        <span class="text-h6">МГМУ им. Сеченова</span>
                        <span class="text-body-2">Первый Московский государственный медицинский университет имени И.М.Сеченова</span>
                    </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <!-- информация для поступления -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="yellow" size="42">
                                <span class="text-body-1">19</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Вариантов образовательных программ</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">2006</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Бюджетных мест</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">78.8</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средневзвешенный проходной балл за предмет</span>
                        </div>
                    </div>
                    <!-- информация о ВУЗе -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar icon="mdi-home">
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Есть общежитие</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="yellow" size="42">
                                <span class="text-body-1">5.4</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Качество образования</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="red" size="42">
                                <span class="text-body-1">1877</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средние затраты на дорогу в месяц</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <span class="text-h6">Описание ВУЗа</span>
                        <span class="text-caption">
                            Первый Московский Государственный медицинский университет имени И.М. Сеченова (Сеченовский Университет) – старейший, крупнейший и ведущий отечественный медицинский вуз – является правопреемником медицинского факультета Императорского Московского университета (ИМУ), учреждённого 25 января 1755 г. 
                            Высочайшим указом российской императрицы Елизаветы Петровны. Занятия на медицинском факультете ИМУ начались 3 года спустя, в 1758 г., о чём свидетельствует «Реестр публичных лекций, которые в Императорском Московском университете Августа с 13 дня 1758 года продолжаться имеют».
                            Традиции медицинского образования, заложенные на медицинском факультете ИМУ, сохраняются в Первом МГМУ имени И.М. Сеченова, который в настоящее время является центром академического, научного и ресурсного превосходства в системе медицинского образования России. 
                            Сеченовский Университет, основываясь на достижениях современных информационных технологий и новых стандартах образования XXI века, готовит высококвалифицированных специалистов.
                        </span>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-title>
                    <v-avatar class="mr-3">
                        <v-img
                            aspect-ratio="4/3"
                            cover="false"
                            src="src/assets/msu_logo.png"
                        ></v-img>
                    </v-avatar>
                    <div class="d-flex flex-column">
                        <span class="text-h6">МГУ им. М.В.Ломоносова</span>
                        <span class="text-body-2">Московский государственный университет имени М.В.Ломоносова</span>
                    </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <!-- информация для поступления -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">81</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Вариантов образовательных программ</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">3936</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Бюджетных мест</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="green" size="42">
                                <span class="text-body-1">?</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средневзвешенный проходной балл за предмет</span>
                        </div>
                    </div>
                    <!-- информация о ВУЗе -->
                    <div class="d-flex flex-row align-center justify-space-between">
                        <div class="d-flex flex-row align-center">
                            <v-avatar icon="mdi-home">
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Есть общежитие</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="yellow" size="42">
                                <span class="text-body-1">6.83</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Качество образования</span>
                        </div>
                        <div class="d-flex flex-row align-center">
                            <v-avatar color="red" size="42">
                                <span class="text-body-1">1079</span>
                            </v-avatar>
                            <span class="text-subtitle-1 ml-2">Средние затраты на дорогу в месяц</span>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <span class="text-h6">Описание ВУЗа</span>
                        <span class="text-caption">
                            Московский государственный университет имени М. В. Ломоносова (МГУ) — ведущий и крупнейший вуз Москвы, центр отечественной науки и культуры, один из старейших университетов России. 
                            МГУ включает 9 научно-исследовательских институтов, 40 факультетов и более 300 кафедр. В Университете обучается более 36 тыс. студентов, около 4 тыс. аспирантов и 10 тыс. слушателей подготовительных отделений, итого, в общей сложности около 50 тыс.чел.
                        </span>
                    </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
</template>

<script>

</script>

<style>
</style>