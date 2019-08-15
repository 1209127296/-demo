<template>
    <div v-if="show">
        <div v-for="(item,index) in flag" :key="index">
            <DannyInput
                :type="item.type"
                :defaultVal="item.defaultVal"
                :list="item.list"
                :index="index"
                :privates="item.privates"
                @openNumBoard="openNumBoard(index)"
            ></DannyInput>
        </div>
        <van-number-keyboard v-model="numBoardData" :show="showNumBoard" @blur="showNumBoard = false" />
    </div>
    <p v-else>{{tips}}</p>
</template>
<script>
import DannyForm from "./DannyForm.js";
export default DannyForm;
</script>
<style scoped  lang="scss">
@import "/DannyForm";
</style>