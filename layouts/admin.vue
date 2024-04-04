<script>
export default {
    mounted() {
        let lastScrollTop = 0;
        const navbar = document.getElementById('nav-container');

        window.addEventListener('scroll', function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Rolando para baixo
                navbar.style.top = '-100px'; // Ou qualquer outra posição desejada para esconder o navbar
            } else {
                // Rolando para cima
                navbar.style.top = '20px';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para o comportamento correto em bordas
        }, false);
    }
}


</script>
<script setup>
const route = useRoute()

const reg = route.params.id
const logon = useCookie('logon')
// const logon = useCookie('logon', { maxAge: 4800})
logon.value = reg

const dataConf = await useFetch(`http://191.101.70.209:8083/users/${route.params.id}`)
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
colorCookie.value === "darkCookie" ? colorMode.value = "dark" : colorMode.value ="light"

const state = useCookie('state')
state.value = state.value

const navA = ref(state.value === 1)
const navB = ref(state.value === 2)
const navC = ref(state.value === 3)
const navD = ref(state.value === 4)


</script>
<template>
    <div v-if="bodyOne">

        <div id="nav-container" class='nav'>
            <div>
                <div class="nav-bottom">
                    <NuxtLink :to="`/admin`">
                        <Icon name='solar:home-smile-bold' /> Home
                    </NuxtLink>
                    <NuxtLink :to="`/admin/clientes`">
                        <Icon name='solar:dumbbell-large-bold' /> Clientes
                    </NuxtLink>
                </div>
            </div>
            <div>    
                <NuxtLink>
                    <Icon name="solar:hamburger-menu-bold" /> Log out
                </NuxtLink>    
            </div>
        </div>
        
        <slot />
    </div>
    <div class="color">
        <a @click="theme()" :model="$colorMode.value" >
            <Icon :name="colorMode.value === 'dark' ? 'line-md:moon-filled-to-sunny-filled-loop-transition' : 'line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition'"/>             
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
.head-logo {
    display: flex;
    justify-content: space-between; 
    flex-direction: row-reverse;
    align-items: flex-start;
    z-index: 1;
    flex-wrap: wrap;

}

.icon {
    zoom: 1.1;
}

.logo {
   display: flex;
    justify-content: center;
    flex-direction: flex-start;
    align-items: center;
    flex-wrap: wrap;
    height: 55px;
    width: 55px;
    background:  linear-gradient(to bottom right, #34d399 0%,#34d39970 50%,#00f2ff90 100%);
    margin: 1.5rem;
    border-radius: 7px ; 
    z-index: 10;
}

.logo img {
    height: 49px;
    width: 49px;
    margin: -1px 0 0 -1px;
    border-radius: 7px;
    z-index: 100;
    opacity: 1;

}

.nav-bar {
    z-index: 200;
    transform: translateX(0%);
    position: fixed;
    height: calc(100% - 0px);
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

.logo-nav-bar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    transform: translateX(0%);
    position: fixed;
    bottom: 0px;
    height: calc(100% - 0px);
    width: 100%;
    background:  linear-gradient(to bottom right, #34d399 0%,#34d39980 50%,#00f2ff90 100%);
    backdrop-filter: blur(5px);
    z-index: 1004;
    
}
.logo-nav-bar img {
    height: 300px;
    width: 300px;
    border-radius: 7px;
    border: #34d399 1px solid;
    opacity: 1;
    z-index: 100;
    
}

.button-client {
    margin: 1.2rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    zoom: 1.3;
}

.button-client .icon {
    zoom: .9;
    margin-right: -3px;
}


.head-name {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
}


.name {
    font-size: 1.6rem;
    line-height: 1.5rem;
    margin: .2rem 1.5rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #34d399;

}

.email {
    font-size: .8rem;
    line-height: 1.5rem;
    margin: .2rem 1.6rem;
    font-weight: 700;
    letter-spacing: 1.1px;

}


.body-timeline {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    text-align: left;
    margin: 2rem 10px 120px 10px;
}

.main-logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    height: 100px;
    width: 100px;
    box-shadow: 1px 7px 20px #34d399;
    margin: 1.5rem;
    border-radius: 7px;
}

.main-logo img {
    height: 100px;
    width: 100px;
    border-radius: 7px;
    border: #34d399 2px solid;
    opacity: 1;

}

.body-timeline p {
    text-align: left;
    margin: 0 10px 20px 20px;
}

.link {
    text-decoration: underline;
}

.link:hover {
    color: #34d399;
}

.section-title {
    text-align: left;
    margin: 10px 1.5rem;
    font-weight: 800;
}

.section-subtitle {
    text-align: left;
    margin: -10px 1.5rem 15px;
    font-weight: 800;
    font-size: .9em;
}

.section-subtitle-two {
    text-align: left;
    margin: -16px 1.5rem 15px;
    font-weight: 800;
    font-size: .9em;
}

.section-option {
    text-align: left;
    margin: -10px 1.5rem 15px;
    font-size: .8em;
    font-weight: 800;
}

.section-option .icon {
    zoom: .8;
    margin-top: -3px;
}

.verified {
    color: green;
}

.pending {
    color: #e1a918;
}

.bloqued {
    color: #b30000;
}


.conf {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
}

.menu-square {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 800;
    width: 49.6%;
    padding: 5px;
    border-radius: 8px;
    margin: 1px auto;
    border: solid .1px #34d39950;
}

.menu-square div .icon {
    margin: 3px 0px;
    transition: transform .3s linear;
    transform: translateX(-10px);
}

.menu-square div {
    display: flex;
    flex-direction: column;
    font-size: 1em;
    justify-content: center;
    margin: 2px auto;
}

.menu-square div:nth-child(2) {
    display: flex;
    flex-direction: column;
    font-size: .7em;
    justify-content: center;
    margin: 2px auto;
}

.menu-square div:nth-child(3) {
    display: flex;
    flex-direction: column;
    font-size: .7em;
    justify-content: center;
    margin: 2px auto;
    color: #002aff;
}

.menu-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 800;
    width: 100%;
    padding:  6px 2px 2px 2px;
    margin: 5px auto;
    border: solid 1px #34d39910;
    border-bottom: solid .1px #34d39940;
    border-top: solid .2px transparent;
}

