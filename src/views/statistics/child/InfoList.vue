<template>
  <div>
    <InfoListItem
      v-for="(item, index) in getDataList"
      :key="index"
    >
      <span slot="dateInfo">{{ item.date }}</span>
      <span slot="info">{{ item.type }}: {{ item.money }}</span>
      <span slot="title">{{
        item.remarks == "" ? item.tag : item.remarks
      }}</span>
      <span slot="number"
        >{{ item.type == "收入" ? "+" : "-" }}{{ item.money }}</span
      >
      <img slot="img" :src="item.tagImg" alt="" />
    </InfoListItem>
    <div class="dataList_default" v-if="getDataList.length == 0">
      <img src="~assets/img/noData.png" alt="">
    </div>
  </div>
</template>

<script>
import InfoListItem from "./InfoListItem.vue";
export default {
  name: "InfoList",
  components: {
    InfoListItem,
  },
  props: {
    getDataList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style>
.dataList_default{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 95vh;
  z-index: -1;
}
.dataList_default img {
  width: 100%;
  height: 100%;
}
</style>