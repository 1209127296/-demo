<template>
    <div class="box">
        <!-- 头部 -->
        <div class="box-head">
            <span @click="updateYear(parseInt(year)-1)">-</span>
            <span @click="updateMonth(parseInt(month)-1)">-</span>
            <span class="box-head-center">{{year+"年"+month+"月"}}</span>
            <span @click="updateMonth(parseInt(month)+1)">+</span>
            <span @click="updateYear(parseInt(year)+1)">+</span>
        </div>
        <!-- 主体 -->
        <div class="box-main">
            <div class="box-main-top">
                <span
                    class="top-item"
                    :key="index"
                    v-for="index in sort_way==0?['星期一','星期二','星期三','星期四','星期五','星期六','星期天']:['星期天','星期一','星期二','星期三','星期四','星期五','星期六']"
                >{{index}}</span>
            </div>
            <div class="box-main-main">
                <div
                    class="main-li"
                    :key="keys"
                    :class="{red:sort_way==0?(keys==5||keys==6):(keys==0||keys==6)}"
                    v-for="(items,keys) in getDateArray"
                >
                    <div
                        :key="key"
                        :class="{'gray':(value>7&&key==0)||(key>2&&value<7), 'main-li-item':true}"
                        v-for="(value,key) in items"
                    >{{value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Dater from "./Dater.js";
export default Dater;
</script>
<style scoped  lang="scss">
@import "/Dater";
</style>