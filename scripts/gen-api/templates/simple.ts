import type { ApiContext } from '..'

export function genSimpleTemplate(ctxs: ApiContext[]) {
  return [
    `// WARNING: 该文件通过项目内脚本自动生成，请勿手动更改`,
    '// @ts-ignore',
    'import type { MockMethod } from \'vite-plugin-mock\'',
    'import type { WeilaRes } from \'~/api\'',
    '',
    'export default ([',
    '  // [url, http response],',
    ...ctxs.map(({ url, res }) => `  ['${url}', ${res}],`),
    '] as Array<[string, WeilaRes<any>]>).map(([url, response]) => ({',
    '  url,',
    '  method: \'post\',',
    '  response,',
    '})) as MockMethod[]',
  ]
}
