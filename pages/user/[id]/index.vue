<script setup>

const linkFeed = ref(true)
const linkPartner = ref(false)
const feedShow = ref(true)

function buttonFeed () {
    linkFeed.value = true
    linkPartner.value = false
    feedShow.value = true
}

function buttonPartner () {
    linkFeed.value = false
    linkPartner.value = true
    feedShow.value = false
}



</script>
<template>
    <NuxtLayout>
    <div class="link">
        <NuxtLink @click="buttonFeed" :class="{ aActivee: linkFeed }"> 
            Feed
        </NuxtLink>
        <NuxtLink @click="buttonPartner" :class="{ aActivee: linkPartner }">
            Parcerias
        </NuxtLink>
    </div>
    <div class="feed" v-if="feedShow">
        <TimelineFeedTree/>
        <TimelineFeedTwo/>
        <TimelineFeedWelcome/>
    </div>
    <div class="partner" v-else>
        <TimelineComunityWelcome/>
    </div>
        <NuxtPage/>
    </NuxtLayout>
</template>
<style scoped>
.link {
   display: flex;
   justify-content: space-evenly;
   margin-top: 1.5rem;
   font-size: 1.2rem;
   font-weight: bolder;
   backdrop-filter: blur(5px);
}

a {
    border-bottom: solid 2px #71809690;
    letter-spacing: 2px;
    width: 40%;
    text-align: center;
    cursor: pointer;
}

a:hover {
    border-bottom: solid 2px #34d399;
    color: #34d399;
    cursor: pointer;
}

a.router-link-exact-active {
    border-bottom: solid 2px #34d399;
    color: #34d399;
}

.aActivee {
    border-bottom: solid 2px #34d399;
    color: #34d399;
    
}

</style>
