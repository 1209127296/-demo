<template>
    <div class="date">
        <div class="input">
            年份:
            <input type="number" maxlength="4" v-model="checked_date.year" />
            <br />月份:
            <input type="number" maxlenth="2" name="lastname" v-model="checked_date.month" />
            <br />格式：
            <select v-model="checked_date.sort_way">
                <option value="0">星期一开始</option>
                <option value="1">星期天开始</option>
            </select>
        </div>
        <Dater
            :year="checked_date.year"
            :month="checked_date.month"
            :sort_way="checked_date.sort_way"
            @changeTime="changeTime"
        ></Dater>
    </div>
</template>
<script>
import date from "./date.js";
export default date;
</script>
<style scoped  lang="scss">
@import "/date";
</style>