.menu-button div {
    display: flex;
    flex-direction: row;
    font-size: .8em;
    justify-content: space-between;
    margin-top: 2px;
}

.menu-button .icon {
    margin: -2px 0px 0px 26px;
    transition: transform .3s linear;
    transform: translateX(-15px);
}

.menu-button .icon:nth-child(2) {
    margin: 5px 0px 0px 26px;
    transition: transform .3s linear;
    transform: translateX(-25px);
}

.menu-button:hover {
    cursor: pointer;
    border-bottom: solid .2px #34d399;
    background-color: #34d39910;
}


.menu-button:hover .icon:nth-child(2) {
    transform: translateX(-15px);
}

.logout {
    position: fixed;
    bottom: 15px;
    left: 50%;
    width: 250px;
    margin-left: -125px;
    transition: all .4s linear;
    border: solid .1px #34d39970;
    box-shadow: 0 0px 5px #34d39910;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 14px;
    padding-inline: 16px;
    padding-top: 6px;
    padding-bottom: 8px;
}

.logout .icon {
    margin: 1px 0px 0px 6px;
    transition: transform .3s linear;
    transform: translateX(8px);
}

.logout:hover {
    background-color: #34d39910;
    color: #34d39980;
    cursor: pointer;
}

.logout:hover .icon {
    margin: 1px 0px 0px 6px;
    transform: translateX(0px);
}

.nav {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    transition: all .4s linear;
    position: fixed;
    top: 0px;
    margin: 0px auto 0px auto;
    box-shadow: 0 0px 5px #00f2ff10;
    border-right: solid 1px #34d39940;
    height: 100vh;
    border-radius: 2px;
    z-index: 101;
    width: 220px;
    backdrop-filter: blur(100px);
    font-weight: bolder;
    width: 14rem;
}
.nav a {
    width: 14rem;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 12px;
    border-bottom: solid 1px #34d39940;
}

.nav a.router-link-exact-active {
    border-bottom: solid 1px #fff;
    background: linear-gradient(to bottom right, #34d399 0%,#34d399 50%,#34d399 100%);
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.nav a.router-link-exact-active:hover {
    background: linear-gradient(to bottom right, #34d399 0%,#34d399 50%,#34d399 100%);
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.nav a.router-link-exact-active:hover::after {
    background-color: var(--color-background);
    color: #34d399;
    text-decoration: none;
    cursor: pointer;
}

.nav a:hover {
    background-color: transparent;
    background: linear-gradient(to right, #eee 0%,#eee 50%,#34d39995 100%);
    color: #34d399;
}

.navB {
    transition: all .4s linear;
    position: fixed;
    top: 0px;
    margin: 0 0 0 220px;
    box-shadow: 0 0px 5px #00f2ff10;
    border-right: solid 1px #34d39940;
    height: 48px;
    border-radius: 2px;
    z-index: 101;
    width: calc(100% - 220px);
    backdrop-filter: blur(100px);
    border-bottom: solid 1px #34d39940;
}
.navB div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    transition: all .4s linear;
    
}
.navB a {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    font-weight: bolder;
    align-items: center;
    flex-wrap: wrap;
    padding: 6px;
    margin: 6px 10px 0 0;
    border-radius: 8px;
}

.navB a.router-link-exact-active {
    text-decoration: none;
    cursor: pointer;
}

.navB a.router-link-exact-active:hover {
    background: linear-gradient(to bottom right, #34d399 0%,#34d399 50%,#34d399 100%);
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.navB a.router-link-exact-active:hover::after {
    background-color: var(--color-background);
    color: #34d399;
    text-decoration: none;
    cursor: pointer;
}

.navB a:hover {
    background-color: transparent;
    background: linear-gradient(to bottom right, #fff 0%,#fff 50%,#fff 100%);
    color: #34d399;
    font-weight: bolder;
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
  right:1.5rem;
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
    right:1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #34d39910;
    box-shadow: 0 0px 5px #34d39940;
    backdrop-filter: blur(100px)
}
.whats .icon, .color .icon {
  color: #34d39990;
  zoom: 1;
}

</style>
