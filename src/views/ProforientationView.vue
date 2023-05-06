<template>
  <v-container class="d-flex mx-auto pt-10 pb-10 align-center justify-space-evenly">
    <v-card min-width="700" v-if="!gotResponse">
        <v-card-title class="headline">{{ currentQuestion.question }}</v-card-title>
        <v-card-text>
          <v-radio-group v-model="currentQuestion.answer">
            <v-radio
              v-for="(option, index) in currentQuestion.options"
              :key="index"
              :label="option.title"
              :value="option"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
      <v-card-actions>
        <!-- <v-btn v-if="currentIndex > 0" class="text-none" @click="previousQuestion">Предыдущий вопрос</v-btn> -->
        <v-spacer></v-spacer>
        <v-btn 
          v-if="currentIndex < questions.length - 1" 
          class="text-none" 
          @click="nextQuestion"
          :disabled="currentQuestion.answer === null"
        >Следующий вопрос</v-btn>
        <v-btn 
          v-else 
          class="text-none" 
          color="primary" 
          @click="submitForm"
        >Отправить результаты</v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      class="mx-auto"
      min-width="700"
      max-width="700"
      v-if="gotResponse"
    >
      <v-card-title class="d-flex flex-column align-center justify-center">
          <span class="text-h6">Рекомендованные ВУЗы</span>
          <span class="text-body-1">Приведенные ниже ВУЗы рекомендуются на основе пройденного ранее опроса</span>
      </v-card-title>
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
  </v-container>
</template>
    
<script>
import axios from 'axios';

