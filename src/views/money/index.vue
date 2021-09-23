<template>
  <div id="money">
    <div class="bg">
      <img src="~assets/img/bg.png" alt="" />
    </div>
    <div class="topInput">
      <div class="select" @click="item_click">
        {{ getType }}
        <span>></span>
      </div>
      <input type="text" class="number" v-model="moneyNum" placeholder="0"/>
    </div>
    <div class="remarks">
      <label for="备注：">备注：</label>
      <input type="text" class="remarks_info" v-model="remarks_info" />
    </div>
    <div class="selectTag">
      <MainTagView></MainTagView>
    </div>
    <div class="date1">
      <TagViewItem v-if="isChange" :Index="0" @itemClick="itemClick($event)">
        <img slot="img" src="~assets/img/tagImg/riqi.png" alt="" />
        <span slot="title">今天</span>
      </TagViewItem>
      <div v-else class="date_tag" @click="itemClick">
        {{dateInfo}}
      </div>
    </div>
    <div class="addRecord" @click="addRecord" :class="{changeClass: !isChange}">
      <span>提交</span>
    </div>
    <SelectDate
      v-if="isShowSD"
      @cansClick="cansClick"
      @okClick="okClick($event)"
      :year="year"
      :month="month"
      :day="day"
    ></SelectDate>
  </div>
</template>

<script>
import MainTagView from "./child/MainTagView.vue";
import TagViewItem from "./child/TagViewItem.vue";
import SelectDate from "components/tabbar/SelectDate.vue";

export default {
  name: "topInput",
  data() {
    return {
      moneyType: true,
      moneyNum: "",
      remarks_info: "",
      year: "",
      month: "",
      day: "",
      dateInfo: "",
      today: "",
      isShowSD: false,
    };
  },
  components: {
    MainTagView,
    TagViewItem,
    SelectDate,
  },
  watch: {
    moneyNum() {
      this.$store.commit("setDataInfo_money", this.moneyNum);
    },
    remarks_info() {
      this.$store.commit("setDataInfo_remarks", this.remarks_info);
    },
  },
  computed: {
    getType() {
      let result = this.moneyType == true ? "支出" : "收入";
      this.$store.commit("setDataInfo_type", result);
      return result;
    },
    isChange() {
      return this.dateInfo == this.today;
    },
  },
  methods: {
    item_click() {
      this.moneyType = !this.moneyType;
    },
    itemClick() {
      this.isShowSD = !this.isShowSD;
    },
    cansClick(){
      this.isShowSD = false;
    },
    okClick(dateInfo){
      this.dateInfo = dateInfo.join('-');
      this.year = dateInfo[0];
      this.month = dateInfo[1];
      this.day = dateInfo[2];
    },
    addRecord(){
      this.$store.commit('setDataInfo_date', this.dateInfo);
      this.moneyNum = "";
      this.dateInfo = this.today;
      this.remarks_info = ""
      this.$store.commit('pushItem_dataInfoList');
    }
  },
  created() {
    let date = new Date();
    let date_list = [date.getFullYear(), date.getMonth(), date.getDate()];
    this.year = date_list[0];
    this.month = date_list[1];
    this.day = date_list[2];
    this.today = date_list.join("-");
    this.dateInfo = date_list.join("-");
  },
};
</script>

<style>
.bg {
  position: absolute;
  z-index: -999;
}
.bg img {
  display: block;
  width: 95vw;
  height: 95vh;
}
#money {
  padding: 20px 15px 0px 15px;
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
  background-color: rgba(255, 208, 0, 0.897);
  color: black;
}
.topInput .select span {
  font-weight: 800;
}
.topInput .number {
  flex: 1;
  margin-left: 5px;
  padding-right: 20px;
  width: 0;
  height: 45px;
  border: 0px;
  outline: none;
  border-radius: 10px;
  text-align: right;
  font-size: 20px;
  background-color: rgba(223, 217, 217, 0.616);
}
.remarks {
  display: flex;
  margin-top: 30px;
  margin-bottom: 20px;
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
.selectTag {
  width: 100%;
  height: 130px;
  overflow: auto;
}
.date1 {
  float: left;
  width: 77px;
  height: 35px;
}
.date_tag {
  float: left;
  width: 100px;
  height: 35px;
  margin-top: 10px;
  text-align: center;
  line-height: 35px;
  border: 1px solid rgba(255, 208, 0, 0.897);
  border-radius: 50px;
}
.addRecord {
  float: left;
  width: 80px;
  height: 35px;
  color: black;
  margin-top: 10px;
  margin-left: 10px;
  text-align: center;
  line-height: 35px;
  border: 1px solid black;
  border-radius: 35px;
}
.changeClass {
  margin-left: 30px;
}
</style>