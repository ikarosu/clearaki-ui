import Vue from 'vue'
import View from './Confirm'

const Constractor = Vue.extend(View)
const Confirm = (options = {}) => {
  options = typeof options === 'string' ? { content: options } : options
  const instance = new Constractor({ data: options })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  return new Promise((resolve, reject) => {
    instance.vm.resolve = resolve
    instance.vm.reject = reject
  })
}
export default Confirm
