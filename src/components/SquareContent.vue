<template>
  <div class="content">
    <div class="square-content">
      <template v-for="n in square_length" :key="n">
        <SquareBox
          :index="n"
          :flashing="flash_square.indexOf(n)!=-1"
        ></SquareBox>
      </template>
    </div>
  </div>
</template>

<script>
import SquareBox from "./SquareBox.vue";

export default {
  name: "SquareContent",
  components: {
    SquareBox,
  },
  data () {
    return {
      square_length: 9,
      flash_square: [3,5,9]
    }
  },
};
</script>

<style lang="sass" scoped>
.content
  height: calc(100% - 40px)
  background-color: #e9e9e9
  display: flex
  flex-direction: column
  justify-content: center
.square-content
  display: flex
  flex-wrap: wrap
  justify-content: space-around
</style>
