<template>
    <div class="home">
      <Header class="header" :title='title' :can_back="false"></Header>
      <ul class="content">
        <li @click="to(item.to)" class="list" v-for="(item,index) in list" :key="index">{{index+1+" : "+item.name}}</li>
      </ul>
    </div>
</template>
<script>
import home from "./home.js";
export default home;
</script>
<style scoped  lang="scss">
@import "/home";
</style>
