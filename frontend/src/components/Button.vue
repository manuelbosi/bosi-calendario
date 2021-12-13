<template>
  <button @click.prevent="$props.callback">{{ $props.text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    callback: Function,
    text: String
  }

}
</script>

<style scoped>
button {
  cursor: pointer;
  background: #073b5b;
  color: white;
  transition: background-color 0.1s linear;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  border: none;
}
button:hover {
  background: #08557a;
}
</style>