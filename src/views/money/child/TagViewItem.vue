<template>
  <div class="tagViewItem" @click="tagClick">
    <div class="del" v-if="showDel" @click="delTag">
      <span>x</span>
    </div>
    <div class="img">
      <slot name="img"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagViewItem",
  data(){
    return {
      showDel: false,
    }
  },
  props: {
    Index: {
      type: Number,
      default: null
    }
  },
  methods: {
    tagClick(){
      if(this.showDel){
        this.$emit('resetActive')
        return
      }
      this.$emit('itemClick', this.Index)
    },
    delTag(){
      this.$store.commit('delItem_TagInfo', this.Index)
    }
  },
  created(){
    this.$bus.$on('delTag', () => {
      this.showDel = !this.showDel
    })
    this.$bus.$on('resetTagStatus', () => {
      this.showDel = false
    })
  }
};
</script>

<style>
.default {
  border: 1px solid black;
}
.tagViewItem {
  float: left;
  position: relative;
  display: flex;
  margin-top: 10px;
  margin-right: 8px;
  width: 77px;
  height: 35px;
  padding: 5px;
  border-radius: 50px;
  font-size: 13px;
  color: black;
  border: 1px solid black;
}
.tagViewItem .del {
  position: absolute;
  width: 18px;
  height: 18px;
  top: -15px;
  left: 65px;
  text-align: center;
  line-height: 70%;
  font-size: 18px;
  border: 1px solid deepskyblue;
  border-radius: 50%;
}
.tagViewItem .img {
  text-align: center;
  width: 40%;
  height: 30px;
  border-radius: 50%;
}
.tagViewItem .img img {
  margin-top: -2px;
  width: 30px;
  height: 100%;
  border-radius: 50%;
}
.tagViewItem .title {
  flex: 1;
  text-align: center;
  margin-top: 5%;
}

</style>