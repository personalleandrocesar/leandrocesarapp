<script setup>
import { ref } from 'vue'
const layout = "duo"
const route = useRoute()

const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}

const dataConf = await useFetch(`https://api.leandrocesar.com/users/${route.params.id}`)
const Treinos = await useFetch(`https://api.leandrocesar.com/users/${route.params.id}/treinos`);

const qtTreinos = Treinos.data.value

const treino = [...qtTreinos].reverse()


const state = useCookie('state')


</script>

<template>
  <NuxtLayout :name="layout">
    <div class="main-div-one">


      <div class="conf">
        <Icon name="fluent:target-arrow-16-filled" />
        <h3>
          {{ dataConf.data.value?.target }}
        </h3>

      </div>
      <div class="conf">
        <Icon name='mdi:calendar-weekend' />
        <h3>
          {{ dataConf.data.value?.day }} dias
        </h3>

      </div>
      <div class="conf">
        <Icon name="material-symbols:timer-rounded" />
        <h3>
          {{ dataConf.data.value?.time }} min.
        </h3>

      </div>
    </div>
    
    <div class="main-div-two">
      
      <h3>
        <Icon name='solar:dumbbell-large-bold' /> TREINOS
      </h3>
    </div>
    
    <div class='main'>
      <div class="main-div-tree" v-for="(treino, index) in treino" :key="index">
        <NuxtLink class="square" :to="`/users/${route.params.id}/treino/${treino.name}`">

          <div>
            <h4>
              TREINO
            </h4>
          </div>

          <div>

            <!-- <h4>
                            <Icon name="healthicons:exercise-running" />
                        </h4> -->
            <h4>
              {{ treino.name }}
            </h4>

          </div>
          <div class="arrowUp">
          </div>
        </NuxtLink>
        <Icon name="ic:round-arrow-drop-up" />
      </div>
    </div>
    <div class="info">
      <h5>Clique em um dos treinos acima!</h5>
    </div>



  </NuxtLayout>

</template>





<style scoped>
body {
  background: #fff;
  color: #616161;

}

.black {
  border: 1px solid #fadb41;
  text-transform: lowercase;
}


.arrowUp {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.arrowUp .icon {
  color: #34d39980;
}

.info h5 {
  text-align: center;
  margin-top: 15px;
  font-weight: 700;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
}

.conf {
  color: #fff;
  height: 80px;
  background-color: #34d399;
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  backdrop-filter: blur(5px);
  width: 100%;
  margin: 0px 10px;
  border-radius: 8px;
  border: 2px solid #44acb1;
}


.main-div-one {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

.main-div-one .icon {
  zoom: 1.2;
  color: #34d399;
}

.main-div-two {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  text-align: left;
}

.main-div-two:nth-child(1) {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: left;
  margin: 10px 0 5px 0;
  justify-content: flex-start
}


.main-div-two .icon {
  color: #34d399;
}
.main-div-two {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  text-align: left;
}

.main-div-two:nth-child(1) {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: left;
  margin: 10px 0 5px 0;
  justify-content: flex-start
}

.main-div-tree div {
  height: max-content;
}

.main-div-two .icon {
  color: #34d399;
}

.main-div-two h3 {
  margin: 20px 20px 0 20px;
}


/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px transparent;
  border-radius: 3px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: transparent;
}

.main-div-two h4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-div-two a div {
  border-bottom: 2px solid #34d39920;
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-div-two h4 .icon {
  margin-left: -3px;
}

.main-div-two div .icon {
  margin-top: -1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.main {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    margin-bottom: -30px;
    /* scrollbar-width: thin;
    scrollbar-color: #0f172a transparent; */
  }

  .main-div-tree {
    margin: 10px 5px 20px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

  .main-div-tree .icon {
    color: #34d399;
  }

  .main-div-tree .icon {
  color: #34d399;
}

.main-div-tree H3 {
  margin-left: 20px;
}

.main-div-tree h4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-div-tree a div {
  border-bottom: 2px solid #34d39920;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.main-div-tree h4 .icon {
  margin-left: -3px;
}

.main-div-tree div .icon {
  margin-top: -1px;
  display: flex;  
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


.squareRes {
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 140px;
  margin: 1.5rem;
  border-radius: 8px;
  overflow-x: hidden;
  background-color: #34d39930;
  line-height: 1.2;
}



.square {
  background-color: #34d39910;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 180px;
  margin: 5px auto;
  border-radius: 8px;
  border: 2px solid #34d39910;
  overflow-x: hidden;
}

.squared {
  background-color: #34d39930;
  border: 2px solid #34d39920;
  border-top: 2px solid #34d39940;
  border-bottom: 2px solid #34d39940;
}


.square div:nth-child(2),
.square div:nth-child(3) {
  margin: auto;
  border: none;
}



.icon {
  zoom: 1.2;
  color: #fadb41;
  margin-top: -2.5px;
}

.conf {
  height: 80px;
  backdrop-filter: blur(15px);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.5%;
  margin: 1rem auto 0 auto;
  border-radius: 8px;
  background-color: #34d39910;
  border: .1px solid #34d39910;
}


.conf h3{
    font-size: .88rem;
}
</style>
