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
                @click="this[click]"
                slot="right"
                :class="{'iconfont':$route.meta.right.isIcon}"
                v-html="$route.meta.right.text"
            ></span>
        </Header>
        <transition name="fade" mode="out-in">
            <router-view class="router-view" ref="route" />
        </transition>
    </div>
</template>

<script>
import HeadRightMethods from "./js/HeadRightMethods";
export default {
    name: "App",
    data() {
        return {
            //存储路由中的内容，用于修改
            ref_route: {},
            click: "",
            text: "&#xe600;",
            transitionName: 'slide-left'
        };
    },
    beforeRouteUpdate(to, from, next) {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        this.transitionName =
            toDepth < fromDepth ? "slide-right" : "slide-left";
        next();
    },
    mounted() {
        this.$getRem();
        window.onresize = this.$getRem;
        console.log(HeadRightMethods);
    },
    methods: HeadRightMethods,
    watch: {
        $route(to,from) {
            this.ref_route = this.$refs.route;
            if (to.meta.right) {
                this.click = to.meta.right.click;
                this.text = to.meta.right.text;
            }
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
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
.transition {
    transition: all .8s cubic-bezier(.55,0,.1,1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
