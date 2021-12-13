<template>
  <form>
    <div class="form-group">
      <label for="email">Indirizzo email</label>
      <input type="email" id="email" v-model="form.email" autocomplete="off">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="form.password" autocomplete="off">
    </div>
    <Button :callback="userLogin" text="ACCEDI"></Button>
  </form>
</template>

<script>
import useUser from "../composables/useUser";
import Button from "./Button";

export default {
  name: "LoginForm",
  components: { Button },

  setup() {

    // const router = useRouter()
    const { form, login } = useUser()

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
form label {
  display: block;
}
form input {
  width: 100%;
  padding: 10px;
  border: 1px solid #666;
  font-size: 16px;
  border-radius: 5px;
}
form .form-group {
  margin-bottom: 15px;
}

</style>