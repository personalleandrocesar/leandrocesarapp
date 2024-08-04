<script setup>
import { ref } from 'vue'
const layout = "duo"
const route = useRoute()

const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}

const dataConf = await useFetch(`https://api.leandrocesar.com/users/${route.params.id}`)
const Treinos = await useFetch(`https://api.leandrocesar.com/users/${route.params.id}/treinos`)

const qtTreinos = Treinos.data.value

const treino = [...qtTreinos].reverse()


const state = useCookie('state')


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
    
    <div class="main-div-two">
      
      <h3>
        <Icon name='solar:dumbbell-large-bold' /> TREINOS
      </h3>
    </div>
    
    <div v-if="qtTreinos">
    
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
        
    </div>
    
    <div v-else>
        <div class="main-div-four">
                
                <a href="https://api.whatsapp.com/send?phone=5521936184024%20&text=Oie,%20estou%20sem%20Treino!!" target="_blank" class="main-square">
                
                
                
                <div>
                    <h4>
                    <Icon name='solar:sad-square-outline' />
                    </h4>
                    <h4>
                    Sem treino!
                    </h4>
                    <h4>
                    Clique aqui e avise seu Personal!!
                    </h4>
                </div>
                </a>
            </div>
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
  margin: 10px 5% 5px 5%;
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


.main-div-four {
  margin-top: .5rem;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}

.main-div-four H3 {
  margin: 1rem;
  margin-left: 20px;
  color: var(--color-text);
}

.main-div-four .icon {
  color: #34d399;
  margin-top: -4px;
}

.main-div-four h4 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.main-div-four a div {
  margin: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-div-four h3 .icon {
  margin-left: 1px;
  zoom: 1.3;
}

.main-div-four div .icon {
  zoom: 1.3;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.main-square {
  color: var(--color-text);
  background-color: #34d39910;
  backdrop-filter: blur(5px);
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0rem 1.5rem;
  border-radius: 10px;
  border: .1px solid #34d39910;
  line-height: 1.4;
  transition: all .4s;
  border: 2px solid #34d39910;
}

.main-square:hover {
  background-color: #34d39930;
  border-right: 1px solid #34d39930;
    border: 2px solid #34d39920;
    border-top: 2px solid #34d39940;
    border-bottom: 2px solid #34d39940;
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
.conf:nth-child(1){
  margin: 1rem 2px 0 5%;
}

.conf:nth-child(3){
  margin: 1rem 5% 0 2px;
}


.conf h3{
    font-size: .88rem;
}
</style>
