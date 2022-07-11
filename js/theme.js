/* eslint-disable no-undef */
export const initThemer = () => {
  const { matches: darkThemeMq } = window.matchMedia('(prefers-color-scheme: dark)')
  console.log(darkThemeMq)
  if (localStorage.getItem('theme') === 'dark') {
    console.log('a')
    $('main, header').toggleClass('dark-mode')
  } else if (localStorage.getItem('theme') === 'ligth') {
    console.log('b')
    $('main, header').toggleClass('light-mode')
    localStorage.setItem('theme', 'ligth')
  } else if (darkThemeMq) {
    console.log('c')
    localStorage.setItem('theme', 'dark')
    $('main, header').toggleClass('dark-mode')
  } else {
    console.log('d')
    $('main, header').toggleClass('light-mode')
    localStorage.setItem('theme', 'ligth')
  }

  $('#change-theme').click(() => {
    $('main, header').toggleClass('light-mode')
    $('main, header').toggleClass('dark-mode')
    localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'ligth' : 'dark')
  })
}
