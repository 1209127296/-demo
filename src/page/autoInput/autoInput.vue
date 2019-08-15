<template>
    <div class="autoinput">
        <DannyForm :list="list" @change="change"></DannyForm>
    </div>
</template>
<script>
import autoInput from "./autoInput.js";
export default autoInput;
</script>
<style scoped  lang="scss">
@import "/autoInput";
</style>
