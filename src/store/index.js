import { createStore } from "vuex";

export default createStore({
  state: {
    NavbarValue: "P",
    component: 'Tsport',
    // count: 'Tsport',
  },
  getters: {
    // getNavbar(state){
    //   return state.NavbarValue
    // }
    getCount(state){
      return state.count
    },
    getcomponent(state){
      return state.component
    }
  },
  mutations: {
    // setNavbar(state,value){
    //   state.NavbarValue = value
    // }

    add(state, value) {
      state.component = value;
    },
  },
  actions: {
    // NavbarActive(context){
    //   context.commit('setNavbar', this.getters.getNavbar)
    // }

    addAction(context,itemMenu) {
      context.commit("add",itemMenu);
    },    
  },
  modules: {},
});
