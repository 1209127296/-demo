<template>
    <mt-header :title="title">
        <span v-if="can_back" @click="backRouter" slot="left">
            <mt-button icon="back"></mt-button>
        </span>
        <span slot="right">
            <mt-button icon="more"></mt-button>
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