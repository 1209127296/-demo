<template>
    <div>
      <div>
        年份:
        <input type="number" maxlength=4 v-model="checked_date.year">
        <br>
        月份:
        <input type="number" maxlenth=2 name="lastname" v-model="checked_date.month">
        <br>
        格式：
        <select v-model="checked_date.sort_way">
          <option value="0">星期一开始</option>
          <option value="1">星期天开始</option>
        </select>
      </div>
      <div class="box">
        <!-- 头部 -->
        <div class="box-head">
          <span @click="updateYear(parseInt(checked_date.year)-1)">-</span>
          <span @click="updateMonth(parseInt(checked_date.month)-1)">-</span>
          <span class="box-head-center">{{checked_date.year+"年"+checked_date.month+"月"}}</span>
          <span @click="updateMonth(parseInt(checked_date.month)+1)">+</span>
          <span @click="updateYear(parseInt(checked_date.year)+1)">+</span>
        </div>
        <!-- 主体 -->
        <div class="box-main">
          <div class="box-main-top">
            <span class="top-item" v-for="index in checked_date.sort_way==0?['星期一','星期二','星期三','星期四','星期五','星期六','星期天']:['星期天','星期一','星期二','星期三','星期四','星期五','星期六']">{{index}}</span>
          </div>
          <div class="box-main-main">
            <div class="main-li" v-for="items in getDateArray">
              <div :class="{'gray':(value>7&&key==0)||(key>2&&value<7), 'main-li-item':true}" v-for="(value,key) in items">{{value}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import date from "./date.js";
export default date;
</script>
<style scoped  lang="scss">
@import "/date";
</style>
