import { createStore } from "vuex";

export default createStore({
  state: {
    NavbarValue: "P",
    component: "Tsport",
    TitleMenufront: "ราคาต่อรอง ",
    TitleMenuback : "& สูงต่ำ",
    // count: 'Tsport',
  },
  getters: {
    // getNavbar(state){
    //   return state.NavbarValue
    // }
    getCount(state) {
      return state.count;
    },
    getcomponent(state) {
      return state.component;
    },
    getTitleMenufront(state) {
      return state.TitleMenufront;
    },
    getTitleMenuback(state) {
      return state.TitleMenuback;
    },
  },
  mutations: {
    // setNavbar(state,value){
    //   state.NavbarValue = value
    // }

    add(state, value) {
      state.component = value;
    },

    aTitleMenufront(state, value) {
      state.TitleMenufront = value;
    },

    aTitleMenuback(state, value) {
      state.TitleMenuback = value;
    },
  },
  actions: {
    // NavbarActive(context){
    //   context.commit('setNavbar', this.getters.getNavbar)
    // }

    addAction(context, itemMenu) {
      switch (itemMenu) {
        case "Tsport":
          context.commit("add", itemMenu);
          context.commit("aTitleMenufront", "ราคาต่อรอง");
          context.commit("aTitleMenuback", "& สูงต่ำ");
          break;
        case "Tgoal":
          context.commit("add", itemMenu);
          context.commit("aTitleMenufront", "คู่/คี่ ");
          context.commit("aTitleMenuback", "& ประตูรวม");
          break;
        case "Tcorner":
          context.commit("add", itemMenu);
          context.commit("aTitleMenufront", "1X2 ");
          context.commit("aTitleMenuback", "& สองโอกาส");
          break;
        case "Tscore":
          context.commit("add", itemMenu);
          context.commit("aTitleMenufront", "ครึ่งเวลา ");
          context.commit("aTitleMenuback", "& เต็มเวลา");
          break;
        case "TScore":
          context.commit("add", itemMenu);
          context.commit("aTitleMenufront", "ทายผล");
          context.commit("aTitleMenuback", "สกอร์");
          break;
        case "Twin":
          context.commit("add", itemMenu);
          context.commit("aTitleMenufront", "ทายผล");
          context.commit("aTitleMenuback", "ผู้ชนะ");
          break;
        default:
        // code block
      }
    },    
  },
  modules: {},
});
