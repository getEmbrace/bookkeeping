<template>
  <div id="money">
    <div class="bg">
      <img src="~assets/img/背景.png" alt="">
    </div>
    <div class="topInput">
      <div class="select" @click="item_click">
        {{ getType }}
        <span>></span>
      </div>
      <input type="text" class="number" v-model="moneyNum"/>
    </div>
    <div class="remarks">
      <label for="备注：">备注：</label>
      <input type="text" class="remarks_info" v-model="remarks_info"/>
    </div>
    <div class="selectTag">
      <MainTagView></MainTagView>
    </div>
    <div class="inputInfo">
      <InputTagInfo :isShow="isShow"></InputTagInfo>
    </div>
  </div>
</template>

<script>
import MainTagView from './child/MainTagView.vue'
import InputTagInfo from './child/InputTagInfo.vue'
export default {
  name: "topInput",
  data() {
    return {
      moneyType: true,
      isShow: false,
      moneyNum: 0,
      remarks_info: ""
    };
  },
  components: {
    MainTagView,
    InputTagInfo
  },
  watch: {
    moneyNum(){
      this.$store.commit('setDataInfo_money', this.moneyNum);
    },
    remarks_info(){
      this.$store.commit('setDataInfo_remarks', this.remarks_info);
    }
  },
  computed: {
    getType() {
      let result = this.moneyType == true ? "支出" : "收入";
      this.$store.commit('setDataInfo_type', result)
      return result
    },
  },
  methods: {
    item_click() {
      this.moneyType = !this.moneyType;
    },
  },
  created(){
    this.$bus.$on('pushTag', ()=> {
      this.$bus.$emit('resetTagStatus')
      this.isShow = true
    })
    this.$bus.$on('cansTagView', ()=> {
      this.isShow = false
    })
  }
};
</script>

<style>
.bg {
  position: absolute;
  z-index: -999;
}
.bg img {
  width: 100%;
  height: 100%;
}
#money {
    padding: 20px 15px 0 15px;
  }
.topInput {
  display: flex;
}
.topInput .select {
  display: inline-block;
  width: 25%;
  min-width: 65px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  border-radius: 10px;
  font-weight: 600;
  background-color: rgb(247, 223, 12);
  color: black;
}
.topInput .select span {
  font-weight: 800;
}
.topInput .number {
  flex: 1;
  margin-left: 5px;
  height: 45px;
  border: 0px;
  padding-right: 20px;
  border-radius: 10px;
  text-align: right;
  font-size: 20px;
  background-color: rgba(223, 217, 217, 0.616);
}
.remarks {
  display: flex;
  margin-top: 30px;
}
.remarks .remarks_info {
  flex: 1;
  border: 0;
  outline: none;
  padding-left: 5px;
  color: rgba(0, 0, 0, 0.479);
  border-bottom: 1px solid rgba(0, 0, 0, 0.308);
  margin-left: 10px;
}
</style>