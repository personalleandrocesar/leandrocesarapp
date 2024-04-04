<script setup>
import { ref } from 'vue';
const user = ref('')
const senha = ref('')

const client = await useFetch('/api/users')

const dontUser = ref(false)


const enterClicked = () => {
  const userData = client.data.value[user.value];

  if (userData && user.value === userData.usuario && senha.value === userData.sennha) {
    return navigateTo(`/user/${userData.usuario}`);
  } else {
    dontUser.value = true;
    setTimeout(() => {
      dontUser.value = false;
    }, 5000); // Define um timeout para limpar a mensagem após 2 segundos
    return;
  }
};

const trigger = () => {
  enterClicked()
}

const pop = useCookie('pop', { maxAge: 7889400 })
pop.value = pop.value

const popOk = () => {
  return pop.value = "ok"
}

const popView = () => {
  if (pop.value === 'ok') {
    return false
  } return true
}

const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
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

const passView = ref(true)
const pass = ref('password')
function swPass() {
  passView.value = !passView.value;

  pass.value = 'password'
};

function swText() {
  passView.value = !passView.value;

  pass.value = 'text'
};

</script>
<template>
  <header>
    <div class="head-logo" id="sobre">
      <div class='logo'>
        <img @click="openPhoto()" src="~/assets/logo.png">
      </div>
    </div>
    <div class="head-name">
      <div class="name">
        app.leandrocesar.com
      </div>
      <h3>Área do Cliente</h3>
    </div>
    <div class="inputs">
      <div>
        <h4>Usuário</h4>
        <input type="email" @keyup.enter="trigger" name="" id="usuario" placeholder="Digite seu usuário" autofocus
          v-model="user" required>
      </div>
      <div v-if='dontUser' class="dont-user">
        Usuário não encontrado!
      </div>
      <div class="senha">
          <h4>Senha</h4>
          <input v-bind:type="pass" @keyup.enter="trigger" name="" id="senha" placeholder="Digite sua senha" v-model="senha">
          <Icon @click="swText" v-if="passView" name="ph:lock-key-open-bold" id="password-icon"/>
          <Icon @click="swPass" v-else name="ph:lock-key-fill" id="password-icon"/>
        
        </div>
      <div>
        <NuxtLink class='login' @click="enterClicked">
          LOGIN
          <Icon name="solar:login-3-bold" />
        </NuxtLink>
      </div>
      <div class="lost">
        <a href="https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1%20professor!%20Esqueci%20o%20meu%20email%20e%20minha%20senha!"
          target="_blank">
          <h5>Esqueci minha senha</h5>
        </a>
      </div>
    </div>


  </header>
  <footer>

    <div v-if="popView()" class="pop-up">
      <p>
        Neste app, usamos cookies e outras tecnologias semelhantes para melhorar sua
        experiência de navegação e facilitar certos tipos de vantagens de navegação. 
        Ao clicar no botão abaixo, você está ciente e concordando com estas funcionalidades.
      </p>
      <div class="button-pop" @click="popOk()">PROSSEGUIR!</div>
    </div>
  </footer>
  <div class="color">

            <a @click="theme()" :model="$colorMode.value" >
    <Icon :name="colorMode.value === 'dark' ? 'line-md:moon-filled-to-sunny-filled-loop-transition' : 'line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition'"/>             </a>
           
    </div>   
        <div class="whats">

            
            <a
            href="https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20nos%20seus%20Servi%C3%A7os,%20me%20chamo%20">
            <Icon name="ic:outline-whatsapp" />
        </a>
    </div> 
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
}

</script>

<style scoped>
.head-logo {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  z-index: 1;
  flex-wrap: wrap;
}
.senha {
  position: relative;
}

#password-icon {
  position: absolute;
  top: 60px;
  right: 12px;
  z-index: 10000;
}
.logo {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  height: 100px;
  width: 100px;
  box-shadow: 0px 7px 20px #00dc82;
  margin: 6.5rem 0 1.5rem 0;
  border-radius: 8px;
  z-index: 10;
}

