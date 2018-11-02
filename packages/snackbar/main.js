import Vue from 'vue'
import View from './Snackbar'

const Constractor = Vue.extend(View)
const instances = []
const Toast = (text, options = {}) => {
  options.text = text
  const instance = new Constractor({ data: options })
  if (instances.length) {
    const curr = instances[0].vm
    curr.close()
    instances.pop()
    setTimeout(() => {
      instance.vm = instance.$mount()
      document.body.appendChild(instance.vm.$el)
    }, 200)
  } else {
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
  }

  instances.push(instance)

  if (options.hasOwnProperty('action') && options.action !== '')
    return new Promise((resolve, reject) => {
      instance.resolve = resolve
      instance.reject = reject
    })
  else
    return instance.vm
}
export default Toast
