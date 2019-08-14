export default {
  name: "Popup",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      flag:false,
      close_data: 0
    }
  },
  watch:{
    show(now,old){
      this.flag=now;
    },
    flag(now,old){
      if(!now){
        this.$emit("close",this.close_data);
      }
      else{
        this.close_data = 0;
      }
    }
  },
  methods:{
    close(val){
      this.flag = false;
      this.close_data = val;
    }
  }
}
