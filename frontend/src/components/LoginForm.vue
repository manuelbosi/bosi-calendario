<template>
  <form>
    <div class="mb-3">
      <label for="email" class="form-label">Indirizzo email</label>
      <input type="email" class="form-control" id="email" v-model="form.email" autocomplete="off">
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" v-model="form.password" autocomplete="off">
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary w-100" @click.prevent="userLogin">ACCEDI</button>
    </div>
  </form>
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
form {
  width: 400px;
}
</style>