<template>
  <GuestLayout>
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
      Registrar Nova Conta
    </h2>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="nome" class="block text-sm/6 font-medium text-gray-900">
            Nome Completo
          </label>
          <div class="mt-2">
            <input type="text" name="nome" id="nome" required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">
            Email
          </label>
          <div class="mt-2">
            <input type="email" name="email" id="email" autocomplete="email" required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="senha" class="block text-sm/6 font-medium text-gray-900">
              Senha
            </label>
          </div>
          <div class="mt-2">
            <input type="senha" name="senha" id="senha" required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="senha" class="block text-sm/6 font-medium text-gray-900">
              Confirme sua Senha
            </label>
          </div>
          <div class="mt-2">
            <input type="senha" name="senha" id="confirmarSenha" required=""
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>


        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Criar Conta
          </button>
        </div>
      </form>
      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Já possui conta ?
      <router-link :to="{name: 'Login'}"class="font-semibold text-indigo-600 hover:text-indigo-500">
        Entre por aqui
      </router-link>
      </p>
    </div>
  </GuestLayout>
</template>

<script>
import GuestLayout from '../components/GuestLayout.vue';

export default {
  component: {
    GuestLayout,
  }
}
</script>

<style lang="sass" scoped>

</style>