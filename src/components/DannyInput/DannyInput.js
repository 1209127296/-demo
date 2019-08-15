export default {
  name: "Header",
  props: {
    type: {
      type: String,
      default: "input",
    },
    defaultVal: {
      type: [String,Array,Object,Number],
      default: "默认值",
    },
    list: {
      type: Array,
      default: [],
    },
    index: {
      type: Number,
      default: 0,
    },
    privates: {
      type: Object,
      default: {}
    },
  },
  data(){
    return{
      showNumBoard: false,
      valNumBoard: ""
    }
  },
 methods:{
   input(){
     switch(this.type){
       case "number" :
         this.$emit("openNumBoard");
         break;
     }
   }
 }
}
