import Dater from "@/components/Dater";
import Header from "@/components/Header";
import Popup from "@/components/Popup";
import Sweep from "@/components/Sweep";
import DannyInput from "@/components/DannyInput";
import DannyForm from "@/components/DannyForm";
let components = {
  Dater,
  Header,
  Popup,
  Sweep,
  DannyInput,
  DannyForm
}

export default {
  install(Vue) {
    for (let key in components) {
      Vue.component(key, components[key])
    }
  }
}
