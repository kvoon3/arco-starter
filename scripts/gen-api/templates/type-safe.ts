import type { ApiContext } from '..'

/* eslint-disable no-template-curly-in-string */
export function genTypeSafeTemplate(ctxs: ApiContext[]) {
  return [
    `// WARNING: 该文件通过项目内脚本自动生成，请勿手动更改`,
    '// @ts-ignore',
    '',
    'import { isString } from \'@antfu/utils\'',
    '',
    'export default [',
    ...ctxs.flatMap(({ url, res, req }) => {
      return [
        '{',
        `  url: '${url}',`,
        '  method: \'post\',',
        '  response: (res: any) => {',
        '    const { body = {} } = res',
        '    console.log(res)',
        `    return Object.assign(${res}, check(body, ${req}))`,
        `  }`,
        '},',
      ].map(i => i.padStart(2, ''))
    }),
    '] as const',
    '',
    'export function check(obj1: object, obj2: object) {',
    '  const keys = Object.keys(obj1);',
    '  const keys2 = Object.keys(obj2);',
    '  ',
    '  if(keys.length !== keys2.length)',
    '    return { errcode: 1, errmsg: `Length mismatch: ${keys.length} !== ${keys2.length}` }',
    '  ',
    '  for (const key of keys) {',
    '    if (!(key in obj2)) ',
    '      return { errcode: 1, errmsg: `Missing key: ${key}` }',
    '    ',
    '    const val1 = obj1[key as keyof typeof obj1]',
    '    const val2 = obj2[key as keyof typeof obj2]',
    '    ',
    '    if (typeof val1 !== typeof val2) {',
    '      if(isString(val1) && val1 === \'\' && val2 !== \'\')',
    '        return { errcode: 1, errmsg: `${key} is empty string` }',
    '      return { errcode: 1, errmsg: `Type mismatch for key: ${key}` }',
    '    }',
    '  }',
    '  ',
    '  return { errcode: 0, errmsg: \'\' }',
    '}',
  ]
}
