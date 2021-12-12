<template>
  <div id="login-form">
    <span>Accedi</span>
    <login-form></login-form>
  </div>
</template>

<script>
import {onBeforeMount, onBeforeUnmount} from "vue";
import LoginForm from "../components/LoginForm";

export default {
  name: 'Home',
  components: { LoginForm },
  setup() {

    onBeforeMount(() => {
      document.getElementById('app').dataset.screen = 'home';
    })

    onBeforeUnmount(() => {
      document.getElementById('app').dataset.screen = '';
    })

  }
}
</script>

<style scoped>
span {
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-size: 50px;
}
</style>