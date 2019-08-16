import axios from 'axios'
export default function (Vue) {
  //通过屏幕宽度获取rem
  Vue.prototype.$getRem = function () {
    let width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    let rem_to_px = 25;
    if (Vue.$client() == 'pc') {
      let appvue = document.getElementById('app');
      width = width > 750 ? 750 : width;
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
    Vue.$client = function () {
      return return_data;
    }
    return return_data;
  }

  //深拷贝
  Vue.prototype.$deepCopy = function (obj) {
    let return_data = obj;
    if (typeof (obj) == "object" && obj[key] !== null) {
      let result = Array.isArray(obj) ? [] : {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            result[key] = this.$deepCopy(obj[key]);   //递归复制
          } else {
            result[key] = obj[key];
          }
        }
      }
      return_data = result;
    }
    return return_data;
  }

  //两个基本对象之间是否相等，时间对象等不做考虑
  window.compair =function(obj1,obj2){
    let return_data = false;
    if(obj1==obj2){
      return_data = true;
    }
    else if((typeof(obj1)!="object"||typeof(obj2)!="object")||Array.isArray(obj1) != Array.isArray(obj2)){
      //不做处理
    }else{
      return_data = true;
      //两个同为数组或同为对象
      //1：如果同为数组
      if(Object.keys(obj1).length != Object.keys(obj2).length){
        return_data = false;
      }
      if(return_data){
        for (var key in obj1) {
          if(compair(obj1[key],obj2[key])){
            continue;
          }
          else{
            return_data = false;
            break;
          }
        }
      }
      
    }
    return return_data;
  }
}
