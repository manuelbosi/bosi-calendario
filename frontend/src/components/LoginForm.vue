<template>
  <div id="login-form" class="w-25 mx-auto">
    <h1>LOGIN FORM</h1>
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">Indirizzo email</label>
        <input type="email" class="form-control" id="email" v-model="form.email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="form.password">
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary w-100" @click.prevent="userLogin">ACCEDI</button>
      </div>
    </form>
  </div>
</template>

<script>
import useLoginForm from '../composables/useLoginForm'

export default {
  name: "LoginForm",
  setup() {

    // const router = useRouter()
    const { form, login } = useLoginForm()

    // Login
    const userLogin = () => login(form)

    return {
      form,
      userLogin
    }

  }
}
</script>

<style scoped>

</style>