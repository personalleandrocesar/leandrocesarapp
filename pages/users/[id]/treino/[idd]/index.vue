<script setup>
import { ref } from 'vue'
const layout = "duo"
const route = useRoute()

const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}

const dataConf = await useFetch(`https://api.leandrocesar.com/users/${route.params.id}`)
const Treinos = await useFetch(`https://api.leandrocesar.com/users/${route.params.id}/treinos/${route.params.idd}`);

const qtTreinos = Treinos.data.value.serie;


const qtTreino = Treinos.data.value.name
console.log(qtTreinos);

const treinos = ref('')



const state = useCookie('state')

const useA = () => {
  return state.value = 1
}
const useB = () => {
  return state.value = 2
}
const useC = () => {
  return state.value = 3
}
const useD = () => {
  return state.value = 4
}

const navA = ref(state.value == 1)
const navB = ref(state.value == 2)
const navC = ref(state.value == 3)
const navD = ref(state.value == 4)


</script>

<template>
  <NuxtLayout>
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
    <!-- <div class="story" v-if="navA">Último treino: <b>TREINO</b>
      <Icon name='mdi:alpha-a' />
    </div>
    <div class="story" v-else-if="navB">Último treino: <b>TREINO</b>
      <Icon name='mdi:alpha-b' />
    </div>
    <div class="story" v-else-if="navC">Último treino: <b>TREINO</b>
      <Icon name='mdi:alpha-c' />
    </div>
    <div class="story" v-else-if="navD">Último treino: <b>TREINO</b>
      <Icon name='mdi:alpha-d' />
    </div>
    <div v-else></div> -->



    <div class="main-div-two">
      <h3>
        <Icon name='solar:dumbbells-bold' /> SÉRIES
      </h3>

      <span v-for="(qtTreinos, index) in qtTreinos" :key="index">
        <NuxtLink class="square" :to="`/users/${route.params.id}/treino/${route.params.idd}/${qtTreinos.name}`">
          <div>
            <h4>
              SÉRIE
            </h4>
          </div>

        <div>
        
          
            <h5>
              {{ qtTreinos.name }}
            </h5>
            <!-- <div v-for="(exercise, index) in qtTreinos.set" :key="index">
              {{ exercise.nome }}
            </div> -->
          
          
        </div>
        </NuxtLink>
      </span>

    </div>
    <br>
    <br>
    <br>
    <br>

  </NuxtLayout>
</template>





<style scoped>
body {
  background: #fff;
  color: #616161;

}

b {
  margin-left: 7px;
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
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
}

.main-div-two .icon {
  color: #34d399;
}

.square {
  background-color: #34d39910;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 3px 1.5rem;
  border-radius: 8px;
  border: .1px solid #34d39920;
  line-height: 1.4;
  transition: all .4s;
  border: 2px solid #34d39910;
}

.square div h4 .icon {
  margin-top: -1px;
}

.square:nth-child(2) {
  margin-top: 10px;
}

.square:hover {
  background-color: #34d39930;

  border-top: 2px solid #34d39940;
  border-bottom: 2px solid #34d39940;

}

.square div:nth-child(1) {
  padding-right: 12px;

}

.square div:nth-child(2),
.square div:nth-child(3) {
  margin: auto;
  border: none;
}

.story {
  background-color: #34d39910;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 65%;
  margin: 8px auto;
  padding-top: 3px;
  border-radius: 8px;
  border: .1px solid #34d39910;
  line-height: 1.4;
  transition: all .4s;
  font-weight: 700;
}

.story .icon {
  color: #34d399;
  margin-top: -2px;
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
  margin-top: -2.5px;
}

.main-div-two h3 {
  margin: 20px 20px 0 20px;

}

.main-div-two h4 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #34d399;
}

.main-div-two h5 {
  font-size: .9rem;
}

.main-div-two a div {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-div-two a div:nth-child(1) {
  border-right: 2px solid #34d39920;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-div-two a div:nth-child(2) h4{
    margin: 30px;
}
.main-div-two a div:nth-child(2){
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main-div-two a div:nth-child(2) div{
    padding: 0px;
    display: flex;
    flex-direction: row;
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

.conf:nth-child(1) {
  margin: 1rem 2px 0 5%;
}

.conf:nth-child(3) {
  margin: 1rem 5% 0 2px;
}


.conf h3 {
  font-size: .88rem;
}
</style>
