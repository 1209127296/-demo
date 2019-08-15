export default {
  name: "date",
  data() {
    return {
      list: [
        {
          type: "number",
          defaultVal: 10,
          list: [],
          privates:{
            title:"账号",
            placeholder:"请输入账号"
          }
        },
        {
          type: "number",
          defaultVal: 20,
          list: [],
          privates:{
            title:"密码",
            placeholder:"请输入密码"
          }
        },
        {
          type: "number",
          defaultVal: "",
          list: [],
          privates:{
            title:"label",
            placeholder:"哈哈哈，这是一个假的placeholder"
          }
        }
      ]
    }
  },
  watch: {

  },
  methods: {
    rightClick() {
    },
    change(val){
      this.list = val;
    }
  }
}
