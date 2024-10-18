import setupMock, { successResponseWrap } from '~/utils/setup-mock'
import Mock from 'mockjs'

setupMock({
  setup() {
    // submit
    Mock.mock(/\/api\/channel-form\/submit/, () => {
      return successResponseWrap('ok')
    })
  },
})
