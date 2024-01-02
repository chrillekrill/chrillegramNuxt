<template>
    <div>
      <div class="flex items-center justify-center h-screen">
        <div
          class="text-center text-black p-6 border-2 border-black w-full max-w-md"
        >
          <h1 class="text-2xl mb-3">Login</h1>
          <form  class="flex flex-col">
            <label class="mb-4 text-left text-stone-400">
              Email
              <input
                v-model="email"
                type="email"
                class="bg-gray-800 text-white w-full px-3 py-2 mt-2"
              />
            </label>
            <label class="mb-4 text-left text-stone-400">
              Password
              <input
                v-model="password"
                type="password"
                class="bg-gray-800 text-white w-full px-3 py-2 mt-2"
              />
            </label>
            <button
              type="submit"
              class="bg-stone-300 transition-all duration-100 hover:bg-stone-100 text-black px-6 py-2 mt-4"
              @click.prevent="submitForm"
            >
              {{ isLoading ? 'Loading...' : 'Login' }}
            </button>
          </form>
        </div>
      </div>
    </div>

  </template>

<script lang="ts" setup>

    //const { data: products } = await useFetch('https://fakestoreapi.com/products')

    const user = useUserStore()

    type FormFeedbackType = 'incomplete' | 'invalid' | 'success' | null;

    const email = ref('');
    const password = ref('');
    const isLoading = ref(false);
    const formFeedback: Ref<FormFeedbackType> = ref(null);
    const success = ref(true);

    const submitForm = async () => {
        isLoading.value = true;
        formFeedback.value = null;

        if (!email.value.trim()) {
            formFeedback.value = 'incomplete';
            isLoading.value = false;
            return;
        }

        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (email.value && !regex.test(email.value)) {
            formFeedback.value = 'invalid';
            success.value = false;
            isLoading.value = false;
            return;
        }

        setTimeout(async () => {
            // If the execution reaches here, it means that all checks have passed.
            success.value = true;
            user.login(email.value, password.value);
            // const { data: res } = await useFetch('https://localhost:7135/User/Authenticate', {
            //   method: 'post',
            //   body: {
            //     email: email,
            //     password: password
            //   }
            // })
            // console.log(res.value.jwt)
            // jwt.value = res.value.jwt;
            isLoading.value = false;
        }, 1000);

        return navigateTo('/')

    };

    
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>