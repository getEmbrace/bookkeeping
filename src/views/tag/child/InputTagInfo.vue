<template>
  <div id="inputInfo" v-if="isShow">
    <div class="input_img input">
      <label for="imgSrc">标签图片:</label>
      <div class="mask">
        <span>{{imgPath}}</span>
        <input type="file" id="imgSrc" @change="getImg()" ref="img" />
      </div>
    </div>
    <div class="input_title input">
      <label for="title">标签标题:</label>
      <input type="text" id="title" v-model="title" />
    </div>
    <button class="ok" @click="click_ok">确认</button>
    <button class="cans" @click="click_cans">取消</button>
  </div>
</template>

<script>
export default {
  name: "InputTagInfo",
  data() {
    return {
      imgPath: "",
      imgSrc: "",
      title: "",
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click_ok() {
      this.$store.commit("pushItem_TagInfo", {
        img: this.imgSrc,
        title: this.title,
      });
      this.click_cans();
    },
    click_cans() {
      this.imgSrc = "";
      this.imgPath = "";
      this.title = "";
      this.$bus.$emit("cansTagView");
    },
    getImg() {
      let _this = this;
      let file = this.$refs.img.files[0];
      this.imgPath = file.name;
      let reader = new FileReader();
      reader.onload = function (evt) {
        _this.imgSrc = evt.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style>
#inputInfo {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 40%;
  width: 90%;
  text-align: center;
  border-radius: 30px;
  border: 1px solid rgba(0, 140, 255, 0.856);
  background-color: #fff;
}
#inputInfo .input {
  margin-top: 20px;
}
#inputInfo #imgSrc {
  position:absolute;
  width: 100%;
  background-color: #fff;
  opacity: 0;
  z-index: 10;
}
#inputInfo .mask {
  display: inline-block;
  position: relative;
  top: 7px;
  text-align: left;
  padding-left: 5px;
  width: 60%;
  height: 20px;
  border: 0;
  border-bottom: 1px solid rgba(0, 140, 255, 0.856);
}
#inputInfo .mask span {
  position:absolute;
  z-index: 9;
}
#inputInfo .input input {
  height: 25px;
  width: 60%;
  padding-left: 5px;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgba(0, 140, 255, 0.856);
}
#inputInfo button {
  margin: 30px 15px 0 15px;
  width: 80px;
  height: 40px;
  border: 0;
  border-radius: 20px;
  background-color: rgba(240, 238, 238, 0.842);
  color: rgba(0, 140, 255, 0.74);
}
</style>