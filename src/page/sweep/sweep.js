export default {
  name: "sweep",
  data(){
    return{
      show:false
    }
  },
  methods:{
    rightClick(){
      this.show = !this.show;
    },
    closePopup(is_complete){
      this.show = false;
      console.log(is_complete);
      if(is_complete){
        //do somethig while you click button of '确定' 
      }
      else{
        //do something while you click button of '取消'
      }
    }
  }
}
