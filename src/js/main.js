const $html = document.querySelector('html')
const $theme = document.querySelector('.theme')
const $orientation = document.querySelector('.svg-hand')
const $main = document.querySelector('main')
const $contols = document.querySelector('.controls')
const $display = document.querySelector('.display')

$theme.addEventListener('click', (e) => {
  const themes = ['dark', 'light', 'main']
  const themeChoiced = e.target.value

  if (themeChoiced) {
    for (const theme of themes) {
      $html.removeAttribute(theme)
    }
    $html.setAttribute(themeChoiced, true)
  }
})

$contols.addEventListener('click', (e) => {
  window.navigator.vibrate(50)
  const buttonClickValue = e.target.innerText

  const getType = (val) => {
    const types = [
      { action: ['del', 'reset', '='] },
      { operator: ['+', '-', 'x', '/'] },
      { number: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    ]

    const type = types.filter((type) => {
      return Object.values(type)[0].includes(val)
    })[0]

    return Object.keys(type)[0]
  }

  console.log({
    value: buttonClickValue,
    type: getType(buttonClickValue),
  })
})
