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
    index: {
      type: [Number, String],
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
    //text
    print(val) {
      this.showNumBoard = false;
      this.input(val, "print");
    },
    closeNumBoard() {
      if (this.type == "text" && this.detail == "string") {
        this.$emit("closeNumBoard");
      }
    },
    input(val, flag) {
      if (this.canChange) {
        switch (this.type) {
          case "text": {
            if (this.detail == "number" || this.detail == "numberWithPoint") {
              this.$emit("openNumBoard");
            }
            else if (flag == "print") {
              this.$emit("change", typeof (val) == "object" ? "" : val, this.index);
            }
            break;
          }

        }
      }
    },
    //check
    openPicker(){
      console.log("openPicker")
      this.$emit("openPicker");
    }
  }
}
