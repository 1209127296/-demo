<template>
    <mt-header :title="title">
        <span v-if="can_back" @click="backRouter" slot="left">
            <slot name="left">
                <mt-button icon="back"></mt-button>
            </slot>
        </span>
        <span slot="right">
            <slot name = "right">
                <mt-button icon="more"></mt-button>
            </slot>
        </span>
    </mt-header>
</template>
<script>
import Header from "./Header.js";
export default Header;
</script>
<style scoped  lang="scss">
@import "/Header";
</style>