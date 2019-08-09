export default {
  name: "Dater",
  data() {
    return {

    }
  },
  props: {
    year: {
      type: [Number,String],
      default: new Date().getFullYear(),
    },
    month: {
      type: [Number,String],
      default: new Date().getMonth() + 1,
    },
    sort_way: {
      type: [Number,String],
      default: 0,
    }
  },
  watch: {
    // 如果传过来的是stirng，全部转换成number
    year(now) {
      return parseInt(now);
    },
    month(now) {
      return parseInt(now);
    },
    sort_way(now) {
      return parseInt(now);
    }
  },
  methods: {
    updateMonth(month) {
      if (month > 0 && month < 13) {
        this.$emit("changeTime",this.year,month);
      }
      else if (month >= 13) {
        this.$emit("changeTime",this.year+1,1);
      }
      else {
        this.$emit("changeTime",this.year-1,12);
      }
    },
    updateYear(year) {
      this.$emit("changeTime",year,this.month)
    },
  },
  computed: {
    getDateArray() {
      let return_data;
      //获取当前月份有多少天
      let getDayNum = (month = this.month, year = this.year) => {
        //1.先看月份
        let return_data = 0;
        switch (parseInt(month)) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12: return_data = 31; break;
          case 4:
          case 6:
          case 9:
          case 11: return_data = 30; break;
          case 2: {
            //如果是二月份再看年份
            if (isLeapYear(year)) {
              return_data = 29;
            }
            else {
              return_data = 28
            }
          } break;
          default: alert("出错了！1")
        }
        return return_data;
      }

      //判断是否为闰年
      let isLeapYear = (year = this.year) => {
        //如果是二月份再看年份
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
          return_data = true;
        }
        else {
          return_data = false;
        }
        return return_data;
      }

      //获取第一天是星期几
      let getFirstDay = (month = this.month, year = this.year) => {
        //时间格式如"2014-04-23"
        const date = new Date(year + "-" + month + "-01");
        //返回值为1，2，3，4，5，6，7，对应星期1，2，3，4，5，6，日
        return date.getDay() == 0 ? 7 : date.getDay();
      }

      //获取最后一天是礼拜几
      let getLastDay = (month = this.month, year = this.year) => {

        //时间格式如"2014-04-23"
        let date = new Date(year + "-" + month + "-" + getDayNum(month, year));
        //返回值为1，2，3，4，5，6，7，对应星期1，2，3，4，5，6，日
        return date.getDay() == 0 ? 7 : date.getDay();
      }

      //获取当前月份的时间数组,包括头部和尾部的相邻月份数据
      let getDateArray = (month = this.month, year = this.year, sort_way = this.sort_way) => {
        let return_data = new Array(); //返回数组
        let now_data = new Array();  //当前月份数组
        let before_data = new Array();  //上月数组
        let then_data = new Array();  //下月数组
        let many_day = getDayNum(month, year);
        let first_day = getFirstDay(month, year);
        let last_day = getLastDay(month, year);
        let before_month_many_day = month != 1 ? getDayNum(month - 1, year) : getDayNum(12, year - 1);

        for (let i = 1; i <= many_day; i++) {
          now_data.push(i)
        }

        for (let i = 1; i < first_day; i++) {
          before_data.unshift(before_month_many_day);
          before_month_many_day--;
        }
        for (let [i, k] = [7, 1]; i > last_day; i--) {
          then_data.push(k);
          k++;
        }

        //以上是当sort_way=0时的情况，下面是sort_way不为默认在此基础上修改
        if (sort_way == 1) {
          if (before_data.length == 0) {
            before_data.unshift(before_month_many_day)
          }
          else if (before_data.unshift(before_data[0] - 1) == 7) {
            before_data.splice(0, 7)
          }
          if (then_data.length == 0) {
            then_data.concat([1, 2, 3, 4, 5, 6])
          }
          else {
            then_data.pop()
          }
        }

        //将三个数组拼接
        return_data = before_data.concat(now_data).concat(then_data);
        return return_data;
      }

      //将一维数组分割成二维数组
      let main = (arr) => {
        let return_data = [[], [], [], [], [], [], []]
        let flag_data = new Array();
        flag_data[0] = [];
        let [i, j] = [0, 0];
        for (let k = 0; k < arr.length; k++) {
          flag_data[i][j] = arr[k];
          j++;
          if (j == 7) {
            j = 0;
            i++;
            flag_data[i] = [];
          }
        }
        i--;
        for (let k = 0; k < 7; k++) {
          for (let l = 0; l <= i; l++) {
            return_data[k].push(flag_data[l][k])
          }

        }
        return return_data;
      }
      return_data = main(getDateArray());
      return return_data;
    }

  }
}
