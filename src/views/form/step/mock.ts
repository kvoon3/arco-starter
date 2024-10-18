import Mock from 'mockjs'
import setupMock, { successResponseWrap } from '~/utils/setup-mock'

setupMock({
  setup() {
    // submit
    Mock.mock(/\/api\/channel-form\/submit/, () => {
      return successResponseWrap('ok')
    })
  },
})
