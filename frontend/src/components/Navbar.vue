<template>
  <nav>
    <navbar-menu class="pe-3 pt-3 ps-3 pt-3"></navbar-menu>
    <div id="user" class="p-2">
      <span v-if="user.name">{{ user.name }}</span>
      <i class="fa fa-power-off" @click="logout"></i>
    </div>
  </nav>
</template>

<script>
import NavbarMenu from "./NavbarMenu";
import {computed, onBeforeMount} from "vue";
import useUser from "../composables/useUser";
import {useStore} from "vuex";

export default {
  name: "Navbar",
  components: { NavbarMenu },
  setup() {

    const store = useStore()
    const { getUser, logout } = useUser()
    const user = computed(() => store.getters.getAuthenticatedUser);

    onBeforeMount(() => {
      getUser()
    })

    return {
      user,
      logout,
    }

  }

}
</script>

<style scoped>

nav {
  background: #041C32;
  height: 100%;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#user {
  background-color: #073b5b;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

i {
  cursor: pointer;
}

</style>