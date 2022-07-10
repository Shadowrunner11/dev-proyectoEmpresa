import { animation } from "./animation.js"
import { menuBurguer } from "./menuBurguer.js"
import { initThemer } from "./theme.js"

$( document ).ready(()=>{
    console.log('load')

    menuBurguer()
    initThemer()
    animation()
   
})