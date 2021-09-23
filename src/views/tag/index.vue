<template>
  <div id="Tag">
    <div class="top">
      <span>明明记账</span>
    </div>
    <div class="option">
      <div class="baseTag" @click="pushTag">添加标签</div>
      <div class="baseTag" @click="delTag" v-show="false">{{title}}</div>
    </div>
    <TagListItem v-for="(item, index) in $store.state.tagInfo" :Index="index" :key="index">
      <img slot="img" :src="item.img" alt="" />
      <span slot="title">{{ item.title }}</span>
    </TagListItem>
    <div class="inputInfo">
      <InputTagInfo :isShow="isShow"></InputTagInfo>
    </div>
  </div>
</template>

<script>
import TagListItem from "./child/TagListItem.vue";
import InputTagInfo from './child/InputTagInfo.vue';

export default {
  name: "Tag",
  components: {
    TagListItem,
    InputTagInfo
  },
  data(){
    return {
      isShow: false,
      showTitle: true
    }
  },
  methods: {
    pushTag(){
      this.isShow = true
    },
    delTag(){
      this.showTitle = !this.showTitle;
    }
  },
  computed: {
    title(){
      return this.showTitle == true ? '管理标签': '完成'
    }
  },
  created(){
    this.$bus.$on('cansTagView', ()=> {
      this.isShow = false
    })
  }
};
</script>

<style>
#Tag {
  padding: 10px 10px;
}
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
.top {
  width: 100%;
  height: 70px;
  border-radius: 18px;
  padding: 5px 5px;
  box-shadow: 0 3px 3px rgba(100, 100, 100, 0.15);
  text-align: center;
  line-height: 63px;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.781);
  background-color: rgba(255, 208, 0, 0.897);
}
</style>