.logo img {
  height: 100px;
  width: 100px;
  border-radius: 8px;
  border: #00dc82 2px solid;
  z-index: 100;
  opacity: 1;

}


.button-client {
  margin: 2rem 1.5rem;
  transition: all .4s linear;
  border: solid 1px #00DC8210;
  box-shadow: 0 0px 5px #00DC8210;
  border-radius: 8px;
  cursor: pointer;
  width: 160px;
  text-align: center;
  line-height: 18px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  height: 34px;
  font-size: 14px;
  padding-inline: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.button-client:hover {
  background-color: #00DC8210;
  color: #00DC8280;
}

.button-client .icon {
  margin-top: -5px;
  margin-right: 5px;
  transition: all 0.2s ease-in-out 0s;
}

.button-client:hover .icon {
  color: #00DC8280;
}

.head-name {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
.name {
  font-size: 1.6rem;
  line-height: 1.5rem;
  margin: .2rem 1.5rem;
  font-weight: 700;
  color: #00DC82;
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
    right:1.5rem;
    border-radius: 9px;
    cursor: pointer;
    z-index: 100;
    border: solid 1px #00DC8210;
    box-shadow: 0 0px 5px #00DC8240;
    backdrop-filter: blur(100px)
}
.whats .icon, .color .icon {
  color: #00DC8290;
  zoom: 1;
}

.inputs {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.inputs div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}

.dont-user {
  color: red;
  font-weight: 900;
}

input {
  margin: .5rem auto;
  transition: all .4s linear;
  border: solid 1px #00DC8210;
  box-shadow: 0 0px 5px #00DC8210;
  border-radius: 8px;
  text-align: left;
  line-height: 18px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  height: 34px;
  font-size: 14px;
  padding-inline: 16px;
  padding-top: 8px;
  padding-bottom: 8px;

}

.inputs div h4 {
  text-align: left;
}

input:focus {
  border-color: #00DC8280;
}

input:focus-visible {
  border: solid 1px #00DC82;
}

input:active {
  border-color: #00DC8280;
}

input:hover {
  background-color: #00DC8210;
}

h4 {
  transition: all .3s linear;
  margin: 0 0 0 10px;
  text-align: left;
}

h4:nth-child(1) {
  transition: all .3s linear;
  margin: 20px 0 0 10px;
}

a {
  text-decoration: none;
  transition: all .4s linear;
}

a:hover {
  color: #00DC82;
}

.login {
  transition: all .4s linear;
  border: solid 1px #00DC8210;
  box-shadow: 0 0px 5px #00DC8210;
  border-radius: 8px;
  cursor: pointer;
  width: 160px;
  text-align: center;
  line-height: 18px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  height: 34px;
  font-size: 14px;
  padding-inline: 16px;
  padding-top: 7px;
  padding-bottom: 8px;
  margin: 1rem 1.5rem;
}

.login .icon {
  margin: -2px 0px 2px 4px;
  transition: transform .3s linear;
}

.login:hover {
  cursor: pointer;
  background-color: #00DC8210;
  color: #00DC8280;

  padding-inline: 16px;
  padding-top: 7px;
  padding-bottom: 8px;
  margin: 1rem 1.5rem;
}

.login:hover .icon {
  margin: -2px 0px 2px 4px;
  transform: translateX(6px);
}

.pop-up {
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
  background-color: #00DC82 ;
  color: #fff;
  margin-left: -40%;
  font-weight: 900;
  border: solid 1px #00DC8210;
  z-index: 10000;
}

.pop-up p {
  font-weight: 700;
  font-weight: 900;
  font-size: 13px;
  color: #fff;
}

.button-pop {
  margin: 7px auto 0 auto;
  transition: all .4s linear;
  border: solid 1px #00DC82;
  box-shadow: 0 0px 5px #00DC8210;
  border-radius: 8px;
  cursor: pointer;
  width: 50%;
  text-align: center;
  border: solid 1px #dadada;
}

.button-pop:hover {
  border: solid 1px #fff;
}
</style>
