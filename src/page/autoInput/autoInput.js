export default {
  name: "date",
  data() {
    return {
      demo:{
        type:"number",//类型[text,file,check]
        detail:"withPoint",//对类型的解释，如带小数点的number类型text:[string,number,numberWithPoint],file:[image,''],check:["picker"]
        defaultVal:"默认值",//check:{'01':'Danny','02':'bob'}
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
            placeholder:"请输入数字",
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
            placeholder:"请输入含.数字",
            list: [],
            maxLength:15
          }
        },
        {
          type: "text",
          detail:"string",
          defaultVal: "",
          canChange: true,
          privates:{
            title:"字符串",
            placeholder:"请输入字符串",
            maxLength:15
          }
        },
        {
          type: "check",
          detail:"picker",
          defaultVal: {'0101':"你1你"},
          canChange: true,
          privates:{
            title:"选择器",
            placeholder:"请选择",
            maxLength:15,
            list:{
              '0100':'你',
              '0200':'我',
              '0300':'她',
              '0101':'1你',
              '0201':'1我',
              '0301':'1她',
              '0102':'2你',
              '0202':'2我',
              '0302':'2她',
            }
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
      console.log(this.list)
    }
  }
}
