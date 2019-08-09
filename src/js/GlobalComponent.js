import Dater from "@/components/Dater"

let components = {
  Dater,
}

export default {
  install(Vue) {
    for (let key in components) {
      console.log(key)
      console.log(components[key])
      Vue.component(key, components[key])
    }
  }
}
