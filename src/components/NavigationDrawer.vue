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
        :style="{ maxWidth: `${maxWidth - 1}%`, transitionDuration: `${speed}ms` }"
      >
        <template v-for="item in response" :key="item.key">
          <ExpansionPanel
            :item="item"
          >
          </ExpansionPanel>
        </template>
      </div>
      <div
        class="drawer__bg"
        :style="{
          maxWidth: `${maxWidth}%`,
          transitionDuration: `${speed}ms`,
          backgroundColor: backgroundColor,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import ExpansionPanel from "./ExpansionPanel.vue";
export default {
  name: "NavigationDrawer",

  components: {
    ExpansionPanel,
  },

  props: {
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    },

    maxWidth: {
      type: Number,
      required: false,
      default: 45,
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
      response: [],
      selectedPanel: [],
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
    callApi() {
      let response =
        '[{"key":"64f","text":"好喝黑糖","children":[{"key":"445","text":"黑糖鮮奶","children":[{"key":"37a","text":"黑糖珍珠鮮奶"},{"key":"feb","text":"黑糖芋圓鮮奶"},{"key":"59c","text":"黑糖蒟蒻鮮奶"}]},{"key":"29e","text":"黑糖冬瓜","children":[{"key":"ac3","text":"黑糖冬瓜牛奶"},{"key":"ca0","text":"黑糖冬瓜珍珠"}]}]},{"key":"6c3","text":"茶","children":[{"key":"5dc","text":"烏龍綠"},{"key":"b5f","text":"綠茶"},{"key":"b09","text":"紅茶"},{"key":"887","text":"青茶"}]},{"key":"c81","text":"咖啡","children":[{"key":"e02","text":"黑咖啡","children":[{"key":"d20","text":"濃縮咖啡"},{"key":"1f8","text":"美式咖啡"}]},{"key":"d7a","text":"牛奶咖啡","children":[{"key":"c09","text":"拿鐵","children":[{"key":"db2","text":"黑糖拿鐵"},{"key":"9f6","text":"榛果拿鐵"},{"key":"b61","text":"香草拿鐵"}]},{"key":"9ac","text":"卡布奇諾"},{"key":"ce8","text":"摩卡"}]}]}]';
      this.response = JSON.parse(response);
      console.log(this.response);
    },
  },

  mounted() {
    this.isVisible = this.isOpen;
    this.callApi();
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
    .drawer__bg
      transform: translateX(0)
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
  &__bg
    position: fixed
    top: 0
    right: 0
    bottom: 0
    height: 100%
    width: 100%
    z-index: 201
    overflow: auto
    transition-property: transform
    display: flex
    flex-direction: column
    transform: translateX(100%)
    box-shadow: 0 2px 6px #777
    opacity: 0.8
  &__content
    position: fixed
    top: 0
    right: 0
    bottom: 0
    width: 100%
    z-index: 202
    overflow: auto
    max-width: 45%
    transform: translateX(100%)
    padding-top: 10px
</style>
