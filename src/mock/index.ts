import Mock from 'mockjs'

import './user'
import './message-box'

import '../../src/views/dashboard/workplace/mock'
/** simple */
import '../../src/views/dashboard/monitor/mock'

import '../../src/views/list/card/mock'
import '../../src/views/list/search-table/mock'

import '../../src/views/form/step/mock'

import '../../src/views/profile/basic/mock'

import '../../src/views/visualization/data-analysis/mock'
import '../../src/views/visualization/multi-dimension-data-analysis/mock'

import '../../src/views/user/info/mock'
import '../../src/views/user/setting/mock'
/** simple end */

Mock.setup({
  timeout: '600-1000',
})
