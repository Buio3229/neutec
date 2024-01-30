<template>
  <div class="title" :class="{'isOpen': isOpen}">
    <div @click="setSelected(item.key)">{{ item.text }}</div>
    <template v-if="item.children">
      <template v-for="child in item.children" :key="child.key">
        <ExpansionPanel
          v-show="isOpen"
          :item="child"
          :index="index+1"
        >
        </ExpansionPanel>
      </template>
    </template>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: "ExpansionPanel",

  props: {
    item: {
      type: Object,
      default: function () {
        return {};
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapState([
      'selectedPanel',
    ]),
  },

  watch: {
    selectedPanel: {
      handler: function (val) {
        if (val.indexOf(this.item.key)!=-1) {
          this.isOpen = true
        } else {
          this.isOpen = false
        }
      },
      deep: true,
      immediate: true,
    },
  },

  methods: {
    ...mapMutations({
      setSelectedPanel: 'setSelectedPanel',
    }),
    setSelected(){
      let data = {
        key: this.item.key,
        index: this.index
      }
      this.setSelectedPanel(data)
    }
  },

  // mounted() {
  //   console.log(this.item.text)
  // },
};
</script>

<style lang="sass" scoped>
.title
  color: white
  padding-left: 10px
  &.isOpen
    background-color: grey
    color: #fcb715
</style>