export default {
  data() {
    return {
      gotResponse: false,
      universities: [],
      questions: [
        {
          question: "Ступень обучения?",
          options: [
            {
              "title": "Бакалавриат",
              "value": 9
            },
            {
              "title": "Специалитет",
              "value": 10
            },
            {
              "title": "Не важно",
              "value": undefined
            }
          ],
          answer: null
        },
        {
          question: "Профиль вашей подготовки?",
          options: [
            {
              "title": "Технический",
              "value": 3
            },
            {
              "title": "Гуманитарный",
              "value": 4
            },
            {
              "title": "Экономический",
              "value": 7
            },
            {
              "title": "Естественные науки",
              "value": 8
            }
          ],
          answer: null
        },
        {
          question: "Предпочтительная загруженность при обучении?",
          options: [
            {
              "title": "Полный день (очная форма)",
              "value": 11
            },
            {
              "title": "Выходные/вечер (очно-заочная форма)",
              "value": 12
            },
            {
              "title": "Минимальная (заочная форма)",
              "value": 13
            }
          ],
          answer: null
        },
        {
          question: "Наличие общежития?",
          options: [
            {
              "title": "Обязательно",
              "value": 1
            },
            {
              "title": "Не нужно",
              "value": undefined
            },
            {
              "title": "Не важно",
              "value": undefined
            }
          ],
          answer: null
        },
        {
          question: "Финансовая основа обучения?",
          options: [
            {
              "title": "Бюджетное обучение",
              "value": 14
            },
            {
              "title": "Целевое обучение",
              "value": 15
            },
            {
              "title": "Платное обучение",
              "value": 16
            }
          ],
          answer: null
        },
        {
          question: "Наличие проектной деятельности?",
          options: [
            {
              "title": "Есть",
              "value": 17
            },
            {
              "title": "Не важно",
              "value": undefined
            }
          ],
          answer: null
        },
        {
          question: "Возможность обучения по обмену?",
          options: [
            {
              "title": "Есть",
              "value": 18
            },
            {
              "title": "Не важно",
              "value": undefined
            }
          ],
          answer: null
        },
        {
          question: "Наличие внутренних вступительных экзаменов (кроме ЕГЭ)?",
          options: [
            {
              "title": "Есть",
              "value": 19
            },
            {
              "title": "Не важно",
              "value": undefined
            }
          ],
          answer: null
        },
        {
          question: "Наличие программ стажировки?",
          options: [
            {
              title: "Есть",
              "value": 20
            },
            {
              "title": "Не важно",
              "value": undefined
            }
          ],
          answer: null
        },
        {
          question: "Наличие военной кафедры?",
          options: [
            {
              "title": "Есть",
              "value": 2
            },
            {
              "title": "Не важно",
              "value": undefined
            }
          ],
          answer: null
        },
        {
          question: "Олимпиадные программы?",
          options: [
            {
              "title": "Есть",
              "value": 21
            },
            {
              "title": "Не важно",
              "value": undefined
            }
          ],
          answer: null
        },
        {
          question: "Средний проходной балл?",
          options: [
            {
              "title": "Меньше или равно 60",
              "value": 22
            },
            {
              "title": "60-75",
              "value": 23
            },
            {
              "title": "75+",
              "value": 24
            },
            {
              "title": "Не важно",
              "value": undefined
            }
          ],
          answer: null
        }
      ],
      currentIndex: 0,
      result_tags: null
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex];
    },
    answersValid(){
      return !this.questions.some(question => question.answer === null)
    },
    filteredItems() {
      return this.universities.filter(item=>{
          return this.result_tags.every(criteria => item.criterias.includes(criteria));
      });
    }
  },
  methods: {
    shuffle(sourceArray) {
      for (var i = 0; i < sourceArray.length - 1; i++) {
          var j = i + Math.floor(Math.random() * (sourceArray.length - i));

          var temp = sourceArray[j];
          sourceArray[j] = sourceArray[i];
          sourceArray[i] = temp;
      }
      return sourceArray;
    },
    nextQuestion() {
      if(this.currentQuestion.answer.title === "Платное обучение")
        this.questions.splice(this.currentIndex + 1, 0, {
          question: "Стоимость обучения?",
          options: [
            {
              "title": "Менее 200.000Р в год",
              "value": undefined
            },
            {
              "title": "Не важно",
              "value": undefined
            }
          ],
          answer: null,
        });
      else if(this.currentQuestion.answer.title === "Технический")
        this.questions.splice(this.currentIndex + 1, 0, {
          question: "Предпочитаемое направление (технический профиль)?",
          options: [
            {
              "title": "Инженерия",
              "value": undefined
            },
            {
              "title": "Информационные технологии",
              "value": undefined
            },
            {
              "title": "Схемотехника",
              "value": undefined
            },
            {
              "title": "Топливная промышленность",
              "value": undefined
            }
          ],
          answer: null,
        });
      else if(this.currentQuestion.answer.title === "Экономический")
        this.questions.splice(this.currentIndex + 1, 0, {
          question: "Предпочитаемое направление (экономический профиль)?",
          options: [
            {
              "title": "Политическая экономика",
              "value": undefined
            },
            {
              "title": "Проектная экономика",
              "value": undefined
            },
            {
              "title": "Локальная экономика",
              "value": undefined
            },
            {
              "title": "Международная экономика",
              "value": undefined
            }
          ],
          answer: null,
        });
      else if(this.currentQuestion.answer.title === "Гуманитарный")
        this.questions.splice(this.currentIndex + 1, 0, {
          question: "Предпочитаемое направление (гуманитарный профиль)?",
          options: [
            {
              "title": "Педагогика",
              "value": undefined
            },
            {
              "title": "Лингвистика",
              "value": undefined
            },
            {
              "title": "История",
              "value": undefined
            },
            {
              "title": "Социальные науки",
              "value": undefined
            }
          ],
          answer: null,
        });
      else if(this.currentQuestion.answer.title === "Естественные науки")
        this.questions.splice(this.currentIndex + 1, 0, {
          question: "Предпочитаемое направление (профиль естественные наук)?",
          options: [
            {
              "title": "Медицина",
              "value": undefined
            },
            {
              "title": "Инженерия",
              "value": undefined
            },
            {
              "title": "Материаловедение",
              "value": undefined
            },
            {
              "title": "Химия",
              "value": undefined
            }
          ],
          answer: null,
        });
      this.currentIndex++;
    },
    previousQuestion() {
      this.currentIndex--;
    },
    async submitForm() {
      var data = {
        questions: this.questions
      }
      axios.post('/proforientation', data).then(
        (response) => {
          console.log(response.status);
          if(response.status === 201){
            this.result_tags = response.data;
            this.gotResponse = true;
            console.log("Server result:", this.result_tags);
            // this.$router.push('/');
          }
        }
      );
      axios.get('/proforientation').then(
        (response) => {
          if(response.status === 200)
            this.universities = response.data;
        }
      );
      console.log("Answers:", this.questions);
    }
  }
};

</script>