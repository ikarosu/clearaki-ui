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
import Confirm from '../packages/confirm'
import Progress from '../packages/progress'

const components = [
  Button,
  Input,
  Select,
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
  Progress,
]
const install = Vue => {
  components.forEach(component => Vue.component(component.name, component))
  Vue.prototype.$snackbars = Snackbars
  Vue.prototype.$confirm = Confirm
  Vue.prototype.$alert = content => Confirm({ action: 'alert', content, title: '警告！' })
  Vue.prototype.$prompt = (label, type = 'text') => Confirm({ action: 'prompt', label, type, content: '请输入：' })
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
  Confirm,
  Progress,
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
  Confirm,
  Progress,
}
export default AkiUI
