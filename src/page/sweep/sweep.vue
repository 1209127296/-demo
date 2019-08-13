<template>
    <div class="sweep">
        <Sweep></Sweep>
        <Popup :show="show" @close="closePopup">
            <div slot="content">
            <mt-field
                class="input-li"
                label="年份"
                :attr="{maxlength:4}"
                placeholder="请输入数字"
                type="number"
               
            ></mt-field>
            <mt-field
                class="input-li"
                label="月份"
                :attr="{maxlength:2}"
                placeholder="请输入数字"
                type="number"
              
            ></mt-field>
        </div>
        </Popup>
    </div>
</template>
<script>
import sweep from "./sweep.js";
export default sweep;
</script>
<style scoped  lang="scss">
@import "/sweep";
</style>
