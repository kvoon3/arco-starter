import Mock from 'mockjs'
import type { PostData } from '~/types/global'
import setupMock, { successResponseWrap } from '~/utils/setup-mock'

setupMock({
  setup() {
    Mock.mock(
      /\/api\/public-opinion-analysis/,
      (params: PostData) => {
        const { quota = 'visitors' } = JSON.parse(params.body)
        if (['visitors', 'comment'].includes(quota)) {
          const year = new Date().getFullYear()
          const getLineData = (name: number) => {
            return Array.from({ length: 12 }).fill(0).map((_item, index) => ({
              x: `${index + 1}月`,
              y: Mock.Random.natural(0, 100),
              name: String(name),
            }))
          }
          return successResponseWrap({
            count: 5670,
            growth: 206.32,
            chartData: [...getLineData(year), ...getLineData(year - 1)],
          })
        }
        if (['published'].includes(quota)) {
          const year = new Date().getFullYear()
          const getLineData = (name: number) => {
            return Array.from({ length: 12 }).fill(0).map((_item, index) => ({
              x: `${index + 1}日`,
              y: Mock.Random.natural(20, 100),
              name: String(name),
            }))
          }
          return successResponseWrap({
            count: 5670,
            growth: 206.32,
            chartData: [...getLineData(year)],
          })
        }
        return successResponseWrap({
          count: 5670,
          growth: 206.32,
          chartData: [
            // itemStyle for demo
            { name: '文本类', value: 25, itemStyle: { color: '#8D4EDA' } },
            { name: '图文类', value: 35, itemStyle: { color: '#165DFF' } },
            { name: '视频类', value: 40, itemStyle: { color: '#00B2FF' } },
          ],
        })
      },
    )

    Mock.mock(/\/api\/content-period-analysis/, () => {
      const getLineData = (name: string) => {
        return {
          name,
          value: Array.from({ length: 12 }).fill(0).map(() => Mock.Random.natural(30, 90)),
        }
      }
      return successResponseWrap({
        xAxis: Array.from({ length: 12 }).fill(0).map((_item, index) => `${index * 2}:00`),
        data: [
          getLineData('纯文本'),
          getLineData('图文类'),
          getLineData('视频类'),
        ],
      })
    })

    Mock.mock(/\/api\/content-publish/, () => {
      const generateLineData = (name: string) => {
        const result = {
          name,
          x: [] as string[],
          y: [] as number[],
        }
        Array.from({ length: 12 }).fill(0).forEach((_item, index) => {
          result.x.push(`${index * 2}:00`)
          result.y.push(Mock.Random.natural(1000, 3000))
        })
        return result
      }
      return successResponseWrap([
        generateLineData('纯文本'),
        generateLineData('图文类'),
        generateLineData('视频类'),
      ])
    })

    Mock.mock(/\/api\/popular-author\/list/, () => {
      const generateData = () => {
        const list = Array.from({ length: 7 }).fill(0).map((_item, index) => ({
          ranking: index + 1,
          author: Mock.mock('@ctitle(5)'),
          contentCount: Mock.mock(/\d{4}/),
          clickCount: Mock.mock(/\d{4}/),
        }))
        return {
          list,
        }
      }
      return successResponseWrap({
        ...generateData(),
      })
    })
  },
})
