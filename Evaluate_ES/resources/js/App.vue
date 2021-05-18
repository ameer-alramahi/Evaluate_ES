<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
import Login from "./components/parts/login";

export default {
  name: "app",
  components: {Login}
}
</script>

<style>
#app {
  direction: rtl;
  font-family: "dubai", sans-serif;
}
</style>
