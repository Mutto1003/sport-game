import { createStore } from 'vuex'

export default createStore({
  state: {
    NavbarValue:"P"
  },
  getters: {
    // getNavbar(state){
    //   return state.NavbarValue
    // }
  },
  mutations: {
    // setNavbar(state,value){
    //   state.NavbarValue = value
    // }
  },
  actions: {
    // NavbarActive(context){
    //   context.commit('setNavbar', this.getters.getNavbar)
    // }
  },
  modules: {
  }
})
