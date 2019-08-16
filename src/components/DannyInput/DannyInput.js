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
    input() {
      if(this.canChange){
        switch (this.type) {
          case "text":{
            if(this.detail == "number" || this.detail == "numberWithPoint"){
              this.$emit("openNumBoard");
            }
            break;
          }
            
        }
      }
      
    }
  }
}
