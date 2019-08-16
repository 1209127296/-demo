export default {
  name: "Header",
  props: {
    type: {
      type: String,
      default: "input",
    },
    defaultVal: {
      type: [String, Array, Object, Number],
      default: "默认值",
    },
    index:{
      type:[Number,String],
      default: 0
    },
    detail: {
      type: String,
      default: ""
    },
    canChange: {
      type: Boolean,
      default: true,
    },
    privates: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      showNumBoard: false,
      valNumBoard: ""
    }
  },
  methods: {
    print(val){
      this.input(val,"print");
    },
    input(val,flag) {
      if(this.canChange){
        switch (this.type) {
          case "text":{
            if(this.detail == "number" || this.detail == "numberWithPoint"){
              this.$emit("openNumBoard");
            }
            else if(flag=="print"){
              this.$emit("change",typeof(val)=="object"?"":val,this.index);
            }
            break;
          }
            
        }
      }
      
    }
  }
}
