<template>
  <li><router-link :to="$props.route" class="mb-3 p-3"><i :class="$props.icon"></i><span>{{ $props.text }}</span></router-link></li>
</template>

<script>
export default {
  name: "NavbarMenuElement",
  props: {
    'route': String,
    'icon': String,
    'text': String
  }
}
</script>

<style scoped>
.router-link-active.router-link-exact-active {
  border-right: 3px solid #ECB365;
}
li {
  list-style-type: none;

}
a:hover, a:focus {
  background: #08557a;
}
li, li a {
  cursor: pointer;
  color: white;
  display: block;
  border-radius: 5px;
}
li a {
  background: #073b5b;
  display: flex;
  align-items: center;
  transition: background 0.1s linear;
}
li i {
  margin-right: 15px;
  display: inline-block;
}
li a, li i {
  font-size: 20px;
}
li a span {
  display: block;
  flex-basis: 75%;
}
</style>