const $html = document.querySelector('html')
const $theme = document.querySelector('.theme')
const $orientation = document.querySelector('.svg-hand')
const $main = document.querySelector('main')

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
