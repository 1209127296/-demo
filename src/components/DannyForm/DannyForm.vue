<template>
    <div v-if="show">
        <div v-for="(item,index) in flag" :key="index">
            <DannyInput
                :type="item.type"
                :defaultVal="item.defaultVal"
                :canChange="item.canChange"
                :detail="item.detail"
                :privates="item.privates"
                :index="index"
                @openNumBoard="openNumBoard(index)"
                @change="change"
                @closeNumBoard="closeNumBoard"
                @openPicker="openPicker(index)"
            ></DannyInput>
        </div>
        <van-number-keyboard
            v-model="numBoardData.defaultVal"
            :show="showNumBoard"
            :extra-key="numBoardData.detail == 'number'?'':'.'"
            close-button-text="完成"
            @blur="showNumBoard = false"
            @input="numInput"
            @delete="numDelete"
        />
        <van-popup v-model="showPicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="columns"
                @cancel="showPicker = false"
                @confirm="pickerConfirm"
                @change="pickerChange"
            />
        </van-popup>
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