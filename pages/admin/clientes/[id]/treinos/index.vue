<script setup>
import { ref } from 'vue';
import { reloadNuxtApp } from "nuxt/app";
useHead({
    titleTemplate: 'Clientes | NEX_WOD',
});

const route = useRoute();
const Users = await useFetch(`https://api.nexwod.app/users/${route.params.id}`);
const Treinos = await useFetch(`https://api.nexwod.app/users/${route.params.id}/treinos`);
const item = Users.data.value;
const qtTreinos = Treinos.data.value;

console.log(qtTreinos.name);

const subscriberOk = ref(false)

const add = ref(true)
function addClient() {
    add.value = !add.value
}

const items = ref(
    { name: '' }

);

async function submitTreino() {
    try {
        const response = await fetch(`https://api.nexwod.app/user/${route.params.id}/treinos`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                treino: items.value
            }),
        });
        if (response.ok) {
            console.log('Data delete successfully');
            subscriberOk.value = true;
            setTimeout(() => {
                subscriberOk.value = false;
                reloadNuxtApp({
                    path: `/admin/clientes/${item.username}/treinos`,
                    ttl: 1000, // default 10000
                });
            }, 1000);
        } else {
            console.error('Failed to delete data');
        }
    } catch (error) {
        console.error('Error delete data:', error);
    }
}

const reg = route.params.id
const logon = useCookie('logon')
// const logon = useCookie('logon', { maxAge: 4800})
logon.value = reg

