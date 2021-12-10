<template>
  <h1>DASHBOARD</h1>
  <h1>Benvenuto {{user.name}}</h1>
  <button @click="logout">LOGOUT</button>
</template>

<script>
import User from "../api/User";
import Api from "../api/Api";
import {onMounted, reactive} from "vue";

export default {
  name: "Dashboard",
  setup() {

    let user = reactive({})

    onMounted(() => {
      Api.get('/user').then(res => {
        console.log(res.data)
        for(const k in res.data) user[k]=res.data[k];
      })
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