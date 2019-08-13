<template>
    <div>
        <mt-popup v-model="show" position="bottom" class="popup">
            <div class="btn-box">
                <mt-button type="primary" class="btn" @click="close(1)">确定</mt-button>
                <mt-button class="btn" @click="close(0)">取消</mt-button>
            </div>

            <slot name="content" class="content"></slot>
        </mt-popup>
    </div>
</template>
<script>
import Popup from "./Popup.js";
export default Popup;
</script>
<style scoped  lang="scss">
@import "/Popup";
</style>