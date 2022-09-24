export { logProgress }

import { getTestInfo } from './getTestInfo'

const iconSuccess = '🟢'
const iconPending = '🟠'
const iconFail = '🔴'

function logProgress(text: string, isSetup?: true) {
  const prefix = getPrefix(isSetup)
  process.stdout.write(`${prefix}${iconPending} ${text}`)
  return (failed?: boolean) => {
    clear()
    const iconDone = failed ? iconFail : iconSuccess
    process.stdout.write(`${prefix}${iconDone} ${text}\n`)
  }
}

function getPrefix(isSetup?: true) {
  if (isSetup) {
    return ''
  }
  if (!getTestInfo()) {
    return ''
  }
  return ' | '
}

function clear() {
  // @ts-ignore
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
}
