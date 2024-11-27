type TargetContext = '_self' | '_parent' | '_blank' | '_top'

export function openWindow(url: string, opts?: { target?: TargetContext, [key: string]: any }) {
  const { target = '_blank', ...others } = opts || {}
  window.open(
    url,
    target,
    Object.entries(others)
      .reduce((preValue: string[], curValue) => {
        const [key, value] = curValue
        return [...preValue, `${key}=${value}`]
      }, [])
      .join(','),
  )
}

// eslint-disable-next-line regexp/no-useless-assertions, regexp/no-super-linear-backtracking
export const regexUrl = /^(?!mailto:)(?:http|https|ftp):\/\/(?:\S+@)?(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}\.(?:\d\d?|1\d\d|2[0-4]\d|25[0-4])|(?:[a-z\u00A1-\uFFFF0-9]+-?)*[a-z\u00A1-\uFFFF0-9](?:\.(?:[a-z\u00A1-\uFFFF0-9]+-?)*[a-z\u00A1-\uFFFF0-9])*\.[a-z\u00A1-\uFFFF]{2,}|localhost)(?::\d{2,5})?(?:([/?#])\S*)?$/i

export default null

export const isRemoteImage = (url: string) => url.startsWith('http://weilacorp.oss-cn-shenzhen.aliyuncs.com')
