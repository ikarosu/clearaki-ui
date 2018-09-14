import Button from '../packages/button'
import Input from '../packages/input'
import Select from '../packages/select'
import Snackbars from '../packages/snackbars'
import Toolbars from '../packages/toolbars'

const components = [
  Button,
  Input,
  Select,
  Snackbars,
  Toolbars,
]
const install = (Vue, opt = {}) => {
  components.forEach(component => Vue.component(component.name, component))
  Vue.prototype.$snackbars = Snackbars
}

// if (typeof window !== undefined && window.Vue) install(window.Vue)

const AkiUI = {
  install,
  Button,
  Input,
  Select,
  Snackbars,
  Toolbars,
}
export {
  Button,
  Input,
  Select,
  Snackbars,
  Toolbars,
}
export default AkiUI
// export default AkiUI
