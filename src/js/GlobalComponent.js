import Dater from "@/components/Dater";
import Header from "@/components/Header";
import Popup from "@/components/Popup";
import Sweep from "@/components/Sweep";
let components = {
  Dater,
  Header,
  Popup,
  Sweep
}

export default {
  install(Vue) {
    for (let key in components) {
      Vue.component(key, components[key])
    }
  }
}
