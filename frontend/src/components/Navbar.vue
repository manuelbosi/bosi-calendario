<template>
  <nav class="p-3">
    <navbar-menu></navbar-menu>
  </nav>
</template>

<script>
import NavbarMenu from "./NavbarMenu";

export default {
  name: "Navbar",
  components: { NavbarMenu }

}
</script>

<style scoped>

nav {
  background: #041C32;
  height: 100%;
  width: 280px;
}

</style>