<template>
  <navbar></navbar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Main",
  components: { Navbar }
}
</script>

<style scoped>

</style>