const dataConf = await useFetch(`https://api.nexwod.app/users/${route.params.id}`)
const status = dataConf.data.value?.status
const photoOpen = ref(false);
function openPhoto() {
    photoOpen.value = !photoOpen.value;
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

const newForm = ref(true)
const addCloseTrainning = ref(true)
const newTrainning = () => {
    newForm.value = !newForm.value
    addCloseTrainning.value = !addCloseTrainning.value
}


</script>
<template>
    <div v-if="subscriberOk" class="subscriberOk top">
        <div>
            Usuário deletado com Sucesso!
        </div>
    </div>
    <div id="grid">
        <div id="areaA">
            <div class="nav-top">
                <div class="clients">
                    <Icon name='material-symbols:person' /> Cliente - {{ Users.data.value.name }} {{
                    Users.data.value.lastName }}
                </div>
                <div>
                    <div class="notifications">
                        <Icon name='mingcute:notification-newdot-fill' />
                    </div>
                </div>
            </div>
            <div class="nav-users">
                <div class='actions'>
                    <NuxtLink :to="`/admin/clientes/${item.username}`">
                        <div class="actions-button">
                            <Icon name='material-symbols:shield-person' /> Resumo
                        </div>
                    </NuxtLink>
                    <NuxtLink :to="`/admin/clientes/${item.username}/treinos`">
                        <div class="actions-button">
                            <Icon name='solar:dumbbell-large-bold' /> Treinos
                        </div>
                    </NuxtLink>
                    <NuxtLink :to="`/admin/clientes/${item.username}/avaliacao`">
                        <div class="actions-button">
                            <Icon name='solar:clipboard-heart-bold' /> Avaliações
                        </div>
                    </NuxtLink>
                </div>
                <div class='actions-user'>
                    <div>
                        <div v-if="addCloseTrainning" class="new-user" @click="newTrainning">
                            <Icon name='material-symbols:add-notes' /> Novo Treino
                        </div>
                        <!-- parei aqui -->
                        <div v-else class="new-user" @click="newTrainning">
                            <Icon name='material-symbols:cancel-rounded' /> Fechar
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="newForm">

                <h1 v-for="(qtTreinos, index) in qtTreinos" :key="index">
                    <span @click="navigateTo(`/admin/clientes/${item.username}/treino/${qtTreinos.name}`)">
                        {{ qtTreinos.name }}

                    </span>
                </h1>
            </div>
            <div v-else class="new-form">
                <div class="new-form-squared">
                    <form @submit.prevent="submitTreino">
                        <p>Nome do treino</p>
                        <!-- <input type="text" name="" id="" v-model="items.name"> -->
                        <label for="options">dia: </label>
                        <select id="options" name="options" v-model="items.name">
                            <option v-for="day in 31" :key="day">{{ day }}</option>
                        </select>
                        <label for="options">mês: </label>
                        <select id="options" name="options" v-model="items.name">
                            <option value="option1">Janeiro</option>
                            <option value="option1">Fevereiro</option>
                            <option value="option1">Março</option>
                            <option value="option1">Abril</option>
                            <option value="option1">Maio</option>
                            <option value="option1">Junho</option>
                            <option value="option1">Julho</option>
                            <option value="option1">Agosto</option>
                            <option value="option1">Setembro</option>
                            <option value="option1">Outubro</option>
                            <option value="option1">Novembro</option>
                            <option value="option1">Dezembro</option>
                        </select>
                        <label for=" options">Ano: </label>
                        <select id="options" name="options" v-model="items.name">
                            <option value="option4" v-for="year in 2300 - 1900 + 1" :key="year">{{ year + 1900 - 1 }}
                            </option>
                        </select>
                                <!-- <input type="month" name="" id="" v-model="items.name"> -->
                                <button class="login" type="submit">Adicionar</button>
                    </form>

                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
.new-form{
    display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        transform: translateX(0%);
        position: fixed;
        top: 87px;
        height: calc(100% - 98px);
        width: calc(100% - 245px);
    border-radius: 5px ; 
        background: linear-gradient(to bottom right, #34d39910 0%, #34d39940 50%, #00f2ff10 100%);
        backdrop-filter: blur(5px);
        z-index: 1004;
}
.new-form-squared{
    display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        transform: translateX(0%);
        position: fixed;
        top: calc(3 *50px);
        height: calc(100% - (3 * 98px));
        width: calc(100% - (490px + 245px));
        border: .10px solid #34d399;
    border-radius: 5px ; 
        background: linear-gradient(to bottom right, #34d39910 0%, #34d39980 50%, #00f2ff20 100%);
        backdrop-filter: blur(5px);
        z-index: 1004;
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

.subscriberOk {
    position: fixed;
    top: 10px;
    right: 2%;
    width: 20%;
    margin-left: 40%;
    background-color: #ff1900;
    color: #fff;
    text-shadow: 2px 2px 2px #111;
    z-index: 20;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    border-radius: 3px;
    font-weight: bolder;
    padding: 8px 0px;
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

.actions {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    align-content: baseline;
    margin: 0;
}

.actions a {
    border: solid 1px #34d39910;
    background-color: transparent;
    padding: 4px 35px;
    margin: 2.5px 10px;
    border-radius: 8px;
    transition: all .3s linear;
    cursor: pointer;
}


.actions a:hover {
    border: solid 1px #34d39960;
    background-color: #34d39960;
}

.actions a.router-link-exact-active {
    background: #34d39990;
    border: solid 1px #34d399;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.actions-button a.router-link-exact-active:hover {
    background: #34d39990;
    ;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.actions-button a.router-link-exact-active:hover::after {
    background-color: var(--color-background);
    color: #34d399;
    text-decoration: none;
    cursor: pointer;
}

.actions-user {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    align-content: baseline;
    margin: 0;
}

.update-button {
    border: solid 1px #fadb4080;
    background-color: #fadb4080;
    padding: 4px 15px;
    margin: 2.5px 0px;
    border-radius: 8px;
    transition: all .3s linear;
    cursor: pointer;
}

.update-button:hover {
    border: solid 1px #fadb40;
    border-radius: 8px;
    color: #000;
    background-color: #fadb40;
}

.new-user {
    border: solid 1px #04be7a90;
        background-color: #04be7a;
    padding: 4px 15px;
    margin: 2.5px 10px;
    border-radius: 8px;
    transition: all .3s linear;
    cursor: pointer;
}

.new-user:hover {
border: solid 1px #04be7a90;
    border-radius: 8px;
    color: #04be7a;
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
