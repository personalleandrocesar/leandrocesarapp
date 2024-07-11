<script setup>
import { ref } from 'vue';
import { reloadNuxtApp } from "nuxt/app";
const route = useRoute();


const Users = await useFetch(`https://api.leandrocesar.com/users/${route.params.id}`);
const item = Users.data.value;

console.log(item);

const subscriberOk = ref(false)

const add = ref(true)
function addClient() {
    add.value = !add.value
}

async function deleteUser() {
    try {
        const response = await fetch(`https://api.leandrocesar.com/users/${route.params.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            console.log('Data delete successfully');
            subscriberOk.value = true;
            setTimeout(() => {
                subscriberOk.value = false;
                reloadNuxtApp({
                    path: "/admin/clientes",
                    ttl: 2000, // default 10000
                });
            }, 2000);
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

const dataConf = await useFetch(`https://api.leandrocesar.com/users/${route.params.id}`)
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

useHead({
    titleTemplate: `${dataConf.data.value?.name} ${dataConf.data.value?.lastName} | Clientes | NEX_WOD`,
})
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
                <div class='reward'>
                    <!-- <a @click="$router.go(-1)">
                        <Icon name="tabler:arrow-big-left-lines-filled" />
                    </a> -->
                    <NuxtLink :to="`/admin/clientes/${item.username}`">
                        <div class="reward-button">
                            <Icon name='material-symbols:shield-person' />
                        </div>
                    </NuxtLink>
                    <NuxtLink :to="`/admin/clientes/${item.username}/treinos`">
                        <div class="reward-button">
                            <Icon name='solar:dumbbell-large-bold' />
                        </div>
                    </NuxtLink>
                    <NuxtLink :to="`/admin/clientes/${item.username}/avaliacao`">
                        <div class="reward-button">
                            <Icon name='solar:clipboard-heart-bold' />
                        </div>
                    </NuxtLink>
                </div>
                <div class='reward'>
                    <!-- <a @click="$router.go(-1)">
                        <Icon name="tabler:arrow-big-left-lines-filled" />
                    </a> -->
                    <div class="reward-update">
                        <Icon name='material-symbols:person-edit' />
                    </div>
                    <div class="reward-delete" @click="deleteUser">
                        <Icon name='material-symbols:person-off-rounded' />
                    </div>
                </div>
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
                    <div class="update-button">
                        <Icon name='material-symbols:person-edit' /> Atualizar
                    </div>
                    <div class="delete-button" @click="deleteUser">
                        <Icon name='material-symbols:person-off-rounded' /> Deletar
                    </div>
                </div>
            </div>
            <!-- <img class='none' :src="`/admin/clientes/${Users.data.value.foto}`"> -->
            <div>
                <h1>
                    {{ Users.data.value.name }} {{ Users.data.value.lastName }}
                    <p>
                        {{Users.data.value.email }}
                    </p>
                </h1>

            </div>

            <p>Sexo: {{Users.data.value.sex }}</p>
            <p>Nascimento: {{ Users.data.value.birthday.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3-$2-$1') }}</p>
            <p>WhatsApp: {{Users.data.value.whatsapp }}</p>
            <p>Serviço: {{Users.data.value.service }}</p>
            <p>Objetivo: {{Users.data.value.target }}</p>
            <p>Usuário: {{Users.data.value.username }}</p>
            <p>Senha: {{Users.data.value.password }}</p>
            <p>Dias de Treino:{{Users.data.value.day }}</p>
            <p>Tempo de treino: {{Users.data.value.time }} minutos</p>
            <p>Dia do Vencimento:{{ Users.data.value.payDay }}</p>
            <p>Inicio do contrato: {{Users.data.value.periodStart.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3-$2-$1') }}</p>
            <p>Fim do Período: {{ Users.data.value.periodEnd.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3-$2-$1') }}</p>
            <p>Termino assinado:{{Users.data.value.terms }}</p>
            <p v-if="Users.data.value.status">Status: {{Users.data.value.status }}</p>
            <p v-else>Status: Bloqueado</p>

        </div>
    </div>
</template>
<style scoped>
.none,
.nav-users .reward {
    display: none;
}

@media (max-width: 650px) {
    .none{
        display: none;
    }
}
@media (max-width: 1020px) {
    .nav-users .actions, .actions-user .update-button, .actions-user .delete-button {
        display: none;
    }
    .nav-users .reward{
        display: inherit;
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
.subscriberOk {
        background-color: #ff1900;
        color: #fff;
        text-shadow: 2px 2px 2px #111;
        display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 20px 20px 20px;
  padding: 15px;
  border-radius: 8px;
  position: fixed;
  bottom: 10px;
  width: 80%;
  left: 50%;
  color: #fff;
  margin-left: -40%;
  font-weight: 900;
  border: solid 1px #00DC8210;
  z-index: 10000;
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

.actions a  {
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
    background: #34d39990;;
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
.reward {
    display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: space-between; 
        align-content: baseline;
        margin: 0;
        overflow-x: auto;
}

.reward a  {
    border: solid 1px #34d39910;
    background-color: transparent;
    padding: 4px 15px;
    margin: 2.5px 7px;
    border-radius: 8px;
    transition: all .3s linear;
    cursor: pointer;
}


.reward a:hover {
    border: solid 1px #34d39960;
    background-color: #34d39960;
}

.reward a.router-link-exact-active {
    background: #34d39990;
    border: solid 1px #34d399;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.reward-button a.router-link-exact-active:hover {
    background: #34d39990;;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.reward-button a.router-link-exact-active:hover::after {
    background-color: var(--color-background);
    color: #34d399;
    text-decoration: none;
    cursor: pointer;
}

.reward-user {
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
.delete-button {
    border: solid 1px #ff190080;
    background-color: #ff190080;
    padding: 4px 15px;
    margin: 2.5px 10px;
    border-radius: 8px;
    transition: all .3s linear;
    cursor: pointer;
}

.delete-button:hover {
    border: solid 1px #ff1900;
    border-radius: 8px;
    color: #fff;
    background-color: #ff1900;
}
.reward-update {
    border: solid 1px #fadb4080;
    background-color: #fadb4080;
    padding: 4px 15px;
        margin: 2.5px 7px;
        border-radius: 8px;
        transition: all .3s linear;
        cursor: pointer;
}

.reward-update:hover {
    border: solid 1px #fadb40;
    border-radius: 8px;
    color: #000;
    background-color: #fadb40;
}
.reward-delete {
    border: solid 1px #ff190080;
    background-color: #ff190080;
    padding: 4px 15px;
    margin: 2.5px 7px;
    border-radius: 8px;
    transition: all .3s linear;
    cursor: pointer;
}

.reward-delete:hover {
    border: solid 1px #ff1900;
    border-radius: 8px;
    color: #fff;
    background-color: #ff1900;
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
