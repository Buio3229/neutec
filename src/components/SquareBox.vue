<template>
  <div class="box">
    <div class="box-anchor">
      <div v-if="hasBall" class="ball move-right">0</div>
    </div>
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

    hasBall: {
      type: Boolean,
      default: false,
    }
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
  justify-content: center
  align-items: center
.box-content
  display: flex
  flex: 1
  height: 100px
  background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%)
  flex-direction: column
.flash
  animation: blinker 0.6s linear infinite
@keyframes blinker 
  50% 
    opacity: 0.4
.box-anchor
  position: absolute
.ball
  width: 30px
  height: 30px
  text-align: center
  line-height: 30px
  background-color: #A5F12B
  border-radius: 50%
  position: relative
  z-index: 2
.move-right
  animation: move 2s linear infinite
@keyframes move
  0%, 40%
    left: 0px
  40%, 90%
    left: 200px
  90%, 100%
    left: 220px
</style>
