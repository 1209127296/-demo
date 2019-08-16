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