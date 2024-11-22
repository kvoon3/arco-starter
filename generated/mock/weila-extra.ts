import { check } from './weila'

// NOTE: 根据实际需求调整模拟数据的 mock api，此处的 api 将会替换掉生成的 mock api
export default [
  {
    url: '/v1/corp/web/location-get-track',
    method: 'post',
    response: (res: any) => {
      const { body = {} } = res
      console.log(res)

      // Generate random number of tracks (between 1 and 10)
      const numTracks = Math.floor(Math.random() * 10) + 1;

      // Generate random tracks
      const guangdongBounds = {
        minLat: 20.13,
        maxLat: 25.31,
        minLong: 109.66,
        maxLong: 117.19
      };

      const tracks = Array.from({ length: numTracks }, (_, idx) => ({
        latitude: Number((Math.random() * (guangdongBounds.maxLat - guangdongBounds.minLat) + guangdongBounds.minLat).toFixed(6)),
        longitude: Number((Math.random() * (guangdongBounds.maxLong - guangdongBounds.minLong) + guangdongBounds.minLong).toFixed(6)),
        created: Math.floor(Date.now() / 1000) + idx * 300 // Incrementing timestamp in seconds, 5 minutes apart
      }));

      return Object.assign({
        "errcode": 0,
        "errmsg": "请求成功",
        "data": {
          "tracks": tracks
        }
      }, check(body, {
        "user_id": 1253464, //群Id
        "date": "2024-11-19"
      }))
    }
  }
] as const
