<template >

  <div class="box-background">
  <div class="box-root flex-justifyContent--center box-background--white " style="flex-grow: 1; z-index: 9;">
    <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
      <h1><v-icon size="100" color="orange">mdi-lightning-bolt</v-icon></h1>
    </div>
    <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center" >
      <h1 style="color:white" ><a rel="dofollow">РекомендаCh</a></h1>
    </div>
    <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
      <h2><a rel="dofollow">Новый подход к поиску учебного заведения! Попробуйте прямо сейчас!</a></h2>
    </div>
    <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
      <v-btn  @click="go" size="" width="400" height="70" color="blue">
        НАЧАТЬ
      </v-btn>
    </div>
  </div>
  <div class=" ">
        <div class="loginbackground-gridContainer">

          <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
            <div class="box-root box-divider--light-all-2  " style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 6 / start / auto / 2;">
            <div class="box-root box-background--blue800" style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
            <div class="box-root box-background--blue " style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
            <div class="box-root box-background--gray100  " style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
            <div class="box-root box-background--cyan200  " style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
            <div class="box-root box-background--blue " style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
            <div class="box-root box-background--gray100  " style="flex-grow: 1;"></div>
          </div>
          <div class="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
            <div class="box-root box-divider--light-all-2  " style="flex-grow: 1;"></div>
          </div>
<!--        </div>-->
<!--      </div>-->

    </div>
  </div>

  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "HomeView",
  methods:{
    go:()=>{
      router.push("/home");
    }
  }

}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  color: #1a1f36;
  box-sizing: border-box;
  word-wrap: break-word;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
}

h1 {
  letter-spacing: -1px;
}
a {
  color: black;
  text-decoration: unset;
}

vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.flex-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.center-center {
  align-items: center;
  justify-content: center;
}
.loginbackground-gridContainer {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: [start] 1fr [left-gutter] (86.6px)[16] [left-gutter] 1fr [end];
  grid-template-columns: [start] 1fr [left-gutter] repeat(16,86.6px) [left-gutter] 1fr [end];
  -ms-grid-rows: [top] 1fr [top-gutter] (64px)[8] [bottom-gutter] 1fr [bottom];
  grid-template-rows: [top] 1fr [top-gutter] repeat(8,64px) [bottom-gutter] 1fr [bottom];
  justify-content: center;
  margin: 0 -2%;
  transform: rotate(-12deg) skew(-12deg);
}
.box-divider--light-all-2 {
  box-shadow: inset 0 0 0 2px #020202;
}
.box-background--blue {
  background-color: orange;
}
.box-background {
  background-image: url("src/assets/background.png");
  background-size: cover;
}
.box-background--blue800 {
  background-color: darkorange;
}
.box-background--gray100 {
  background-color: #494545;
}
.box-background--cyan200 {
  background-color: orange;
}
.padding-top--64 {
  padding-top: 64px;
}
.padding-top--24 {
  padding-top: 24px;
}
.padding-top--48 {
  padding-top: 48px;
}
.padding-bottom--24 {
  padding-bottom: 24px;
}
.padding-horizontal--48 {
  padding: 48px;
}
.padding-bottom--15 {
  padding-bottom: 15px;
}


.flex-justifyContent--center {
  -ms-flex-pack: center;
  justify-content: center;
}


span {
  display: block;
  font-size: 20px;
  line-height: 28px;
  color: #1a1f36;
}

.grid--50-50 {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
}

</style>