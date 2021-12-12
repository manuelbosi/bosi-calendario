<template>
  <nav class="p-3">
    <navbar-menu></navbar-menu>
  </nav>
</template>

<script>
import NavbarMenu from "./NavbarMenu";
import {onMounted} from "vue";

export default {
  name: "Navbar",
  components: { NavbarMenu },
  setup() {
    onMounted(() => {
      console.log("navbar mounted")
    })
  }

}
</script>

<style scoped>

nav {
  background: #041C32;
  height: 100%;
  width: 280px;
}

</style>