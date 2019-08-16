export default {
  name: "date",
  data() {
    return {
      demo:{
        type:"number",//类型[text,file,check]
        detail:"withPoint",//对类型的解释，如带小数点的number类型text:[string,number,numberWithPoint],file:[image,''],checked:[1,2,3,4...]数字即可
        defaultVal:"默认值",
        canChange: true, // 能否修改
        privates:{  //各种表单含的值都不一样，置于该对象中
          list:[], //选项
          title:"标题||label",
          placeholder:"请输入哈哈哈",
          maxLength:15
        }
      },
      list: [
        {
          type: "text",
          detail:"number",
          defaultVal: "",
          canChange: true,
          privates:{
            title:"数字",
            placeholder:"请输入账号",
            list: [],
            maxLength:15
          }
        },
        {
          type: "text",
          detail:"numberWithPoint",
          defaultVal: "",
          canChange: true,
          privates:{
            title:"含.数字",
            placeholder:"请输入密码",
            list: [],
            maxLength:15
          }
        },
      ]
    }
  },
  watch: {

  },
  methods: {
    rightClick() {
    },
    change(val){
      console.log("最顶部组件值改变")
      this.list = val;
    }
  }
}
