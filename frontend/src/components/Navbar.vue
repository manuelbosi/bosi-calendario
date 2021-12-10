<template>
  <nav class="p-3">
    <navbar-menu></navbar-menu>
<!--    <ul class="p-0">-->
<!--      <li><router-link to="/dashboard" class="mb-3 p-3"><i class="fas fa-chart-line"></i><span>Dashboard</span></router-link></li>-->
<!--      <li><router-link to="/calendar" class="mb-3 p-3"><i class="fas fa-calendar-alt"></i><span>Calendario</span></router-link></li>-->
<!--      <li><router-link to="/customers" class="mb-3 p-3"><i class="fas fa-users"></i><span>Clienti</span></router-link></li>-->
<!--      <li><router-link to="/notes" class="mb-3 p-3"><i class="fas fa-clipboard"></i><span>Note</span></router-link></li>-->
<!--    </ul>-->
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