export default function(Vue){
  //通过屏幕宽度获取rem
  Vue.prototype.getRem = function(){
    let width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    let rem_to_px = 15;
    document.getElementsByTagName("html")[0].style.fontSize = `${width/rem_to_px}px`;
  }
}
