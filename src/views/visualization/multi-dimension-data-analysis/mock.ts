import type { PostData } from '@/types/global'
import setupMock, { successResponseWrap } from '@/utils/setup-mock'
import Mock from 'mockjs'

setupMock({
  setup() {
    Mock.mock(/\/api\/data-chain-growth/, (params: PostData) => {
      const { quota } = JSON.parse(params.body)
      const getLineData = () => {
        return {
          xAxis: Array.from({ length: 12 }).fill(0).map((_item, index) => `${index + 1}日`),
          data: {
            name: quota,
            value: Array.from({ length: 12 })
              .fill(0)
              .map(() => Mock.Random.natural(1000, 3000)),
          },
        }
      }
      return successResponseWrap({
        count: Mock.Random.natural(1000, 3000),
        growth: Mock.Random.float(20, 100, 2, 2),
        chartData: getLineData(),
      })
    })
    // v2
    Mock.mock(/\/api\/data-overview/, () => {
      const generateLineData = (name: string) => {
        return {
          name,
          count: Mock.Random.natural(20, 2000),
          value: Array.from({ length: 8 }).fill(0).map(() => Mock.Random.natural(800, 4000)),
        }
      }
      const xAxis = Array.from({ length: 8 }).fill(0).map((_item, index) => {
        return `12.1${index}`
      })
      return successResponseWrap({
        xAxis,
        data: [
          generateLineData('内容生产量'),
          generateLineData('内容点击量'),
          generateLineData('内容曝光量'),
          generateLineData('活跃用户数'),
        ],
      })
    })
  },
})
