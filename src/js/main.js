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

// set localstorage
;(() => {
  const local = localStorage.getItem('themeChoiced')

  if (local) {
    setTheme(local)
  } else {
    setTheme('main')
  }
})()

// set copyright
;(() => {
  const date = new Date().getFullYear()
  const copyright = document.querySelectorAll('.copyright')
  for (const element of copyright) {
    element.innerText = `Copyright © Cesar Dimi - ${date}`
  }
})()

$html.addEventListener('keydown', (e) => {
  try {
    $display.innerText = Calc($display, e.key)
  } catch (error) {
    return
  }
})

$theme.addEventListener('click', (e) => {
  const themes = ['dark', 'light', 'main']
  const themeChoiced = e.target.value
  themes.includes(themeChoiced) && setTheme(themeChoiced)
})

$contols.addEventListener('click', (e) => {
  window.navigator.vibrate(50)
  const clickTarget = e.target.innerText
  $display.innerText = Calc($display, clickTarget)
})
