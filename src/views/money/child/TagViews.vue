<template>
  <div>
    <div class="option">
      <div class="baseTag" @click="pushTag">添加标签</div>
      <div class="baseTag" @click="delTag">{{title}}</div>
    </div>
    <div class="selectTag">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagViews",
  data(){
    return{
      showTitle: true
    }
  },
  computed: {
    title(){
      return this.showTitle == true ? '管理标签': '完成'
    }
  },
  methods: {
    pushTag(){
      this.$bus.$emit('pushTag')
    },
    delTag(){
      this.showTitle = !this.showTitle
      this.$bus.$emit('delTag')
    }
  }
};
</script>

<style>
.option div {
  float: left;
}
.option .baseTag {
  margin-top: 25px;
  margin-right: 5px;
  margin-bottom: 5px;
  width: 80px;
  padding: 5px;
  text-align: center;
  border-radius: 50px;
  font-size: 13px;
  color: rgba(0, 140, 255, 0.856);
  border: 1px solid rgba(0, 140, 255, 0.856);
}
.selectTag {
  clear: both;
}
</style>