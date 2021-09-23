<template>
  <div class="infoListItem">
    <div class="navbar">
      <div class="date">
        <slot name="dateInfo"></slot>
      </div>
      <div class="info">
        <slot name="info"></slot>
      </div>
    </div>
    <div class="content">
      <div class="img">
        <slot name="img"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="number">
        <slot name="number"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoListItem",
  data(){
    return {
    }
  }
}
</script>

<style>
.infoListItem {
  margin-top: 10px;
}
.navbar {
  display: flex;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.253);
}
.navbar .date {
  width: 50%;
  line-height: 30px;
  font-size: 15px;
}
.navbar .date:after {
  border: 0;
}
.navbar .info {
  flex: 1;
  line-height: 35px;
  text-align: right;
  padding-right: 8px;
}
.content {
  display: flex;
  width: 100%;
  height: 65px;
}
.content .img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: auto 0;
}
.content .img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.content .title {
  flex: 1;
  padding-left: 30px;
  height: 45px;
  margin: auto 0;
  color: black;
  font-size: 18px;
  line-height: 45px;
}
.content .number {
  width: 30%;
  height: 45px;
  margin: auto 0;
  margin-right: 9px;
  color: black;
  font-size: 18px;
  text-align: right;
  line-height: 45px;
}

</style>