export const Calc = ($display, clickTarget) => {
  const types = [
    { action: ['del', 'reset', '=', '.'] },
    { operator: ['+', '-', 'x', '/'] },
    { number: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
  ]

  const type = (() => {
    const targetTypes = types.filter((type) =>
      Object.values(type)[0].includes(clickTarget)
    )
    const targetType = targetTypes[0]

    return Object.keys(targetType)[0]
  })()

  const setNumber = () => {
    return $display.innerText === '0'
      ? clickTarget
      : $display.innerText + clickTarget
  }

  const setOperator = () => {
    const lastDigit = $display.innerText.slice(-1)
    const operators = types[1].operator
    let tempDisplay = $display.innerText

    if (operators.includes(lastDigit)) {
      tempDisplay = $display.innerText.slice(0, -1)
    }

    return tempDisplay + clickTarget
  }

  const setAction = () => {
    const doReset = () => {
      return '0'
    }

    const doDelete = () => {
      const oldValue = $display.innerText
      let newValue = oldValue.slice(0, -1)

      if (newValue == '') {
        newValue = '0'
      }

      return newValue
    }

    const addSeparator = () => {
      const lastNum = $display.innerText.match(/(\d+\.\d+|\d+)$/)[0]
      if (lastNum.includes('.')) {
        return $display.innerText
      } else {
        return $display.innerText + clickTarget
      }
    }

    const actions = {
      reset: doReset,
      del: doDelete,
      '.': addSeparator,
    }

    return actions[clickTarget]()
  }

  const click = {
    number: setNumber,
    operator: setOperator,
    action: setAction,
  }

  return click[type]()
}
