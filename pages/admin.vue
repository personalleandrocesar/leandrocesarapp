<script setup>
import { ref } from 'vue';
const layout = "admin"
useHead({
    titleTemplate: 'Clientes | NEX_WOD',
});

const route = useRoute();
const Users = await useFetch('https://api.nexwod.app/users');
const item = Users.data.value;
const UsersId = await useFetch(`https://api.nexwod.app/users/:id`);

console.log(UsersId.data.value);

console.log(item);




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


const photoOpen = ref(false);
function openPhoto() {
    photoOpen.value = !photoOpen.value;
}

</script>
<template>

    <div id="grid">
        <div id="areaA">
            <div>
                <NuxtLink :to="`/admin`">
                    <Icon name='material-symbols:data-usage' /> Início
                </NuxtLink>
                <NuxtLink :to="`/admin/clientes`">
                    <Icon name='solar:users-group-two-rounded-bold' /> Clientes
                </NuxtLink>
            </div>
            <div class='logOut'>
                <NuxtLink :to="`/`">
                    <Icon name='solar:users-group-two-rounded-bold' /> Log Out
                </NuxtLink>
            </div>
        </div>
        <div id="areaB">
            <NuxtPage />
        </div>
    </div>


    <div class="color">
        <a @click="theme()" :model="$colorMode.value">
            <Icon
                :name="colorMode.value === 'dark' ? 'line-md:moon-filled-to-sunny-filled-loop-transition' : 'line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition'" />
        </a>
    </div>
    <div class="whats">
        <a
            href="https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20nos%20seus%20Servi%C3%A7os,%20me%20chamo%20">
            <Icon name="ic:outline-whatsapp" />
        </a>
    </div>
</template>
<style scoped>
#grid {
    display: grid;
    grid-template-columns: 14rem 1fr;
    width: 100%;
    height: 100vh;
}

#areaA {
    border-right: solid 1px #00DC8240;
    font-weight: bolder;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.logOut {
    border-top: solid 1px #00DC8240;
}

#areaA a {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 12px;
    border-bottom: solid 1px #00DC8240;
    border-end-end-radius: 5px;
    border-start-end-radius: 5px;
}

#areaA a:hover {
    background-color: transparent;
    background: linear-gradient(to right, transparent 0%, transparent  50%, #00DC82 100%);
    color: #00DC82;
}

#areaA a.router-link-exact-active {
    background: linear-gradient(to bottom right, #00DC82 0%, #00DC82 50%, #00DC82 100%);
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

#areaA a.router-link-exact-active:hover {
    background: linear-gradient(to bottom right, #00DC82 0%, #00DC82 50%, #00DC82 100%);
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

#areaA a.router-link-exact-active:hover::after {
    background-color: var(--color-background);
    color: #00DC82;
    text-decoration: none;
    cursor: pointer;
}

#areaB {
    margin: 10px;
    border-radius: 5px;
    border: solid 1px #00DC8240;
    overflow-x: hidden; 
    overflow-y: auto; 
}

#areaB-A {
    border: solid 1px #00DC8240;
    margin: 10px;
    border-radius: 5px;
}

#areaB-B {
    border: solid 1px #00DC8240;
    margin: 10px;
    border-radius: 5px;
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
    height: 35px;
    font-weight: bolder;
    border-bottom: .10px solid #00DC8240;
    backdrop-filter: blur(45px);
}

.clients {
    margin: 11px;
}

.clients span {
    border: 1px solid #00DC8290;
    padding: 3px 6px;
    border-radius: 5px;
    color: #00DC82;
    background-color: #00DC8230;
    margin-left: 3px;
}

.notifications {
    border: solid 1px transparent;
    padding: 4px 5px;
    margin: 6px;
    border-radius: 5px;
    transition: all .5s linear;
    cursor: pointer;
}

.notifications:hover {
    padding: 4px 5px;
    border-radius: 5px;
    color: #00DC82;
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
    border-bottom: .10px solid #00DC8240;
    backdrop-filter: blur(45px);
}

.users-conf {
    margin: 16px;
}

.users-conf span {
    border: 1px solid #00DC8290;
    padding: 8px;
    border-radius: 5px;
    color: #00DC82;
    background-color: #00DC8230;
    margin-left: 3px;
}

.filter {
    border: solid 1px #00DC8290;
    background-color: #00DC8230;
    padding: 6px 7px;
    margin: 9px 35px;
    border-radius: 5px;
    transition: all .5s linear;
    cursor: pointer;
}

.filter:hover {
    border: solid 1px #fff;
    padding: 6px 7px;
    border-radius: 5px;
    color: #00DC82;
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
    border: solid 1px #00DC8210;
    box-shadow: 0 0px 5px #00DC8240;
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
    border: solid 1px #00DC8210;
    box-shadow: 0 0px 5px #00DC8240;
    backdrop-filter: blur(100px)
}

.whats .icon,
.color .icon {
    color: #00DC8290;
    zoom: 1;
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
    border: solid 1px #00DC8210;
    box-shadow: 0 0px 5px #00DC8240;
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
    border: solid 1px #00DC8210;
    box-shadow: 0 0px 5px #00DC8240;
    backdrop-filter: blur(100px)
}

.whats .icon,
.color .icon {
    color: #00DC8290;
    zoom: 1;
}
</style>
