import { animation } from './animation.js'
import { menuBurguer } from './menuBurguer.js'
import { initThemer } from './theme.js'

// eslint-disable-next-line no-undef
$(document).ready(() => {
  console.log('load')

  menuBurguer()
  initThemer()
  animation()
})
