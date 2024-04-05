<script setup>
import { ref } from 'vue';
import { reloadNuxtApp } from "nuxt/app";
useHead({
    titleTemplate: 'Clientes | NEX_WOD',
});
const Users = await useFetch('http://191.101.70.209:8083/users');
const item = Users.data.value;
const UsersId = await useFetch(`http://191.101.70.209:8083/users/:id`);

console.log(UsersId.data.value);

console.log(item);

const subscriberOk = ref(false)

const name= ref('')
const lastName= ref('')
const username= ref('')
const email= ref('')
const password = ref('')
const periodStart= ref('')
const periodEnd = ref('')
const service= ref('')
const status= ref('')
const target= ref('')
const day= ref('')
const time = ref('')

const add = ref(true)
function addClient() {
    add.value = !add.value
}

const swit = ref(true)
const block = ref(false)
function switchButton() {
    swit.value = !swit.value
    block.value = !block.value
}
async function submitForm() {
    try {
        const response = await fetch('http://191.101.70.209:8083/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name: name.value, 
                lastName: lastName.value,
                username: username.value,
                email: email.value,   
                password: password.value,   
                periodStart: periodStart.value, 
                periodEnd: periodEnd.value,   
                service: service.value,
                status: status.value,  
                target: target.value,  
                day: day.value, 
                time: time.value    
            }),
        });
        
        if (response.ok) {
            console.log('Data sent successfully');
            subscriberOk.value = true;
            setTimeout(() => {
                subscriberOk.value = false;
                reloadNuxtApp({
                    path: "/admin/clientes",
                    ttl: 1000, // default 10000
                });
            }, 2000);
        } else {
            console.error('Failed to send data');
        }
    } catch (error) {
        console.error('Error sending data:', error);
    }
}

function formatarData(input) {
    // Obtém a data do input
    let data = new Date(input.value);

    // Formata a data como DD-MM-YYYY
    let dia = data.getDate().toString().padStart(2, '0');
    let mes = (data.getMonth() + 1).toString().padStart(2, '0');
    let ano = data.getFullYear();

    // Define a data formatada de volta no input
    input.value = `${dia}-${mes}-${ano}`;
}

