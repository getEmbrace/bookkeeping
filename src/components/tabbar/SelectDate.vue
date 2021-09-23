<template>
  <div class="selectDate">
    <div class="banner">
      <div class="left" @click="cansClick">
        <span>取消</span>
      </div>
      <div class="center">
        <span>选择日期</span>
      </div>
      <div class="right" @click="okClick">
        <span>确定</span>
      </div>
    </div>
    <div class="inputDateInfo">
      <div class="year">
        <input type="text" id="year" v-model="year_s">
        <label for="year">年</label>
      </div>
      <div class="month">
        <input type="text" id="month"  v-model="mouth_s">
        <label for="month">月</label>
      </div>
      <div class="day">
        <input type="text" id="day" v-model="day_s">
        <label for="day">日</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectDate",
  props: {
    year: {
      type: String,
      default: null
    },
    month: {
      type: String,
      default: null
    },
    day: {
      type: String,
      default: null
    },
  },
  data(){
    return {
      year_s: '',
      mouth_s: '',
      day_s: ''
    }
  },
  methods: {
    cansClick(){
      this.$emit('cansClick')
    },
    okClick(){
      this.$emit('okClick', [this.year_s, this.mouth_s, this.day_s])
      this.$emit('cansClick')
    }
  },
  created(){
    this.year_s = this.year;
    this.mouth_s = this.month;
    this.day_s = this.day;
  }
}
</script>

<style>
.selectDate {
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  width: 90%;
  height: 300px;
  border-radius: 30px;
  background-color: rgba(253, 250, 250, 0.932);
}
.banner {
  position: relative;
  width: 100%;
  height: 30px;
  border-radius: 30px;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.397);
}
.banner .left {
  float: left;
  margin-left: 13px;
  line-height: 35px;
  color: black;
  font-size: 18px;
}
.banner .center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  line-height: 33px;
  color: black;
  font-size: 20px;
}
.banner .right {
  float: right;
  line-height: 35px;
  margin-right: 13px;
  color: black;
  font-size: 18px;
}
.inputDateInfo {
  position: relative;
  width: 100%;
  height: 60px;
  margin-top: 70px;
  padding: 0 20px;
}
.inputDateInfo .year {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: black;
}
.inputDateInfo label {
  font-size: 20px;
}
.inputDateInfo input{
  width: 65px;
  padding-left: 5px;
  border: 0;
  outline: none;
  font-size: 18px;
  text-align: center;
  background-color: rgba(253, 250, 250, 0.719);
  border-bottom: 1px solid black;
}
.inputDateInfo .month {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}
.inputDateInfo .day {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: black;
}
</style>