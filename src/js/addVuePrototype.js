import axios from 'axios'
export default function (Vue) {
  //通过屏幕宽度获取rem
  Vue.prototype.$getRem = function () {
    let width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    let rem_to_px = 25;
    if(Vue.$client()=='pc'){
      let appvue = document.getElementById('app');
      width = width>750?750:width;
      appvue.style.cssText = `width: ${width}px; margin: 0 auto;`;
    }
    document.getElementsByTagName("html")[0].style.fontSize = `${width / rem_to_px}px`;
  }

  //axios
  Vue.prototype.$axios = axios;

  //当前路由能否返回
  Vue.prototype.$canBack = function () {
    let arr = window.location.href.split('/');
    let return_data = true;
    if (arr[arr.length - 1] == 'home') {
      return_data = false;
    }
    return return_data;
  }

  // 判断当前终端
  Vue.prototype.$client = function () {
    let [u, return_data] = [navigator.userAgent, 'android'];
    if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) { //android终端
      return_data = 'android';
    } else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) { //ios终端
      return_data = 'ios'
    } else {
      return_data = 'pc'
    }
    Vue.$client = function(){
      return return_data;
    }
    return return_data;
  }

}
