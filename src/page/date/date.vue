<template>
    <div class="date">
        <Dater
            class="dater"
            :year="checked_date.year"
            :month="checked_date.month"
            :sort_way="checked_date.sort_way"
            @changeTime="changeTime"
        ></Dater>
        <div class="input">
            <mt-field
                class="input-li"
                label="年份"
                :attr="{maxlength:4}"
                placeholder="请输入数字"
                type="number"
                v-model="checked_date.year"
            ></mt-field>
            <mt-field
                class="input-li"
                label="月份"
                :attr="{maxlength:2}"
                placeholder="请输入数字"
                type="number"
                v-model="checked_date.month"
            ></mt-field>
            <mt-switch v-model="is_sunday_begin">是否星期天开始</mt-switch>
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
