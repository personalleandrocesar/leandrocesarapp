export default defineNuxtRouteMiddleware((to, from) => {
    
    const loading = ref(true)

      if (to.path !== '/admin/clientes') {
    onBeforeRouteLeave(() => {
      loading.value = true
    })
}

    onBeforeRouteEnter(() => {
        // Adiciona um atraso de 1 segundo antes de definir loading como false
        setTimeout(() => {
            loading.value = false
        }, 1000) // 1000 ms = 1 segundo
    })
})
