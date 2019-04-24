import Button from '../packages/button'
import Input from '../packages/input'
import Select from '../packages/select'
import Snackbar from '../packages/snackbar'
import Toolbars from '../packages/toolbars'
import Toolbar from '../packages/toolbar'
import Dialog from '../packages/dialog'
import BottomSheet from '../packages/bottomSheet'
import Topbar from '../packages/topbar'
import Tabs from '../packages/tabs'
import Tab from '../packages/tab'
import Counter from '../packages/counter'
import Picker from '../packages/picker'
import Icon from '../packages/icon'
import Confirm from '../packages/confirm'
import Progress from '../packages/progress'
import Radio from '../packages/radio'
import Checkbox from '../packages/checkbox'
import ContextMenu from '../packages/contextMenu'
import Banner from '../packages/banner'
import Switch from '../packages/switch'
import Background from '../packages/background'
import PageBackround from '../packages/pageBG'
import PageMain from '../packages/pageMain'
import Step from '../packages/step'
import Steps from '../packages/steps'
import Fab from '../packages/fab'
import Fabs from '../packages/fabs'
import Dropdown from '../packages/dropdown'

const components = [
  Button,
  Input,
  Select,
  Toolbars,
  Toolbar,
  Dialog,
  BottomSheet,
  Topbar,
  Tabs,
  Tab,
  Counter,
  Picker,
  Icon,
  Progress,
  Radio,
  Checkbox,
  ContextMenu,
  Banner,
  Switch,
  Background,
  PageBackround,
  PageMain,
  Steps,
  Step,
  Fab,
  Fabs,
  Dropdown,
]
const install = Vue => {
  components.forEach(component => Vue.component(component.name, component))
  Vue.prototype.$snackbar = Snackbar
  Vue.prototype.$confirm = Confirm
  Vue.prototype.$alert = content => Confirm({
    action: 'alert',
    content,
    title: '警告！',
    btnConfirm: '我知道了'
  })
  Vue.prototype.$prompt = (label, type = 'text') => Confirm({
    action: 'prompt',
    label,
    type,
    content: '请输入：'
  })
  const CProgress = Vue.extend(Progress)
  const progress = new CProgress({
    propsData: {
      loading: true
    }
  })
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
  Vue.directive('contextmenu', {
    inserted(el, binding, vnode) {
      const { top, right: r } = el.getBoundingClientRect()
      const right = window.innerWidth - r
      const AkiContextMenu = vnode.children.find(v => v.tag && v.tag.includes('AkiContextMenu'))
      if (!AkiContextMenu) throw 'not find AkiContextMenu component in "v-contextmenu" Element.'
      const vm = AkiContextMenu.componentInstance
      el.addEventListener('click', function() {
        vm.visible = true
        vm.top = top + 'px'
        vm.right = right + 'px'
      })
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
  topbar: Topbar,
  Tabs,
  Tab,
  Counter,
  Picker,
  Icon,
  Confirm,
  Progress,
  Radio,
  Checkbox,
  ContextMenu,
  Banner,
  Switch,
  Background,
  PageBackround,
  PageMain,
  Steps,
  Step,
  Fab,
  Fabs,
  Dropdown,
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
  Topbar as topbar,
  Tabs,
  Tab,
  Counter,
  Picker,
  Icon,
  Confirm,
  Progress,
  Radio,
  Checkbox,
  ContextMenu,
  Banner,
  Switch,
  Background,
  PageBackround,
  PageMain,
  Steps,
  Step,
  Fab,
  Fabs,
  Dropdown,
}
export default AkiUI