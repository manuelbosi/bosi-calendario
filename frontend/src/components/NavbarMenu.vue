<template>
  <ul class="p-0">
    <navbar-link text="Dashboard" icon="fas fa-chart-line" route="/dashboard"></navbar-link>
    <navbar-link text="Calendario" icon="fas fa-calendar-alt" route="/calendar"></navbar-link>
    <navbar-link text="Clienti" icon="fas fa-users" route="/customers"></navbar-link>
    <navbar-link text="Note" icon="fas fa-clipboard" route="/notes"></navbar-link>
    <navbar-link text="Impostazioni" icon="fas fa-cog" route="/settings"></navbar-link>
  </ul>
</template>

<script>
import NavbarLink from "./NavbarLink";

export default {
  name: "NavbarMenu",
  components: { NavbarLink },
}
</script>

<style scoped>
ul {
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
}
</style>