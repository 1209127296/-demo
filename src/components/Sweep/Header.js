export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "",
    },
    can_back:{
      type:Boolean,
      default:true
    }
  },
  methods:{
    backRouter(){
      if(this.can_back){
          this.$router.go(-1);   
      }
    },
  }
}
