import { createStore } from "vuex";

export default createStore({
  state: {
    selectedPanel: localStorage.getItem('selectedPanel') !== null ? JSON.parse(localStorage.getItem('selectedPanel')) : [],
  },
  mutations: {
    setSelectedPanel(state, {key, index}){
      let currentSelected = state.selectedPanel
      if (index == 0 || currentSelected.length >= index + 1){
        currentSelected = currentSelected.slice(0, index)
        currentSelected[index] = key
      } else {
        currentSelected.push(key)
      }
      state.selectedPanel = currentSelected
      localStorage.setItem('selectedPanel', JSON.stringify(currentSelected))
    }
  },
  actions: {},
})
