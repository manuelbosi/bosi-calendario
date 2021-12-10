<template>
  <ul class="p-0">
    <navbar-menu-element text="Dashboard" icon="fas fa-chart-line" route="/dashboard"></navbar-menu-element>
    <navbar-menu-element text="Calendario" icon="fas fa-calendar-alt" route="/calendar"></navbar-menu-element>
    <navbar-menu-element text="Clienti" icon="fas fa-users" route="/customers"></navbar-menu-element>
    <navbar-menu-element text="Note" icon="fas fa-clipboard" route="/notes"></navbar-menu-element>
  </ul>
</template>

<script>
import NavbarMenuElement from "./NavbarMenuElement";

export default {
  name: "NavbarMenu",
  components: { NavbarMenuElement }
}
</script>

<style scoped>

</style>