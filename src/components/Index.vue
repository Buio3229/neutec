<template>
  <div class="index">
    <AppBar></AppBar>
    <SquareContent></SquareContent>
  </div>
</template>

<script>
import AppBar from "./AppBar.vue";
import SquareContent from "./SquareContent.vue"

export default {
  name: "App",
  components: {
    AppBar,
    SquareContent,
  },
};
</script>
<style lang="sass" scoped>
.index
  height: 100%
</style>
