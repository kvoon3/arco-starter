import weilaExtra from '../../generated/mock/weila-extra'

export const whitelist = [
  ...weilaExtra.map(i => i.url),
  // '/v1/corp/web/location-get-regeo',
]
