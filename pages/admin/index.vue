<script setup>
import { ref } from 'vue';
const layout = "duo"

useHead({
    titleTemplate: 'Leandro Cesar - App',
});


const user = ref('leandrocesar');
const senha = ref('');

const route = useRoute();
const Users = await useFetch('https://api.nexwod.app/users');
const item = Users.data.value;

const service = ref('')
const exists = Users.data.value.find(u => service);


const add = ref(true)
function addClient() {
    add.value = !add.value
}

const swit = ref(true)
function switchButton() {
    swit.value = !swit.value
}

// talvez não precise do código abaixo
const logOff = () => {
    logon.value = null
}

const tag = useCookie('tag')
tag.value = tag.value


const bodyOne = ref(true)
function menu() {
    bodyOne.value = !bodyOne.value

}
const colorMode = useColorMode()

function theme() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}

const colorCookie = useCookie('colorCookie')
if (colorMode.value === "dark") {
    colorCookie.value = "darkCookie"
} else {
    colorCookie.value = "lightCookie"
}
colorCookie.value === "darkCookie" ? colorMode.value = "dark" : colorMode.value = "light"

const state = useCookie('state')
state.value = state.value


</script>

<template>
    
        <div id="grid">
            <div id="areaA">
                <div class="nav-top">
                    <div class="clients">
                        <Icon name='material-symbols:data-usage' /> Início
                    </div>
                    <div>
                        <div class="notifications" @click="addClient">
                            <Icon name='mingcute:notification-newdot-fill' />
                        </div>
                    </div>
                </div>
                <!-- <div class="nav-users">
                    <div class="users-conf">
                        Clientes <span> {{ Users.data.value.length  }} </span>
                    </div>
                    <div>
                        <div v-if="swit" class="filter" @click="switchButton">
                        <Icon name='material-symbols:view-list-outline' /> Lista
                    </div>
                    <div v-else class="filter" @click="switchButton">
                        <Icon name='solar:widget-linear' /> Blocos
                    </div>
                    </div>
                </div> -->

                <div class='Doughnut'>
                    <MyChart />
                </div>
            </div>
        </div>
</template>
<style scoped>
.Doughnut {
    width: 320px;
    height: 320px;
}

@media (max-width: 650px) {
    .Doughnut {
        width: 230px;
        height: 230px;
    }
}

.nav-top {
    position: sticky;
    top: 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    z-index: 1;
    height: 40px;
    font-weight: bolder;
    border-bottom: .10px solid #34d39940;
    backdrop-filter: blur(45px);
    border-bottom: solid 1px #34d39940;
    border-right: solid 1px #34d39940;
}

.clients {
    margin: 11px;
}

.clients span {
    border: 1px solid #34d39990;
    padding: 3px 6px;
    border-radius: 8px;
    color: #34d399;
    background-color: #34d39930;
    margin-left: 3px;
}

.notifications {
    border: solid 1px transparent;
    padding: 4px 5px;
    margin: 6px;
    border-radius: 8px;
    transition: all .3s linear;
    cursor: pointer;
}

.notifications:hover {
    padding: 4px 5px;
    border-radius: 8px;
    color: #34d399;
    background-color: #fff;
}

.nav-users {
    position: sticky;
    top: 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    z-index: 1;
    height: 35px;
    font-weight: bolder;
    margin-bottom: 1rem;
    border-bottom: .10px solid #34d39940;
    backdrop-filter: blur(45px);
    border-bottom: solid 1px #34d39940;
        border-right: solid 1px #34d39940;
}

.users-conf {
    margin: 16px;
}

.users-conf span {
    border: 1px solid #34d39990;
    padding: 8px;
    border-radius: 8px;
    color: #34d399;
    background-color: #34d39930;
    margin-left: 3px;
}

.filter {
    border: solid 1px #34d39990;
    background-color: #34d39930;
    padding: 6px 7px;
    margin: 9px 35px;
    border-radius: 8px;
    transition: all .3s linear;
    cursor: pointer;
}

.filter:hover {
    border: solid 1px #fff;
    padding: 6px 7px;
    border-radius: 8px;
    color: #34d399;
    background-color: #fff;
}

.users-list {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    z-index: 1;
    margin-bottom: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
}

.color {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    height: 35px;
    width: 35px;
    transition: all 0.2s ease-in-out 0s;
    bottom: 6rem;
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #34d39910;
    box-shadow: 0 0px 5px #34d39940;
    backdrop-filter: blur(100px)
}

.whats {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    height: 35px;
    width: 35px;
    transition: all 0.2s ease-in-out 0s;
    bottom: 3.5rem;
    right: 1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #34d39910;
    box-shadow: 0 0px 5px #34d39940;
    backdrop-filter: blur(100px)
}

.whats .icon,
.color .icon {
    color: #34d39990;
    zoom: 1;
}
</style>
