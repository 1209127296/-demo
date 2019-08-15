<template>
    <div>
        <div v-if="type=='number'">
            <!-- <mt-field
                label="else.title"
                placeholder="else.placeholder"
                v-model="defaultVal"
                @touchstart.native.stop="input"
            ></mt-field>-->
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