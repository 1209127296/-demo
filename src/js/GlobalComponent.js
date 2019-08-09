import Dater from "@/components/Dater";
import Header from "@/components/Header";
let components = {
  Dater,
  Header
}

export default {
  install(Vue) {
    for (let key in components) {
      Vue.component(key, components[key])
    }
  }
}
