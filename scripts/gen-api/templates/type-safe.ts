import type { ApiContext } from '..'

/* eslint-disable no-template-curly-in-string */
export function genTypeSafeTemplate(ctxs: ApiContext[]) {
  return [
    `// WARNING: 该文件通过项目内脚本自动生成，请勿手动更改`,
    '// @ts-ignore',
    '',
    'import { z } from \'zod\'',
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
    ']',
    '',
    'function check(obj1: object, obj2: object) {',
    '  const weilaRes = { errcode: 0, errmsg: \'\' }',
    '  const keys = Object.keys(obj1);',
    '  ',
    '  for (const key of keys) {',
    '    if (!(key in obj2)) {',
    '      weilaRes.errcode = 1;',
    '      weilaRes.errmsg = `Missing key: ${key}`;',
    '      return weilaRes;',
    '    }',
    '    ',
    '    if (typeof obj1[key as keyof typeof obj1] !== typeof obj2[key as keyof typeof obj2]) {',
    '      weilaRes.errcode = 1;',
    '      weilaRes.errmsg = `Type mismatch for key: ${key}`;',
    '      return weilaRes;',
    '    }',
    '  }',
    '  ',
    '  return weilaRes;',
    '}',
  ]
}
