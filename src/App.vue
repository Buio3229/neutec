<template>
  <Index></Index>
</template>

<script>
import Index from "./components/Index.vue";

export default {
  name: "App",
  components: {
    Index,
  },
};
</script>

<style lang="sass">
body
  margin: 0
  height: 100vh
#app 
  height: 100%
</style>
