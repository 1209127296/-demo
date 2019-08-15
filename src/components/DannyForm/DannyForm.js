export default {
  name: "Header",
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  data(){
    return{
      show:true,  //传过来的值是不是Array；
      tips:"进入组件的数据有误",
      numBoardData:"",
      showNumBoard:false,
      flag:[],  //临时深拷贝的list传到父组件修改
    }
  },
  mounted(){
    this.flag = this.$deepCopy(this.list);
    let length = this.flag.length;
    for(let i=0;i<length;i++){
      console.log(111)
      if(this.flag[i].type == "number"&&this.flag[i].defaultVal!=""&&typeof(this.flag[i].defaultVal)!='undefined'){
        console.log(1111)
        this.flag[i].defaultVal = this.flag[i].defaultVal.toString();
      }
    }
    console.log(this.flag)
  },
  watch:{
    list(now,old){
      if(Array.isArray(now)){
        this.show = true;
      }
      else{
        this.show = false;
      }
    },
    flag(now,old){
      if(!window.compair(now,old)){
        this.$emit("change",now);
      }
    }
  },
  methods:{
    openNumBoard(index){
      this.numBoardData = this.flag[index].default;
      this.showNumBoard = true;
    }
  }
}
