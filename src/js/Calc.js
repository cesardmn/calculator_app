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

  const click = {
    number: setNumber,
  }

  return click[type]()
}
