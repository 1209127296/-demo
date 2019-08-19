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
      flag: [],  //临时深拷贝的list传到父组件修改
      nowIndex: 0,
      // text
      numBoardData: "",//浅拷贝实现同时改变
      showNumBoard: false,
      // check
      nowPickerData: {},
      showPicker: false,
      pickList: {},
      columns: [
        {
          values: [],
          className: 'column1',
          defaultIndex: 0
        },

      ]
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
      console.log("flag发生改变")
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
    change(val, index) {
      this.numBoardData = this.flag[index];
      this.numBoardData.defaultVal = val
      this.changePoint();
    },
    closeNumBoard() {
      this.showNumBoard = false;
    },
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
    },

    openPicker(index) {
      this.nowPickerData = this.flag[index];
      this.showPicker = true;
      this.nowIndex = index;
      this.getPickListByList();
    },
    getPickListByList(time = 1) {
      //获取key的长度以辨别有几列
      let col = Object.keys(this.nowPickerData.defaultVal)[0]
      let colLen = col.length / 2;
      let flag = this.nowPickerData.privates.list;
      if (colLen >= time) {
        this.columns[time - 1] = new Object();
        this.columns[time - 1].values = new Array();
        for (let key in flag) {
          let [prefix, suffix] = [key.substr(0, time * 2-2), key.substr(time * 2)];     
          if (prefix == col.substr(0, time * 2-2)&&(colLen == time?parseInt(key.substr(time * 2-2))!=0:parseInt(suffix)==0)) {
            this.columns[time - 1].values.push(flag[key])
          }
        }
        if (colLen > time) {
          this.getPickListByList(time + 1);
        }
        else {
          this.updatePickListElse();
          this.updatePickListElseDef();
          console.log(this.columns)
        }
      }
    },
    updatePickListElse() {
      for (let i = 0; i < this.columns.length; i++) {
        this.columns[i].className = `column${i + 1}`;
        this.columns[i].defaultIndex = 0;
      }
    },
    updatePickListElseDef() {
      let flag = this.nowPickerData.privates.list;
      let col = Object.keys(this.nowPickerData.defaultVal)[0]
      let colLen = col.length / 2;
      let value = "";
      for (let i = 1; i <= colLen; i++) {
        value = col.substr(0, i * 2);
        for (let j = i; j < colLen; j++) {
          value += "00"
        }
        value = flag[value];
        //遍历values，找出索引值
        let len = this.columns[i - 1].values.length
        for (let j = 0; j < len; j++) {
          if (this.columns[i - 1].values[j] == value) {
            this.columns[i - 1].defaultIndex = j;
          }
        }
      }
    },
    pickerConfirm(val,isChange){
      console.log(val,isChange)
      let value = val.join("");
      let key = "";
      let flag = this.nowPickerData.privates.list;
      for(let i in flag){
        if(flag[i]==val[val.length-1]){
          key = i;
          break;
        }
      }
      this.nowPickerData.defaultVal={};
      this.nowPickerData.defaultVal[key]=value;
      if(isChange!="true"){
        this.pickerClose();
      }
    },
    pickerClose(){
      this.flag = this.$deepCopy(this.flag);
      this.showPicker = false;
    },
    pickerChange(picker,value){
      // value与defaultVal进行比较
      console.log(value);
      let flag = this.nowPickerData.privates.list;
      let saveKey = [];
      let time = 0;
      for(let i = 0; i<value.length; i++){
        for(let j in flag){         
          if(flag[j]==value[i]){
            saveKey.push(j);
            break;
          }
        }
      }
      // 判断哪一列发生变化
      for(let i=saveKey.length-1; i>0; i++){
        if(saveKey[i].substr(0,i*2)==saveKey[i-1]){
          continue;
        }
        else{
          alert(1111)
          let [key,value]=["",""];
          for(let j=1;j<saveKey.length-i;j++){
            key = saveKey[i].substr(0,i*2)+"01";
            console.log(key);
          }
          if(key == ""){
            key = saveKey[saveKey.length-1]
          }
          for(let j in flag){
            if(j == key){
              value = flag[j];
              break;
            }
          }
          //将value格式化
          this.nowPickerData.defaultVal = {};
          this.nowPickerData.defaultVal[key]=value;

          time = i;
          this.getPickListByList()
          console.log(this.nowPickerData.defaultVal,time)
          break;
        }
      }
      
    }
  }
}
