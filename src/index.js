import Button from '../packages/button'
import Input from '../packages/input'
import Select from '../packages/select'
import Snackbars from '../packages/snackbars'
import Toolbars from '../packages/toolbars'
import Toolbar from '../packages/toolbar'
import Dialog from '../packages/dialog'
import BottomSheet from '../packages/bottomSheet'
import Topbars from '../packages/topbars'
import Tabs from '../packages/tabs'
import Tab from '../packages/tab'
import Counter from '../packages/counter'
import Picker from '../packages/picker'
import Icon from '../packages/icon'

const components = [
  Button,
  Input,
  Select,
  Snackbars,
  Toolbars,
  Toolbar,
  Dialog,
  BottomSheet,
  Topbars,
  Tabs,
  Tab,
  Counter,
  Picker,
  Icon,
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
  Toolbar,
  Dialog,
  BottomSheet,
  Topbars,
  Tabs,
  Tab,
  Counter,
  Picker,
  Icon,
}
export {
  Button,
  Input,
  Select,
  Snackbars,
  Toolbars,
  Toolbar,
  Dialog,
  BottomSheet,
  Topbars,
  Tabs,
  Tab,
  Counter,
  Picker,
  Icon,
}
export default AkiUI
