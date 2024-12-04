import { $ } from 'zx'
import { name } from '../package.json'

export function genFormatDate(date: Date) {
  const Y = date.getFullYear()
  const M = `${date.getMonth() + 1}`.padStart(2, '0')
  const D = `${date.getDate()}`.padStart(2, '0')
  const H = `${date.getHours()}`.padStart(2, '0')
  const m = `${date.getMinutes()}`.padStart(2, '0')
  const s = `${date.getSeconds()}`.padStart(2, '0')
  return `${Y}${M}${D}${H}${m}${s}`
}

async function run() {
  const input = `./dist/*`
  // const input = `./dist/${name}`
  const output = `pkg/${name}_${genFormatDate(new Date())}.zip`
  await $`7z a ${output} ${input}`
}

await run()
