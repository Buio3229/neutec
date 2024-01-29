<template>
  <div>
    <div class="drawer" :class="{ 'is-open': isOpen, 'is-visible': isVisible }">
      <div
        class="drawer__overlay"
        @click="closeDrawer"
        :style="{ transitionDuration: `${speed}ms` }"
      ></div>
      <div
        class="drawer__content"
        :style="{
          maxWidth: maxWidth,
          transitionDuration: `${speed}ms`,
          backgroundColor: backgroundColor,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationDrawer",

  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    },

    maxWidth: {
      type: String,
      required: false,
      default: "45%",
    },

    // Transition Speed in Milliseconds
    speed: {
      type: Number,
      required: false,
      default: 300,
    },

    backgroundColor: {
      type: String,
      required: false,
      default: "#000",
    },
  },

  data() {
    return {
      isVisible: false,
      isTransitioning: false,
    };
  },

  watch: {
    isOpen(val) {
      this.isTransitioning = true;

      if (val) {
        this.isVisible = true;
      } else {
        setTimeout(() => (this.isVisible = false), this.speed);
      }

      setTimeout(() => (this.isTransitioning = false), this.speed);
    },
  },

  methods: {
    closeDrawer() {
      if (!this.isTransitioning) {
        this.$emit("close");
      }
    },
  },

  mounted() {
    this.isVisible = this.isOpen;
  },
};
</script>

<style lang="sass" scoped>
.drawer
  visibility: hidden
  &.is-visible
    visibility: visible
  &.is-open
    .drawer__overlay
      opacity: 0.5
    .drawer__content
      transform: translateX(0)
  &__overlay
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100%
    z-index: 200
    opacity: 0
    transition-property: opacity
    background-color: #000000
    user-select: none
  &__content 
    position: fixed
    top: 0
    right: 0
    bottom: 0
    height: 100%
    width: 100%
    z-index: 9999
    overflow: auto
    transition-property: transform
    display: flex
    flex-direction: column
    transform: translateX(100%)
    box-shadow: 0 2px 6px #777
    opacity: 0.8
  
</style>
