import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagInfo: [
      { img: "/assets/img/tagImg/yifu.png", title: '衣' },
      { img: "~assets/img/tagImg/shipin.png", title: '食' },
      { img: "~assets/img/tagImg/zhusu.png", title: '住' },
      { img: "~assets/img/tagImg/hangli.png", title: '行' },
    ],
    dataInfo: {
      type: "",
      money: 0,
      remarks: "",
      tag: "",
      tagImg: "",
      date: ""
    },
    dataInfoList: []
  },
  mutations: {
    pushItem_TagInfo(state, payload) {
      state.tagInfo.push(payload)
    },
    delItem_TagInfo(state, payload) {
      state.tagInfo.splice(payload, 1)
    },
    setDataInfo_type(state, payload) {
      state.dataInfo.type = payload;
    },
    setDataInfo_money(state, payload) {
      state.dataInfo.money = payload;
    },
    setDataInfo_remarks(state, payload) {
      state.dataInfo.remarks = payload;
    },
    setDataInfo_tag(state, payload) {
      state.dataInfo.tag = state.tagInfo[payload].title;
      state.dataInfo.tagImg = state.tagInfo[payload].img;
    },
    setDataInfo_date(state, payload) {
      state.dataInfo.date = payload;
    },
    pushItem_dataInfoList(state) {
      if (state.dataInfo.money !== 0 && state.dataInfo.tag !== "") {
        state.dataInfoList.push(state.dataInfo);
        state.dataInfo = {
          type: "", 
          money: 0,
          remarks: "",
          tag: "",
          tagImg: "",
          date: ""
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
