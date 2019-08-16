<template>
    <div>
        <div v-if="type=='text'" class="input-box">
            <van-field
                readonly
                clickable
                :label="privates.title"
                :placeholder="privates.placeholder"
                :value="defaultVal"
                @touchstart.native.stop="input"
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