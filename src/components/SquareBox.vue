<template>
  <div class="box">
    <div class="box-content" :class="{flash: flashing}">

    </div>
  </div>
</template>
<script>
export default {
  name: "SquareBox",

  props: {
    index: {
      type: Number,
      default: 0,
    },

    flashing: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      
    };
  },

  watch: {
    
  },

  methods: {
  },
};
</script>

<style lang="sass" scoped>
.box
  display: flex
  flex: 1 1 30%
  margin: 1px
  height: 100px
  border: black solid 2px
.box-content
  display: flex
  flex: 1
  background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%)
.flash
  animation: blinker 0.6s linear infinite
@keyframes blinker 
  50% 
    opacity: 0.4
  
</style>
