<script setup>
const config = useRuntimeConfig()

console.log('Runtime config:', config)
if (import.meta.server) {
  console.log('API secret:', config.apiBase)
}

console.log(config.apiBase)
</script>

<template>
  <NuxtLoadingIndicator color='repeating-linear-gradient(to right,#34d399 0%,#095d62 50%,#34d399 100%)' /> <!-- here -->
  <div>
    <NuxtPage/>
  </div>
</template>

<style scoped>

.d{
  position: fixed;
  left:100px;
}
.count {
  position: fixed;
  top: 20px;
  left: 100px;
  color: #fadb41;
  font-weight: 800;
  z-index: 100000;
}
.logo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}


h1 {
  margin-top: -4rem;
  font-size: 1.8rem;
}

h3 {
  color: var(--color-text);
  margin-top: -2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 2rem 0;
}

nav a {
  color: var(--color-text);
  font-weight: bold;
  font-size: .9rem;
}

nav a.router-link-exact-active {
  color: #fadb41;
}

nav a.router-link-exact-active:hover {
  background-color: #fadb4180;
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
