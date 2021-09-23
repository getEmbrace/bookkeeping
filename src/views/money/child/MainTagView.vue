<template>
  <div>
    <TagViewItem
      v-for="(itemInfo, index) in $store.state.tagInfo"
      :Index="index"
      @itemClick="itemClick($event)"
      @resetActive="resetActive()"
      :key="index"
      :class="{active: index === activeIndex}"
    >
      <img slot="img" :src="itemInfo.img" alt="" />
      <span slot="title">{{ itemInfo.title }}</span>
    </TagViewItem>
  </div>
</template>

<script>
import TagViewItem from "./TagViewItem.vue";
export default {
  name: "MainTagView",
  components: {
    TagViewItem,
  },
  data() {
    return {
      activeIndex: null
    };
  },
  methods: {
    itemClick(a_Index){
      this.$store.commit('setDataInfo_tag', a_Index)
      this.activeIndex = a_Index;
    },
    resetActive(){
      this.activeIndex = 'none';
    }
  }
};
</script>

<style>
.active {
  border-color: rgba(255, 208, 0, 0.897);
  color: black;
}
</style>