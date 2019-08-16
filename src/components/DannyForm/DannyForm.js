export default {
  name: "Header",
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      show: true,  //传过来的值是不是Array；
      tips: "进入组件的数据有误",
      numBoardData: "",//浅拷贝实现同时改变
      showNumBoard: false,
      flag: [],  //临时深拷贝的list传到父组件修改
      nowIndex: 0
    }
  },
  mounted() {
    this.flag = this.$deepCopy(this.list);
    let length = this.flag.length;
    for (let i = 0; i < length; i++) {
      if (this.flag[i].defaultVal != "" && typeof (this.flag[i].defaultVal) != 'undefined') {
        if (this.flag[i].type == "number" || this.flag[i].type == "numberWithPoint") {
          this.flag[i].defaultVal = this.flag[i].defaultVal.toString();
        }
      }
    }
  },
  watch: {
    list(now, old) {
      if (Array.isArray(now)) {
        this.show = true;
      }
      else {
        this.show = false;
      }
    },
    flag(now, old) {
      if (!window.compair(now, this.list)) {
        if (window.compair(now, old)) {
          //防止调用组件change事件中浅拷贝导致与flag绑定
          this.$emit("change", old);
        }
        else {
          this.$emit("change", now);
        }
      }
    }
  },
  methods: {
    //深拷贝以修改指针执行watch
    changePoint() {
      //深拷贝以执行watch
      this.flag = this.$deepCopy(this.flag);
      //numBoard继续绑定flag[index]
      this.numBoardData = this.flag[this.nowIndex];
    },
    openNumBoard(index) {
      this.numBoardData = this.flag[index];
      this.nowIndex = index;
      this.showNumBoard = true;
    },
    numInput(val) {
      this.numBoardData.defaultVal = `${this.numBoardData.defaultVal}${val}`
      this.changePoint();
    },
    numDelete() {
      this.numBoardData.defaultVal = this.numBoardData.defaultVal.substring(0, this.numBoardData.defaultVal.length - 1);
      this.changePoint();
    }
  }
}
