<template>
    <div id="app">
        <Header class="header" v-if="$client()!='pc'" :title='$route.meta.title' :can_back="$canBack()"></Header>
        <router-view class="router-view" />
    </div>
</template>

<script>
export default {
    name: "App",
    mounted() {
        this.$getRem();
        window.onresize = this.$getRem;   
        console.log(this.$route)    
    }
};
</script>

<style lang = "scss">
*,body {
    margin: 0;
    padding: 0;
}
html,body,#app{
    height:100%;
    width:100%
}
#app {
    display:flex;
    flex-direction: column;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c504d;
    .header{
        flex:none;
    }
    .router-view{
        flex:auto;
        height: 0!important;
    }
}
</style>
