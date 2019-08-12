<template>
    <div id="app">
        <Header
            class="header"
            v-if="$client()!='pc'"
            :title="$route.meta.title"
            :can_back="$canBack()"
        >
            <span
                v-if="$route.meta.right"
                @click='this[$route.meta.right.click]'
                slot="right"
                :class="{'iconfont':$route.meta.right.isIcon}"
            >{{$route.meta.right.text}}</span>
        </Header>
        <router-view class="router-view" />
    </div>
</template>

<script>
export default {
    name: "App",
    data(){
        return {
            name : 'date'
        }
    },
    mounted() {
        this.$getRem();
        window.onresize = this.$getRem;
        console.log(this.$route);
    },
    methods: {
        date() {
            console.log(1111);
        }
    }
};
</script>

<style lang = "scss">
*,
body {
    margin: 0;
    padding: 0;
}
html,
body,
#app {
    height: 100%;
    width: 100%;
}
#app {
    display: flex;
    flex-direction: column;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c504d;
    .header {
        flex: none;
    }
    .router-view {
        flex: auto;
        height: 0 !important;
    }
}
</style>
