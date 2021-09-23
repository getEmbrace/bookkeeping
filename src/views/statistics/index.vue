<template>
  <div id="statistics">
    <Topbar
      @date_click="date_click"
      @income_click="income_click"
      @expend_click="expend_click"
      :year="year"
      :month="month"
      :number_e="number_e"
      :number_r="number_r"
    ></Topbar>
    <div class="list">
      <InfoList :getDataList="getDataList"></InfoList>
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
import Topbar from './child/Topbar.vue'
import InfoList from './child/InfoList.vue'
import SelectDate from "components/tabbar/SelectDate.vue";
export default {
  name: 'Statistics',
  components: {
    Topbar,
    InfoList,
    SelectDate
  },
  data(){
    return {
      isShowSD: false,
      year: "",
      month: "",
      day: "",
      dateInfo: "",
      today: "",
      isIncome: true
    }
  },
  methods: {
    cansClick(){
      this.isShowSD = false;
    },
    okClick(dateInfo){
      this.year = dateInfo[0];
      this.month = dateInfo[1];
      this.day = dateInfo[2];
      this.dateInfo = dateInfo.join('-');
    },
    date_click(){
      this.isShowSD = !this.isShowSD;
    },
    get_yearMouth(date){
      let dateList = date.split('-', 3).slice(0, 2);
      return dateList.join('-')
    },
    income_click(){
      this.isIncome = true;
    },
    expend_click(){
      this.isIncome = false;
    },
    getDataList_s(){
      let dataList = this.$store.state.dataInfoList;
      let data_today = []
      let dataList_0 = []
      let dataList_1 = []
      dataList.forEach(element => {
        if(this.get_yearMouth(element.date) == this.get_yearMouth(this.dateInfo)){
          data_today.push(element)
        }
      });
      data_today.forEach(element => {
        if(element.type == "收入"){
          dataList_0.push(element)
        }else{
          dataList_1.push(element)
        }
      });
      return [dataList_0, dataList_1]
    }
  },
  computed: {
    getDataList(){
      return this.isIncome == true? this.getDataList_s()[0]: this.getDataList_s()[1]
    },
    //总计支出
    number_e(){
      let money = 0
      this.getDataList_s()[1].forEach(item => {
        money += Number(item.money)
      })
      return String(money)
    },
    //总计收入
    number_r(){
      let money = 0
      this.getDataList_s()[0].forEach(item => {
        money += Number(item.money)
      })
      return String(money)
    },
  },
  created() {
    let date = new Date();
    let date_list = [date.getFullYear(), date.getMonth(), date.getDate()];
    this.year = String(date_list[0]);
    this.month = String(date_list[1]);
    this.day = String(date_list[2]);
    this.today = date_list.join("-");
    this.dateInfo = date_list.join("-");
  },
}
</script>

<style>
  #statistics {
    padding: 15px 10px;
  }
  .list {
    width: 100%;
    height: calc(100vh - 144px);
    overflow: auto;
  }
</style>