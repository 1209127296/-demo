<template>
    <div>
        <div v-if="type=='text'" class="input-box">
            <van-field
                :readonly="detail=='number'||detail=='numberWithPoint'"
                clickable
                :label="privates.title"
                :placeholder="privates.placeholder"
                :value="defaultVal"
                :maxlength="privates.maxLength"
                @touchstart.native.stop="input"
                @input="print"
                @click.native="closeNumBoard"
            >
            </van-field>
        </div>
        <div v-if="type=='check'" class="input-box">
            <van-field
                readonly
                clickable
                :label="privates.title"
                :placeholder="privates.placeholder"
                :value="defaultVal[Object.keys(defaultVal)[0]]"
                :maxlength="privates.maxLength"
                @click.native="openPicker"
            >
            </van-field>
        </div>
    </div>
</template>
<script>
import DannyInput from "./DannyInput.js";
export default DannyInput;
</script>
<style scoped  lang="scss">
@import "/DannyInput";
</style>