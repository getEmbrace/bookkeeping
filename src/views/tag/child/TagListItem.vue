<template>
  <div class="listItem">
    <div class="img">
      <slot name="img"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="del" @click="delTag()">
      <span>X</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    Index: {
      type: Number,
      defalut: null
    }
  },
  methods: {
    delTag(){
      this.$store.commit('delItem_TagInfo', this.Index)
    }
  }
}
</script>

<style>
  .listItem {
    display: flex;
    width: 100%;
    height: 60px;
    margin-top: 11px;
    border-radius: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.253);
    box-shadow: 0 3px 3px rgba(100, 100, 100, 0.15);
    background-color: rgba(236, 228, 228, 0.247);
  }
  .listItem .img{
    width: 60px;
    height: 60px;
    margin-left: 30px;
    border-radius: 50%;
    background-color: #fff;
  }
  .listItem .img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .listItem .title {
    flex: 1;
    text-align: center;
    line-height: 60px;
    
  }
  .listItem .del {
    width: 30px;
    text-align: center;
    line-height: 60px
  }
</style>