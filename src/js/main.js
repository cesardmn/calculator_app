const $html = document.querySelector('html')
const $controls = document.querySelector('.controls')
const $display = document.querySelector('.display')

const handleDisplay = ($display, input) => {
  const aceptedInputs = {
    deletion: ['Backspace', 'del', 'Delete'],
    equal: ['=', 'Enter'],
    number: '0123456789'.split(''),
    operator: ['+', '-', '*', 'x', 'X', '/'],
    reset: ['c', 'C', 'Escape'],
    separator: ['.', ','],
  }

  const setDeletion = () => {
    let newValue = $display.innerText.slice(0, -1)
    newValue == '' ? (newValue = '0') : newValue
    $display.innerText = newValue
  }

  const setEqual = () => {
    const result = new Function(`return ${$display.innerText}`)
    $display.innerText = result()
  }

  const setNumber = () => {
    $display.innerText === '0'
      ? ($display.innerText = input)
      : ($display.innerText += input)
  }

  const setOperator = () => {
    const operator = input.toLowerCase().replace('x', '*')
    const lastChar = $display.innerText.slice(-1)
    aceptedInputs.number.includes(lastChar)
      ? ($display.innerText += operator)
      : ($display.innerText = $display.innerText.slice(0, -1) + operator)
  }

  const setReset = () => {
    $display.innerText = '0'
  }

  const setSeparator = () => {
    const separator = input.replace(',', '.')
    const lastNum = $display.innerText.match(/(\d+\.\d+|\d+)$/)[0]
    !lastNum.includes('.') ? ($display.innerText += separator) : null
  }

  aceptedInputs.deletion.includes(input) && setDeletion()
  aceptedInputs.equal.includes(input) && setEqual()
  aceptedInputs.number.includes(input) && setNumber()
  aceptedInputs.reset.includes(input) && setReset()
  aceptedInputs.operator.includes(input) && setOperator()
  aceptedInputs.separator.includes(input) && setSeparator()
}

const handleCopy = (() => {
  const date = new Date().getFullYear()
  const copyright = document.querySelectorAll('.copyright')
  for (const element of copyright) {
    element.innerText = `© Cesar Dimi - ${date}`
  }
})()

$html.addEventListener('keydown', (e) => {
  handleDisplay($display, e.key)
})

$controls.addEventListener('click', (e) => {
  window.navigator.vibrate(50)
  const clickTarget = e.target.innerText
  handleDisplay($display, clickTarget)
})
