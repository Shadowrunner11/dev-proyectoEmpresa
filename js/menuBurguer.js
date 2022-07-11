/* eslint-disable no-undef */
export const menuBurguer = () => {
  $('.burger').click((e) => {
    $('#up-burger').toggleClass('up-burger-a')
    $('#down-burger').toggleClass('down-burger-a')
    $('#middle-burger').toggleClass('middle-burger-a')
    $('#links').slideToggle()
  })
}
