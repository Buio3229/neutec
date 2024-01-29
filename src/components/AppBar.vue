<template>
  <div class="app-bar">
    <div class="drawer-btn" @click="triggerDrawer">
      三
    </div>
    <NavigationDrawer :is-open="drawer" @close="closeDrawer"></NavigationDrawer>
  </div>
</template>

<script>
import NavigationDrawer from "./NavigationDrawer.vue";
export default {
  name: "AppBar",
  components: {
    NavigationDrawer,
  },
  data () {
    return {
      drawer: false,
    }
  },
  methods: {
    triggerDrawer(){
      this.drawer = !this.drawer
    },
    closeDrawer(){
      this.drawer = false
    }
  }
};
</script>
<style lang="sass" scoped>
.app-bar
  height: 40px
  position: relative
  display: flex
  justify-content: flex-end
.drawer-btn
  width: 40px
  height: 30px
  margin: 5px
  border: 1px solid black
  border-radius: 10px
  text-align: center
  color: grey
  font-size: 24px
  line-height: 35px
</style>
