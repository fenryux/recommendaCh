<template>
  <v-container class="d-flex mx-auto pt-10 pb-10 align-center justify-space-evenly">
    <v-card min-width="700">
        <v-card-title class="headline">{{ currentQuestion.question }}</v-card-title>
        <v-card-text>
          <v-radio-group v-model="currentQuestion.answer">
            <v-radio
              v-for="(option, index) in currentQuestion.options"
              :key="index"
              :label="option"
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
  </v-container>
</template>
    
<script>
import axios from 'axios';

export default {
  data() {
    return {
      questions: [
        {
          question: "Ступень обучения?",
          options: ["Бакалавриат", "Специалитет", "Не важно"],
          answer: null
        },
        {
          question: "Профиль вашей подготовки?",
          options: ["Технический", "Гуманитарный", "Экономический", "Естественные науки"],
          answer: null
        },
        {
          question: "Предпочтительная загруженность при обучении?",
          options: ["Полный день (очная форма)", "Выходные/вечер (очно-заочная форма)", "Минимальная (очно-заочная форма)"],
          answer: null
        },
        {
          question: "Наличие общежития?",
          options: ["Обязательно", "Не нужно", "Не важно"],
          answer: null
        },
        {
          question: "Финансовая основа обучения?",
          options: ["Бюджетное обучение", "Целевое обучение", "Платное обучение"],
          answer: null
        },
        {
          question: "Наличие проектной деятельности?",
          options: ["Есть", "Не важно"],
          answer: null
        },
        {
          question: "Возможность обучения по обмену?",
          options: ["Есть", "Не важно"],
          answer: null
        },
        {
          question: "Наличие внутренних вступительных экзаменов (кроме ЕГЭ)?",
          options: ["Есть", "Не важно"],
          answer: null
        },
        {
          question: "Наличие программ стажировки?",
          options: ["Есть", "Не важно"],
          answer: null
        },
        {
          question: "Наличие военной кафедры?",
          options: ["Есть", "Не важно"],
          answer: null
        },
        {
          question: "Олимпиадные программы?",
          options: ["Есть", "Не важно"],
          answer: null
        },
        {
          question: "Средний проходной балл?",
          options: ["Меньше или равно 60", "60-70", "70-80", "Не важно"],
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
      if(this.currentQuestion.answer === "Платное обучение")
        this.questions.splice(this.currentIndex + 1, 0, {
          question: "Стоимость обучения?",
          options: ["Менее 200.000Р в год", "Не важно"],
          answer: null,
        });
      else if(this.currentQuestion.answer === "Технический")
        this.questions.splice(this.currentIndex + 1, 0, {
          question: "Предпочитаемое направление (технический профиль)?",
          options: ["Инженерия", "Информационные технологии", "Схемотехника", "Топливная промышленность"],
          answer: null,
        });
      else if(this.currentQuestion.answer === "Экономический")
        this.questions.splice(this.currentIndex + 1, 0, {
          question: "Предпочитаемое направление (экономический профиль)?",
          options: ["Политическая экономика", "Проектная экономика", "Локальная экономика", "Международная экономика"],
          answer: null,
        });
      else if(this.currentQuestion.answer === "Гуманитарный")
        this.questions.splice(this.currentIndex + 1, 0, {
          question: "Предпочитаемое направление (гуманитарный профиль)?",
          options: ["Педагогика", "Лингвистика", "История", "Социальные науки"],
          answer: null,
        });
      else if(this.currentQuestion.answer === "Естественные науки")
        this.questions.splice(this.currentIndex + 1, 0, {
          question: "Предпочитаемое направление (профиль естественные наук)?",
          options: ["Медицина", "Инженерия", "Материаловедение", "Химия"],
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
            console.log("Server result:", this.result_tags);
            // this.$router.push('/');
          }
        }
      );
      console.log("Answers:", this.questions);
    }
  }
};

</script>