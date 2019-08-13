export default {
  name: "Popup",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods:{
    close(val){
      this.$emit("close",val);
    }
  }
}
