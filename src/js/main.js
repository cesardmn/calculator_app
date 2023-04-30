const $html = document.querySelector('html')
const $theme = document.querySelector('.theme')
const $orientation = document.querySelector('.svg-hand')
const $main = document.querySelector('main')
const $contols = document.querySelector('.controls')
const $display = document.querySelector('.display')

import { Calc } from './Calc.js'

const setTheme = (themeChoiced) => {
  const themes = ['dark', 'light', 'main']

  for (const theme of themes) {
    $html.removeAttribute(theme)
  }
  $html.setAttribute(themeChoiced, true)

  localStorage.setItem('themeChoiced', themeChoiced)
}

;(() => {
  const local = localStorage.getItem('themeChoiced')

  if (local) {
    setTheme(local)
  } else {
    setTheme('main')
  }
})()

$theme.addEventListener('click', (e) => {
  const themes = ['dark', 'light', 'main']
  const themeChoiced = e.target.value
  setTheme(themeChoiced)
})

$contols.addEventListener('click', (e) => {
  window.navigator.vibrate(50)
  const clickTarget = e.target.innerText
  $display.innerText = Calc($display, clickTarget)
})
