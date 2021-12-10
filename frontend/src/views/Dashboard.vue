<template>
  <navbar></navbar>
  <div class="container">
    <h1>DASHBOARD</h1>
  <!--  <h1>Benvenuto {{user.name}}</h1>-->
    <button @click="logout">LOGOUT</button>
  </div>
</template>

<script>
import User from "../api/User";
import Api from "../api/Api";
import {onBeforeMount, onBeforeUnmount, onMounted, reactive} from "vue";
import Navbar from "../components/Navbar";

export default {
  name: "Dashboard",
  components: { Navbar },
  setup() {

    let user = reactive({})

    onBeforeMount(() => {
      document.getElementById('app').dataset.screen = 'dashboard';
    })

    onMounted(() => {
      Api.get('/user').then(res => {
        console.log(res.data)
        for(const k in res.data) user[k]=res.data[k];
      })
    })

    onBeforeUnmount(() => {
      document.getElementById('app').dataset.screen = '';
    })

    const logout = () => User().logout()


    return {
      logout,
      user
    }

  }
}
</script>

<style scoped>

</style>