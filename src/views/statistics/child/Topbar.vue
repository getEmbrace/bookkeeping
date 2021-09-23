<template>
  <div class="topbar">
    <div class="date" @click="date_click">
      <div class="year">
        <span>{{ year + "年" }}</span>
      </div>
      <div class="mouth_day">
        <span>{{ month }}</span>
        <span>月</span>
      </div>
    </div>
    <div class="revenue" @click="income_click">
      <div class="type">
        <span>收入</span>
      </div>
      <div class="number" :class="{active_revenue: isRevenue_click}">
        <span>{{number_r_b}}.</span>
        <span>{{number_r_s}}</span>
      </div>
    </div>
    <div class="expend" @click="expend_click">
      <div class="type">
        <span>支出</span>
      </div>
      <div class="number" :class="{active_revenue: !isRevenue_click}">
        <span>{{number_e_b}}.</span>
        <span>{{number_e_s}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  props: {
    year: {
      type: String,
      default: "2021"
    },
    month: {
      type: String,
      default: "1"
    },
    number_r: {
      type: String,
      default: "0.00"
    },
    number_e: {
      type: String,
      default: "0.00"
    },
  },
  data() {
    return {
      isRevenue_click: true
    };
  },
  computed: {
    number_r_b(){
      if(String(this.number_r).split('.', 2).length <= 2){
        return String(this.number_r).split('.', 2)[0];
      }else{
        return "0"
      }
    },
    number_r_s(){
      if(String(this.number_r).split('.', 2).length < 2){
        return "00"
      }else if(String(this.number_r).split('.', 2).length = 2){
        return String(this.number_r).split('.', 2)[1];
      }else{
        return "00"
      }
    },
    number_e_b(){
      if(String(this.number_e).split('.', 2).length <= 2){
        return String(this.number_e).split('.', 2)[0];
      }else{
        return "0"
      }
    },
    number_e_s(){
      if(String(this.number_e).split('.', 2).length < 2){
        return "00"
      }else if(String(this.number_e).split('.', 2).length = 2){
        return String(this.number_e).split('.', 2)[1];
      }else{
        return "00"
      }
    },
  },
  methods: {
    date_click(){
      this.$emit("date_click")
    },
    income_click(){
      this.isRevenue_click = true
      this.$emit("income_click")
    },
    expend_click(){
      this.isRevenue_click = false
      this.$emit("expend_click")
    }
  }
};
</script>

<style>
.topbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border-radius: 15px;
  padding: 5px 5px;
  background-color: rgba(255, 208, 0, 0.897);
}
.date {
  width: 23%;
  min-width: 78px;
  height: 100%;
}
.date::after {
  content: "";
  display: block;
  position: relative;
  top: -50%;
  right: -105%;
  width: 0;
  height: 30px;
  border-left: 1px solid rgba(0, 0, 0, 0.336);
}
.date .year {
  margin: 5px 0;
}
.date .mouth_day {
  color: black;
}
.date .mouth_day::after {
  content: "";
  display: inline-block;
  height: 0;
  width: 0;
  margin-left: 5px;
  border-top: 10px solid #000;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
.date .mouth_day span:nth-child(1) {
  font-size: 32px;
}
.revenue {
  flex: 1;
  width: 30%;
  height: 100%;
  padding-left: 20px;
  padding-right: 10px;
}
.revenue .type {
  margin: 5px 15px;
  text-align: center;
}
.revenue .number {
  margin: 15px 15px 0 15px;
  font-size: 18px;
  color: black;
  text-align: center;
}
.revenue .number span:nth-child(1){
  font-size: 25px;
}
.expend {
  width: 100px;
  height: 100%;
  margin-right: 25px;
}
.expend .type {
  margin: 5px 15px;
  text-align: center;
}
.expend .number {
  margin: 15px 15px 0 15px;
  font-size: 18px;
  color: black;
  text-align: center;
}
.expend .number span:nth-child(1){
  font-size: 25px;
}
.active_revenue {
  border-bottom: 3px solid rgba(0, 0, 0, 0.589);
  border-radius: 2px;
}
</style>