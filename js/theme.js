/* eslint-disable no-undef */
export const initThemer = () => {
  const { matches: darkThemeMq } = window.matchMedia('(prefers-color-scheme: dark)')

  if (localStorage.getItem('theme') === 'dark') {
    $('main, header').toggleClass('dark-mode')
  } else if (localStorage.getItem('theme') === 'ligth') {
    $('main, header').toggleClass('light-mode')
  } else if (darkThemeMq) {
    localStorage.setItem('theme', 'dark')
    $('main, header').toggleClass('dark-mode')
  } else {
    $('main, header').toggleClass('light-mode')
    localStorage.setItem('theme', 'ligth')
  }

  $('#change-theme').click(() => {
    $('main, header').toggleClass('light-mode')
    $('main, header').toggleClass('dark-mode')
    localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'ligth' : 'dark')
  })
}
