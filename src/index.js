import Button from '../packages/button'
import Input from '../packages/input'
import Select from '../packages/select'
import Snackbar from '../packages/snackbar'
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
import Radio from '../packages/radio'
import Checkbox from '../packages/checkbox'

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
  Radio,
  Checkbox,
]
const install = Vue => {
  components.forEach(component => Vue.component(component.name, component))
  Vue.prototype.$snackbar = Snackbar
  Vue.prototype.$confirm = Confirm
  Vue.prototype.$alert = content => Confirm({ action: 'alert', content, title: '警告！' })
  Vue.prototype.$prompt = (label, type = 'text') => Confirm({ action: 'prompt', label, type, content: '请输入：' })
  const CProgress = Vue.extend(Progress)
  const progress = new CProgress({ propsData: { loading: true } })
  progress.vm = progress.$mount()
  Vue.directive('loading', {
    bind(el) {
      el.style.position = 'relative'
      const div = document.createElement('div')
      div.className = 'aki-loading aki-full-element aki-center'
      div.style.backgroundColor = '#fff'
      div.style.display = 'none'
      div.appendChild(progress.vm.$el)
      el.appendChild(div)
    },
    update(el, buiding) {
      el.querySelector('.aki-loading').style.display = buiding.value ? 'flex' : 'none'
    }
  })
}

// if (typeof window !== undefined && window.Vue) install(window.Vue)

const AkiUI = {
  install,
  Button,
  Input,
  Select,
  Snackbar,
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
  Radio,
  Checkbox,
}
export {
  Button,
  Input,
  Select,
  Snackbar,
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
  Radio,
  Checkbox,
}
export default AkiUI
