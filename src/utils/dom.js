/**
 * @author clearaki
 * @description 在dom中插入一个容器，用于计算某些不显示的dom高度
 * @export {Function}
 * @returns {Element} container
 */
export function constructorContainer() {
  if (document.getElementById('aki-dom-container')) return false
  const container = document.createElement('div')
  container.id = 'aki-dom-container'
  container.style.position = 'fixed'
  container.style.top = '100vh'
  container.style.left = '100vw'
  // container.style.width = 0
  // container.style.height = 0
  container.style.overflow = 'hidden'
  document.body.appendChild(container)
  return container
}
/**
 * @author clearaki
 * @description 获取dom正常渲染后的实际的Rect
 * @export {Function}
 * @param {Element} el 一个Node节点
 * @returns {Object} DOMRect
 */
export function getDOMRect(el) {
  const container = document.getElementById('aki-dom-container') || constructorContainer()
  container.innerHTML = ''
  el.style.height = 'auto'
  el.style.maxHeight = 'initial'
  el.style.visibility = 'visible'
  el.style.display = 'initial'
  container.appendChild(el)
  return el.getBoundingClientRect()
}

/**
 * @author clearaki
 * @description 获取包含某属性的父节点集合
 * @export {Function}
 * @param {Element} el 一个Node节点
 * @param {String} attr 节点 attribute
 * @returns {Object} DOMRect
 */
export function getParentsByAttr(el, attr) {
  const arr = []
  do {
    el = el.parentElement || document.body
    if (el.getAttribute(attr) === 'true') arr.push(el)
  } while (el.tagName !== 'BODY')
  return arr
}

// export const getHeight = parent => {
//   let top = 0
//   let bottom = 0
//   return Array.from(parent.children).reduce((pre, curr, index) => {
//     top = Number(getComputedStyle(curr).marginTop.replace(/\D/g, ''))
//     bottom = Number(getComputedStyle(curr).marginBottom.replace(/\D/g, ''))
//     let sum = top > bottom ? top : bottom
//     console.log('sum', sum)
//     if (index === parent.children.length) sum += bottom
//     return pre += curr.getBoundingClientRect().height + sum
//   }, 0)
// }
export const getHeight = dom => {
  if (!dom) return
  const el = dom.cloneNode(true)
  console.dir(el)
  Array.from(el.children).forEach(d => { if (d.classList.contains('aki-testheight')) d.remove() })
  el.classList.add('aki-testheight')
  dom.parentElement.appendChild(el)
  const height = el.getBoundingClientRect().height
  // setTimeout(() => {
  // el.remove()
  // }, 10000)
  return height
}