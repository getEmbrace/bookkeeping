<template>
  <div class="tagViewItem" @click="tagClick">
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
      this.$emit('itemClick', this.Index)
    },
  },
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
  margin-right: 5px;
  width: 77px;
  height: 35px;
  padding: 5px;
  border-radius: 50px;
  font-size: 13px;
  color: black;
  border: 1px solid black;
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