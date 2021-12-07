<template>
  <div id="login-form">
    <h1>LOGIN FORM</h1>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Indirizzo email</label>
        <input type="email" class="form-control" id="email" v-model="form.email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="form.password">
      </div>
      <button type="submit" class="btn btn-primary">ACCEDI</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      form: {email: null, password: null}
    }
  },
  methods: {
    login() {
      console.log(this.form.email, this.form.password)
    }
  }
}
</script>

<style scoped>

</style>