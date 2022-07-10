/* eslint-disable no-undef */
export const animation = () => {
  const snipets = (function * () {
    while (true) {
      yield 'app.listen(PORT || 3000)'
      yield 'let myVar = "Hello world"'
      yield 'let myVar = "Hola mundo"'
      yield 'app.get(_handler)'
    }
  })()

  let text = snipets.next().value
  let cont = 1
  setInterval(() => {
    if (cont <= text.length) {
      $('#hello-world').text(text.slice(0, cont) + '|')
    } else if (cont % 2) {
      $('#hello-world').text(text)
    } else {
      $('#hello-world').text(text + '|')
    }
    cont++
    hljs.highlightAll()
    if (cont > text.length + 10) {
      cont = 1
      text = snipets.next().value
    }
  }, 300)
}
