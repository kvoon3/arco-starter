import type { Node } from 'node_modules/unified/lib'
import fs from 'node:fs'
import path from 'node:path'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import { parseURL } from 'ufo'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'
import { genTypeSafeTemplate } from './templates/type-safe'
import { whitelist } from './whitelist'

export interface ApiContext {
  url: string
  req: string
  res: string
}

/**
 * Configurations
 */
const filename = 'weila'
const input = path.join(__dirname, `../../fixtures/mock/${filename}.md`)
const output = path.join(__dirname, '../../generated/mock')

/**
 * Parsing weila api markdown file
 */

const outputFilepath = path.join(output, `${filename}.ts`)
const markdownContent = fs.readFileSync(input, 'utf-8')
const ctxs: ApiContext[] = []

if (!fs.existsSync(output))
  fs.mkdirSync(output, { recursive: true })

await unified()
  .use(remarkParse)
  .use(() => (tree) => {
    console.log('Traversing markdown nodes...')

    let url: any // string
    let req: string
    let res: string

    visit(tree, (node) => {
      const { value } = (node || { value: '' }) as Node & { value: string }

      if (node.type === 'text'
        && value.startsWith('http')
      ) {
        const { pathname } = parseURL(value)
        url = pathname
      }

      if (node.type === 'code') {
        const type = !value.includes('errcode') && value.includes('{')
          ? 'request'
          : value.includes('"errcode": 0')
            ? 'response'
            : 'unknown'

        if (type === 'request') {
          req = value
        }
        else if (type === 'response') {
          res = value

          if (url && req && res) {
            if (!whitelist.includes(url))
              ctxs.push({ url, req, res })
            else
              console.log(`[Skipped] url: ${url}`)

            url = ''
            req = '{}'
            res = ''
          }
        }
      }
    })
  })
  .use(remarkStringify)
  .process(markdownContent)

/**
 * Generating mock file
 */

fs.writeFileSync(outputFilepath, genTypeSafeTemplate(ctxs).join('\n'))

console.log(`Mock file created at: ${outputFilepath}`)
