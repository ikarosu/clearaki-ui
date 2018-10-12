import Vue from 'vue'
import View from './Snackbars'

const Constractor = Vue.extend(View)
const instances = []
const Toast = (options = {}) => {
  options = typeof options === 'string' ? { text: options } : options
  const instance = new Constractor({ data: options })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  instances.push(instance)
  return instance.vm
}
export default Toast
