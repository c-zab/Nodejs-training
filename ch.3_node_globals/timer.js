const waitTime = 3000
const waitInteraval = 500
let currentTime = 0

const incTime = () => {
  currentTime += waitInteraval
  const p = Math.floor((currentTime / waitTime) * 100)
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  process.stdout.write(`waiting... ${p}%`)
}

console.log(`setting a ${waitTime / 1000} seconds delay`)

const timerFinished = () => {
  clearInterval(interval)
  process.stdout.clearLine()
  process.stdout.cursorTo(0)
  console.log('done')
}

const interval = setInterval(incTime, waitInteraval)

setTimeout(timerFinished, waitTime)
