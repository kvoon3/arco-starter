import type { Node } from 'node_modules/unified/lib'
import fs from 'node:fs'
import path from 'node:path'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import { parseURL } from 'ufo'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

/**
 * Configurations
 */
const filename = 'weila'
const input = path.join(__dirname, `../fixtures/mock/${filename}.md`)
const output = path.join(__dirname, '../generated/mock')

const outputFilepath = path.join(output, `${filename}.ts`)

const markdownContent = fs.readFileSync(input, 'utf-8')
const urlAndRes: [string, string][] = []

if (!fs.existsSync(output))
  fs.mkdirSync(output, { recursive: true })

await unified()
  .use(remarkParse)
  .use(() => (tree) => {
    console.log('Traversing markdown nodes...')

    let url: string
    let res: string

    visit(tree, (node) => {
      const { value } = (node || { value: '' }) as Node & { value: string }

      if (node.type === 'text'
        && value.startsWith('http')
      ) {
        const { pathname } = parseURL(value)
        url = pathname
      }

      if (
        node.type === 'code'
        && value.includes('"errcode": 0')
      ) {
        res = value

        if (url && res)
          urlAndRes.push([url, res])
      }
    })
  })
  .use(remarkStringify)
  .process(markdownContent)

const template = [
  `// WARNING: 该文件通过项目内脚本自动生成，请勿手动更改`,
  '// @ts-ignore',
  'import type { MockMethod } from \'vite-plugin-mock\'',
  'import type { WeilaRes } from \'~/api\'',
  '',
  'export default ([',
  '  // [url, http response],',
  ...urlAndRes.map(([url, res]) => `  ['${url}', ${res}],`),
  '] as Array<[string, WeilaRes<any>]>).map(([url, response]) => ({',
  '  url,',
  '  method: \'post\',',
  '  response,',
  '})) as MockMethod[]',
]

fs.writeFileSync(outputFilepath, template.join('\n'))

console.log(`Mock file created at: ${outputFilepath}`)
