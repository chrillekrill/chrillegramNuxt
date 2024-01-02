import { watch } from 'vue'

async function apiLogin(e: string, p: string) {
    const { data: res } = await useFetch('https://localhost:7135/User/Authenticate', {
              method: 'post',
              body: {
                email: e,
                password: p
              }
            })
    return res.value.jwt;
}

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        jwt: ''
    }),
    
    actions: {
        async login(email: string, password: string) {
            const userJwt = await apiLogin(email, password);

            this.$patch({
                jwt: userJwt
            })

        }
    },
    persist: true
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
  }