</script>
<template>
    <div v-if="add" class="main">

        <div class="nav-top">
            <div class="clients">
                <Icon name='solar:users-group-two-rounded-bold' /> Clientes <span> {{ Users.data.value.length }} </span>
            </div>
            <div>
                <div class="add-client" @click="addClient">Adicionar Cliente
                    <Icon name='material-symbols:add' />
                </div>
            </div>
        </div>
        <div class="nav-users">
            <div class="users-conf">
                <!-- Clientes <span> {{ Users.data.value.length  }} </span> -->
            </div>
            <div>
                <div v-if="swit" class="filter" @click="switchButton">
                    <Icon name='material-symbols:view-list-outline' /> Lista
                </div>
                <div v-else class="filter" @click="switchButton">
                    <Icon name='solar:widget-linear' /> Blocos
                </div>
            </div>
        </div>

        <div>
            <div v-if="block" class="users-list">
                <div v-for="(item, index) in item" :key="index">

                    <NuxtLink :to="`/admin/clientes/${item.username}`">

                        <div class="title-user">

                            <img :src="item.foto">
                            <h4>
                                {{ item.name }} {{ item.lastName }}
                            </h4>
                        </div>

                    </NuxtLink>
                </div>
                <!-- <td>
                <button @click="salvarEdicao(email._id)">Salvar</button>
            </td> -->
            </div>
            <div v-else class="users-list">

                <table id="customers">
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Usuário</th>
                        <th>Email</th>
                        <th>Início</th>
                        <th>Fim</th>
                        <th>Serviço</th>
                        <th>Objetivo</th>
                        <th>Status</th>
                        <th>Dias</th>
                        <th>Tempo</th>
                    </tr>
                    <tr v-for="(item, index) in item" :key="index">
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ index + 1 }}
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ item.name }}
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ item.lastName }}
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ item.username }}
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ item.email }}
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ item.periodStart }}
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ item.periodEnd }}
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ item.service }}
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ item.status }}
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ item.target }}
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ item.day }}
                            </NuxtLink>
                        </td>
                        <td>
                            <NuxtLink :to="`/admin/clientes/${item.username}`">
                                {{ item.time }}
                            </NuxtLink>
                        </td>
                    </tr>
                </table>

            </div>
        </div>
    </div>

    <div v-else class="main">
        <div class="barTop center">
            <div>
                <NuxtLink class="close">
                    <Icon name="material-symbols:cancel-rounded" @click="addClient" />
                </NuxtLink>
            </div>

        </div>
        <div class="center-start">
            <div>

                <img v-if="photoClient" class="cliente" :src="file.value">
                <Icon v-else class="cliente" name="material-symbols:account-circle-full" />
                <input class="file-cliente" type="file" display="none" />
            </div>

        </div>

        <div class="table-clients">


            <form @submit.prevent="submitForm">
                <div class="table">
                    <div class="row header">
                        <div class="cell-two">Nome</div>
                        <div class="cell-two">Sobrenome</div>
                        <div class="cell-two">Usuário</div>
                        <div class="cell-two">Email</div>
                        <div class="cell-two">Senha</div>
                        <div class="cell-two">Serviço</div>
                    </div>
                    <div class="row">
                        <div class="cell-two"><input type="text" v-model="name" name="name" /> </div>
                        <div class="cell-two"><input type="text" v-model="lastName" name="lastName" /> </div>
                        <div class="cell-two"><input type="text" v-model="username" name="username" /> </div>
                        <div class="cell-two"><input type="email" v-model="email" name="email" /></div>
                        <div class="cell-two"><input type="text" v-model="password" name="password" /> </div>
                        <div class="cell-two"><input type="text" v-model="service" name="service" /> </div>
                    </div>
                </div>
                <div class="table">
                    <div class="row header">
                        <div class="cell-two">Início</div>
                        <div class="cell-two">Fim</div>
                        <div class="cell-two">Objetivo</div>
                        <div class="cell-two">Status</div>
                        <div class="cell-two">Dias</div>
                        <div class="cell-two">Tempo</div>
                    </div>
                    <div class="row">
                        <div class="cell-two"><input type="date" v-model="periodStart" name="periodStart" /> </div>
                        <div class="cell-two"><input type="date" v-model="periodEnd" name="periodEnd" /> </div>
                        <div class="cell-two"><input type="text" v-model="target" name="target" /> </div>
                        <div class="cell-two"><input type="text" v-model="status" name="status" /> </div>
                        <div class="cell-two"><input type="text" v-model="day" name="day" /> </div>
                        <div class="cell-two"> <input type="text" v-model="time" name="time" /> </div>
                    </div>
                </div>

                <button class="input" type="submit" @click="refreshAll">Adicionar</button>
            </form>
            <div v-if="subscriberOk" class="subscriberOk top">
                <div>
                    Inscrição realizada com Sucesso!
                </div>
            </div>


        </div>
    </div>
</template>

<style scoped>

.subscriberOk {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 20%;
    margin-left: 40%;
    background-color: #34d399;
    color: #fff;
    text-shadow: 2px 2px 2px #111;
    z-index: 20;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    border-radius: 5px;
    padding: 8px 0px;
    font-weight: bolder;
}
#customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04be7a80;
font-weight: bolder;
}

#customers td,
#customers th {
    border: 1px solid #04be7a40;
    padding: 8px;
    color: white;
    font-weight: bolder;
}

#customers tr:nth-child(1) {
    background-color: #04be7a30;
    }
#customers tr:nth-child(2n) {
    background-color: #04be7a30;
    }
    
    #customers tr:hover {
        background-color: #04be7a50 ;
    }
    
input {
    padding: 5px 15px;
    font-size: 1rem;
    font-weight: bolder;
}

::placeholder {
    font-size: 1rem;
    font-weight: bolder;
}

.table {
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #04be7a40;
    font-size: 1rem;
}

.row:nth-child(1) {
    background-color: #04be7a90;
    position: sticky;
    top: 90px;
    font-size: 1.1rem;
    font-weight: bolder;
}

.row:nth-child(2n) {
    background-color: #04be7a10;

}

.header {
    font-weight: bold;
}

.cell {
    flex: 1;
    overflow: hidden;
    border-right: 1px solid #04be7a40;
}

.cell:nth-child(1) {
    flex: .17;
}



.cell:nth-child(2),
.cell:nth-child(3),
.cell:nth-child(4),
.cell:nth-child(6),
.cell:nth-child(7),
.cell:nth-child(8),
.cell:nth-child(9),
.cell:nth-child(10),
.cell:nth-child(11) {
    flex: 2;
}


.cell-two {
    flex: 1;
    overflow: hidden;
    border-right: 1px solid #04be7a40;
}

.cell-two:nth-child(1) {
    flex: 1;
}

