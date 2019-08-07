export default {
  name: "home",
  data() {
    return {
      list:[
        {name:"demo-日历",to:"/date"},
        {name:"game-扫雷",to:"/sweep"}
      ]
    }
  },
  methods: {
    to(router){
      this.$router.push(router)
    }
  },
}
