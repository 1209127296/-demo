export default function(Vue){
  //通过屏幕宽度获取rem
  Vue.prototype.getRem = function(){
    let width = document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;
    let rem_to_px = 25;
    document.getElementsByTagName("html")[0].style.height =  document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
    document.getElementsByTagName("html")[0].style.fontSize = `${width/rem_to_px}px`;
  }
}
