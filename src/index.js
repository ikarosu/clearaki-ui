import Button from '../packages/button'
import Input from '../packages/input'
import Snackbars from '../packages/snackbars'

const components = [
  Button,
  Input,
  Snackbars
]
const install = (Vue, opt = {}) => {
  components.forEach(component => Vue.component(component.name, component))
  Vue.prototype.$snackbars = Snackbars
}

// if (typeof window !== undefined && window.Vue) install(window.Vue)

export const AkiUI = {
  install,
  Button,
  Input,
  Snackbars,
}

export default AkiUI
