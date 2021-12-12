<template>
    <h1>DASHBOARD</h1>
    <button @click="logout">LOGOUT</button>
</template>

<script>
import User from "../api/User";
// import Api from "../api/Api";
import {onBeforeMount, onBeforeUnmount, onMounted, reactive} from "vue";

export default {
  name: "Dashboard",
  setup() {

    let user = reactive({})

    onBeforeMount(() => {
      document.getElementById('app').dataset.screen = 'dashboard';
    })

    onMounted(() => {
      // Api.get('/user').then(res => {
      //   console.log(res.data)
      //   for(const k in res.data) user[k]=res.data[k];
      // })
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