.cell-two:nth-child(2),
.cell-two:nth-child(3),
.cell-two:nth-child(4),
.cell-two:nth-child(6),
.cell-two:nth-child(7),
.cell-two:nth-child(8),
.cell-two:nth-child(9),
.cell-two:nth-child(10) {
    flex: .4;
}

.cell-two:nth-child(10) {
    flex: .2;
}

.main {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
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
    border-bottom: solid 1px #00fa9e40;
    border-right: solid 1px #04be7a40;
    backdrop-filter: blur(45px);
}

.clients {
    margin: 11px;
}

.clients span {
    border: 1px solid #04be7a40;
    padding: 3px 6px;
    border-radius: 5px;
    color: #04be7a;
    background-color: #04be7a40;
    margin-left: 3px;
}

.add-client {
    border: solid 1px #04be7a90;
    background-color: #04be7a;
    padding: 6px 7px;
    margin: 4px;
    border-radius: 5px;
    transition: all .5s linear;
    cursor: pointer;
    color: #fff;
}

.add-client:hover {
    border: solid 1px #fff;
    padding: 6px 7px;
    border-radius: 8px;
    color: #04be7a;
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
    height: 50px;
    font-weight: bolder;
    border-bottom: solid 1px #04be7a40;
    border-right: solid 1px #04be7a40;
    backdrop-filter: blur(45px);
}

.users-conf {
    margin: 16px;
}

.users-conf span {
    border: 1px solid #04be7a90;
    padding: 8px;
    border-radius: 5px;
    color: #04be7a;
    background-color: #04be7a30;
    margin-left: 3px;
}

.filter {
    border: solid 1px #04be7a90;
    padding: 6px 7px;
    margin: 9px 35px;
    border-radius: 5px;
    transition: all .5s linear;
    cursor: pointer;
}

.filter:hover {
    border: solid 1px #fff;
    padding: 6px 7px;
    border-radius: 8px;
    color: #04be7a;
    background-color: #fff;
}

.users-list {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
    width: 100%;
}

.thed {
    position: sticky;
    top: 90px;
}

.title-user {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    height: 100px;
    width: 150px;
    margin: 2px;
    border-radius: 5px;
    border: solid 2px #04be7a60;
}

.title-user img {
    height: 35px;
    width: 35px;
    background-color: #04be7a60;
    border: 3px solid #04be7a;
    border-radius: 8px;
}

.title-user h4 {
    text-align: center;
    font-size:.8rem;
}


.form-cliente {
    border-radius: 50%;
    border: solid 3px #04be7a;
}

.cliente {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: solid 3px #04be7a;
    color: #04be7a;
}


.file-cliente {
    margin-top: -20px;
    margin-left: 20px;
    zoom: .8;
}



.close {
    zoom: 1.6;
}


.length-full {
    color: #fff;
}

.users-full h1 {
    font-size: 3rem;
    margin-bottom: -1rem;
}

.users-full-status {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    color: #04be7a;
}

.button {
    height: 35px;
    width: 55px;
    text-align: center;
    padding-top: 4px;
    border: solid 2px #fff;
    border-radius: 8px;
    background-color: #04be7a50;
    cursor: pointer;
}

.green {
    color: #00ff00;
}

.red {
    color: #cf0000;
}

.users-full-status h1 {
    font-size: 1.3rem;
}

.users-full-status h2 {
    font-size: 1.2rem;
}


.center {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 5px;
    margin-bottom: 1rem;
}

.center-start {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 5px;
    margin-bottom: 4rem;
}

.center-start div a {

    margin: 0 20px;
}

.others {
    z-index: 1;
}

.table-clients {
    width: 100%;
    z-index: 1;
    margin-top: -2rem;
}

.others-full {
    z-index: 1;
    background-color: #04be7a50;
}

.others-details {
    margin: 0 .5%;
    z-index: 1;
    background-color: #04be7a30;
    border: solid 3px #04be7a40;
    border-radius: 3px;
}

.list {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 100%;
}


.head-logo {
    z-index: 1;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.logo {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--color-background);
    height: 46px;
    width: 46px;
    color: #718096;
    box-shadow: 0px 7px 20px #04be7a;
    border-radius: 8px;
    margin: 1rem;
    z-index: 10;
}

.logo img {
    height: 46px;
    width: 46px;
    border-radius: 8px;
    border: #04be7a 2px solid;
    z-index: 100;
    opacity: 1;
}

.head-name {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    font-family: ' gagalin';
}
</style>
