export default {
  name: "date",
  data() {
    return {
      checked_date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1,
        sort_way: 0 //排序方法，0代表1，2，3，4，5，6，7-----1代表7，1，2，3，4，5，6
      }
    }
  },
  methods: {
    changeTime(year,month){
      console.log(year,month)
      this.checked_date.year = year;
      this.checked_date.month = month;
    },
    updateMonth(month){
      if(month>0&&month<13){
        this.checked_date.month=month;
      }
      else if(month>=13){
        this.checked_date.month=1;
        this.checked_date.year++;
      }
      else{
        this.checked_date.month=12;
        this.checked_date.year--;
      }
    },
    updateYear(year){
      this.checked_date.year=year
    },
    updateSortWay(sort_way=this.checked_date.sort_way){
      this.checked_date.sort_way = sort_way;
    }
  }
}
