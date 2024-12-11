// @ts-ignore

export default [
  {
    url: '/v1/corp/web/avatar-upload',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "url": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/tmp/20230428/3/1682669682-110_80.png" } }, check(body, {}))
    }
  },
  {
    url: '/v1/corp/web/file-upload',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "url": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/tmp/20230428/3/1682669682-110_80.png" } }, check(body, {}))
    }
  },
  {
    url: '/v1/corp/web/ptturl-to-mp3url',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "url": "http://businessaudio.oss-cn-shenzhen.aliyuncs.com/media/service/103079215545/20251024audio/441_1729738955_3.mp3" } }, check(body, { "ptturl": "http://businessaudio.oss-cn-shenzhen.aliyuncs.com/media/service/103079215545/20251024audio/441_1729738955_3" }))
    }
  },
  {
    url: '/v1/corp/web/send-sms-verifycode',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功" }, check(body, { "phone": "18675500568", "country_code": "86", "sms_type": "regist", "verify_code": "ufc6" }))
    }
  },
  {
    url: '/v1/corp/web/regist',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "user_name": "20100114", "country_code": "0", "password": "f3072627eff7ae270288d7804842c321" } }, check(body, { "phone": "13353236154", "verify_code": "412604", "password": "e10adc3949ba59abbe56e057f20f883e" }))
    }
  },
  {
    url: '/v1/corp/web/login-by-phone',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "user": { "id": 1253488, "num": "70014762", "job_num": "1253488", "sex": 0, "name": "ent98164680", "bind_phone": "13353236455", "country_code": "86", "avatar": "http://favicon.weila.hk/default/user.png" }, "account": { "user_name": "70014762", "country_code": "0", "password": "d812f2f4174540773da1d03f635d98d6" }, "org": { "num": 100130, "name": "微喇测试", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/a/b85fb875.jpg", "creator": { "id": 1253488, "num": "70014762", "job_num": "1253488", "sex": 0, "name": "ent98164680", "avatar": "http://favicon.weila.hk/default/user.png" }, "created": 1731986807, "member_cnt": 6, "group_cnt": 1, "group_ver": 1732692310, "address_ver": 1732772565, "device_cnt": 0, "device_ver": 1 }, "access_token": "a5c47f3c03a4d549edbf7790b2ad0a2d", "expires_in": 86400, "refresh_token": "c9cbc2355da45c7a64b837f2ebed0070" } }, check(body, { "phone": "13353236455", "password": "e10adc3949ba59abbe56e057f20f883e" }))
    }
  },
  {
    url: '/v1/corp/web/login-by-name',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "user": { "id": 1253488, "num": "70014762", "sex": 0, "name": "ent98164680", "bind_phone": "13353236455", "country_code": "86", "avatar": "http://favicon.weila.hk/default/user.png" }, "account": { "user_name": "70014762", "country_code": "0", "password": "27388e8b38d2d7491c4986e3b01a7705" }, "org": { "num": 100130, "name": "微喇测试", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/a/b85fb875.jpg", "creator": { "id": 1253488, "num": "70014762", "sex": 0, "name": "ent98164680", "avatar": "http://favicon.weila.hk/default/user.png" }, "created": 1731986807, "member_cnt": 4, "group_cnt": 1, "group_ver": 1731989765, "address_ver": 1732001188, "device_cnt": 0, "device_ver": 1 }, "access_token": "949fbf405308d13736afd3bc43f4b174", "expires_in": 86400, "refresh_token": "224a637da6f3a01796126ea117daa4e1" } }, check(body, { "user_name": "70014622", "password": "e10adc3949ba59abbe56e057f20f883e" }))
    }
  },
  {
    url: '/v1/corp/web/login',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "user": { "id": 1253488, "num": "70014762", "job_num": "1253488", "sex": 0, "name": "ent98164680", "bind_phone": "13353236455", "country_code": "86", "avatar": "http://favicon.weila.hk/default/user.png" }, "account": { "user_name": "70014762", "country_code": "0", "password": "0717ae49623e4774e067d6e1a9787d6f" }, "org": { "num": 100130, "name": "微喇测试", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/a/b85fb875.jpg", "creator": { "id": 1253488, "num": "70014762", "job_num": "1253488", "sex": 0, "name": "ent98164680", "avatar": "http://favicon.weila.hk/default/user.png" }, "created": 1731986807, "member_cnt": 6, "group_cnt": 1, "group_ver": 1732692310, "address_ver": 1733107927, "device_cnt": 0, "device_ver": 1 }, "access_token": "37c9ac2dec9e41f4c142daf5f831c7d8", "expires_in": 86400, "refresh_token": "bf83125b7df32acd88c5758e612e1e3c" } }, check(body, { "account": "13353236455", "password": "e10adc3949ba59abbe56e057f20f883e" }))
    }
  },
  {
    url: '/v1/sessions/refresh',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "access_token": "1e7593558560b0c816c73f55e4a3ce66", "expires_in": 86400, "refresh_token": "cb17207d38a8c731e1be101c3f80334b" } }, check(body, { "refresh_token": "201e4a25ecf1213a55a5ea27003d6d6e" }))
    }
  },
  {
    url: '/v1/corp/web/reset-password',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功" }, check(body, { "phone": "16675441248", "country_code": "86", "verify_code": "143399", "password": "e10adc3949ba59abbe56e057f20f883e" }))
    }
  },
  {
    url: '/v1/corp/web/org-create',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "org": { "num": 100021, "name": "微喇测试", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100021/a/346d7956.jpg", "intro": "111111111111111111111", "created": 1730198941, "member_cnt": 1, "group_cnt": 0, "group_ver": 1, "address_ver": 1, "device_cnt": 0, "device_ver": 1 } } }, check(body, { "name": "微喇测试", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100011/a/0e9763d6.jpg" }))
    }
  },
  {
    url: '/v1/corp/web/org-change',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "corp": { "num": 100021, "name": "222222", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100021/a/346d7956.jpg?v=1730198963", "intro": "123123123", "created": 1730198941, "member_cnt": 1, "group_cnt": 0, "group_ver": 1, "address_ver": 1, "device_cnt": 0, "device_ver": 1 } } }, check(body, { "org_num": 100021, "name": "222222", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100040/a/8ea474b7.jpg" }))
    }
  },
  {
    url: '/v1/corp/web/org-my-org',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "corp": { "num": 100040, "name": "222222", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100040/a/8ea474b7.jpg?v=1730197031", "intro": "123123123", "created": 1730196879, "member_cnt": 1, "group_cnt": 0, "group_ver": 1, "address_ver": 1, "device_cnt": 0, "device_ver": 1 } } }, check(body, {}))
    }
  },
  {
    url: '/v1/corp/web/user-selfinfo',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "user": { "id": 1253437, "num": "70010607", "sex": 0, "name": "ent15800121", "bind_phone": "13353236155", "country_code": "86", "avatar": "http://favicon.weila.hk/default/user.png" } } }, check(body, {}))
    }
  },
  {
    url: '/v1/corp/web/user-change-password',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功" }, check(body, { "old_password": "578ae0acf922151e0577b7ec4ff4348e", "new_password": "e10adc3949ba59abbe56e057f20f883e" }))
    }
  },
  {
    url: '/v1/corp/web/user-bind-phone',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功" }, check(body, { "phone": "13353236155", "password": "e10adc3949ba59abbe56e057f20f883e", "verify_code": "143399" }))
    }
  },
  {
    url: '/v1/corp/web/get-address-list',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "address_list": { "version": 1732772565, "members": [{ "user_id": 1253488, "user_num": "70014762", "job_num": "1253488", "sex": 0, "name": "ent98164680", "avatar": "http://favicon.weila.hk/default/user.png", "dept_id": 0, "country_code": "86", "phone": "13353236455", "type": 255, "tts": 0, "loc_share": 0, "track": 0, "state": 0, "created": 1731986785, "online": 0 }], "depts": [{ "id": 1, "name": "研发部", "members": [{ "user_id": 1247754, "user_num": "30010197", "job_num": "1247754", "sex": 1, "name": "CF01_2", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1247754/a/c4c83dd3.jpg", "dept_id": 1, "country_code": "86", "phone": "1862222222", "type": 1, "tts": 0, "loc_share": 1, "track": 1, "state": 0, "created": 1731987480, "online": 0 }, { "user_id": 1253464, "user_num": "30015845", "job_num": "1253464", "sex": 1, "name": "CF01_3", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253464/a/f7041816.jpg", "dept_id": 1, "country_code": "86", "phone": "1862222222", "type": 1, "tts": 0, "loc_share": 1, "track": 1, "state": 0, "created": 1731987604, "online": 0 }] }, { "id": 11, "name": "研发部1", "members": [{ "user_id": 1253502, "user_num": "70014421", "job_num": "1253502", "sex": 1, "name": "44444444", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253502/a/66a35a85.jpg", "dept_id": 11, "country_code": "86", "phone": "18644444444", "type": 0, "tts": 1, "loc_share": 1, "track": 0, "state": 0, "created": 1732607987, "online": 0 }] }, { "id": 14, "name": "研发部12", "members": [{ "user_id": 1253504, "user_num": "70014064", "job_num": "1253504", "sex": 1, "name": "44444444", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253504/a/47e3351d.jpg", "dept_id": 14, "country_code": "86", "phone": "18644444444", "type": 0, "tts": 1, "loc_share": 1, "track": 0, "state": 0, "created": 1732617044, "online": 0 }] }] } } }, check(body, { "org_num": 100130 }))
    }
  },
  {
    url: '/v1/corp/web/dept-create',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "id": 1, "name": "研发部" } }, check(body, { "org_num": 100130, "name": "研发部" }))
    }
  },
  {
    url: '/v1/corp/web/dept-change',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "id": 1, "name": "研发部12" } }, check(body, { "org_num": 100021, "dept_id": 1, "name": "研发部12" }))
    }
  },
  {
    url: '/v1/corp/web/dept-delete',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功" }, check(body, { "org_num": 100021, "dept_id": 1 }))
    }
  },
  {
    url: '/v1/corp/web/dept-getall',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "depts": [{ "id": 1, "name": "研发部", "user_count": 3 }, { "id": 11, "name": "研发部1", "user_count": 1 }] } }, check(body, { "org_num": 100130 }))
    }
  },
  {
    url: '/v1/corp/web/dept-member-getall',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "members": [{ "user_id": 1253341, "user_num": "30015778", "sex": 1, "name": "测试机Linux", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253341/a/38035fcb.jpg", "dept_id": 1, "country_code": "86", "phone": "1862222222", "type": 1, "tts": 0, "loc_share": 1, "track": 1, "state": 0, "created": 1731987269, "online": 0, "dept_name": "研发部" }, { "user_id": 1247754, "user_num": "30010197", "sex": 1, "name": "测试机Linux", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1247754/a/c4c83dd3.jpg", "dept_id": 1, "country_code": "86", "phone": "1862222222", "type": 1, "tts": 0, "loc_share": 1, "track": 1, "state": 0, "created": 1731987480, "online": 0, "dept_name": "研发部" }, { "user_id": 1253464, "user_num": "30015845", "sex": 1, "name": "测试机Linux", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253464/a/f7041816.jpg", "dept_id": 1, "country_code": "86", "phone": "1862222222", "type": 1, "tts": 0, "loc_share": 1, "track": 1, "state": 0, "created": 1731987604, "online": 0, "dept_name": "研发部" }] } }, check(body, { "org_num": 100130, "dept_id": 1 }))
    }
  },
  {
    url: '/v1/corp/web/member-create',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "org_num": 100130, "user_id": 1253510, "user_num": "70013569", "job_num": "123", "sex": 1, "name": "44444444", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253510/a/392f7ad8.jpg", "dept_id": 14, "country_code": "86", "phone": "18644444444", "type": 0, "tts": 1, "loc_share": 1, "track": 0, "state": 0, "created": 1733107927 } }, check(body, { "org_num": 100130, "name": "44444444", "job_num": "123", "password": "e10adc3949ba59abbe56e057f20f883e", "dept_id": 14, "sex": 1, "avatar": "http://favicon.weila.hk/default/session.png", "phone": "18644444444", "tts": 1, "loc_share": 1 }))
    }
  },
  {
    url: '/v1/corp/web/member-add-device',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "user_id": 1253448, "org_num": 100073, "job_num": "123", "dept_id": 6, "country_code": "86", "phone": "18611111111", "type": 1, "tts": 0, "loc_share": 0, "track": 1, "state": 0, "created": 1730453616, "user_num": "30015839", "sex": 0, "name": "222222", "avatar": "http://favicon.weila.hk/default/group.png" } }, check(body, { "org_num": 100130, "verify_code": "411691", "name": "测试机Linux", "job_num": "123", "dept_id": 1, "sex": 0, "avatar": "http://favicon.weila.hk/default/group.png", "phone": "18611111111", "tts": 1, "loc_share": 1, "track": 1 }))
    }
  },
  {
    url: '/v1/corp/web/member-change',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "user_id": 1253437, "org_num": 100021, "job_num": "123", "dept_id": 1, "country_code": "86", "phone": "1862222222", "type": 2, "state": 0, "created": 1730196254, "user_num": "70010607", "sex": 1, "name": "33333", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100021/u/1253437/a/4b00bbb0.jpg" } }, check(body, { "org_num": 100130, "member_id": 1253341, "name": "CF01_8070", "job_num": "123", "dept_id": 1, "sex": 1, "avatar": "http://favicon.weila.hk/default/session.png", "phone": "1862222222", "tts": 0, "loc_share": 1, "track": 1 }))
    }
  },
  {
    url: '/v1/corp/web/member-change-state',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "user_id": 1253443, "org_num": 100021, "job_num": "123", "dept_id": 1, "country_code": "86", "phone": "1862222222", "type": 0, "state": 1, "created": 1730267118, "user_num": "70012325", "sex": 1, "name": "33333", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100021/u/1253443/a/58785cbe.jpg" } }, check(body, { "org_num": 100021, "member_id": 1253443, "state": 0 }))
    }
  },
  {
    url: '/v1/corp/web/member-delete',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功" }, check(body, { "org_num": 100073, "member_id": 1253464 }))
    }
  },
  {
    url: '/v1/corp/web/member-reset-password',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功" }, check(body, { "org_num": 100021, "member_id": 1253443, "password": "e10adc3949ba59abbe56e057f20f883e" }))
    }
  },
  {
    url: '/v1/corp/web/member-getall',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "members": [{ "user_id": 1253488, "user_num": "70014762", "job_num": "1253488", "sex": 0, "name": "ent98164680", "avatar": "http://favicon.weila.hk/default/user.png", "dept_id": 0, "country_code": "86", "phone": "13353236455", "type": 255, "tts": 0, "loc_share": 0, "track": 0, "state": 0, "created": 1731986785, "online": 0, "dept_name": "" }, { "user_id": 1247754, "user_num": "30010197", "job_num": "1247754", "sex": 1, "name": "CF01_2", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1247754/a/c4c83dd3.jpg", "dept_id": 1, "country_code": "86", "phone": "1862222222", "type": 1, "tts": 0, "loc_share": 1, "track": 1, "state": 0, "created": 1731987480, "online": 0, "dept_name": "研发部" }, { "user_id": 1253464, "user_num": "30015845", "job_num": "1253464", "sex": 1, "name": "CF01_3", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253464/a/f7041816.jpg", "dept_id": 1, "country_code": "86", "phone": "1862222222", "type": 1, "tts": 0, "loc_share": 1, "track": 1, "state": 0, "created": 1731987604, "online": 0, "dept_name": "研发部" }, { "user_id": 1253502, "user_num": "70014421", "job_num": "1253502", "sex": 1, "name": "44444444", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253502/a/66a35a85.jpg", "dept_id": 11, "country_code": "86", "phone": "18644444444", "type": 0, "tts": 1, "loc_share": 1, "track": 0, "state": 0, "created": 1732607987, "online": 0, "dept_name": "研发部1" }, { "user_id": 1253504, "user_num": "70014064", "job_num": "1253504", "sex": 1, "name": "44444444", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253504/a/47e3351d.jpg", "dept_id": 14, "country_code": "86", "phone": "18644444444", "type": 0, "tts": 1, "loc_share": 1, "track": 0, "state": 0, "created": 1732617044, "online": 0, "dept_name": "研发部12" }, { "user_id": 1253510, "user_num": "70013569", "job_num": "123", "sex": 1, "name": "44444444", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253510/a/392f7ad8.jpg", "dept_id": 14, "country_code": "86", "phone": "18644444444", "type": 0, "tts": 1, "loc_share": 1, "track": 0, "state": 0, "created": 1733107927, "online": 0, "dept_name": "研发部12" }] } }, check(body, { "org_num": 100130 }))
    }
  },
  {
    url: '/v1/corp/web/group-create',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "id": 80000528, "name": "测试群3", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80000528/a/3e01b28d.jpg", "user_count": 0, "member_version": 1, "burst_mode": 0, "shutup": 0, "created": 1730452576 } }, check(body, { "org_num": 100130, "name": "测试群", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100011/a/0e9763d6.jpg", "burst_mode": 0 }))
    }
  },
  {
    url: '/v1/corp/web/group-delete',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功" }, check(body, { "group_id": 80000180 }))
    }
  },
  {
    url: '/v1/corp/web/group-getall',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "groups": [{ "id": 80000528, "name": "测试群3", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80000528/a/3e01b28d.jpg", "creator": 1253444, "type": 17, "user_count": 2, "member_version": 3, "burst_mode": 0, "shutup": 0, "created": 1730452576 }, { "id": 80010090, "name": "测试群3", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80010090/a/707546dd.jpg", "creator": 1253444, "type": 17, "user_count": 0, "member_version": 1, "burst_mode": 0, "shutup": 0, "created": 1730452310 }] } }, check(body, { "org_num": "100073" }))
    }
  },
  {
    url: '/v1/corp/web/group-member-add',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "members": [{ "user_id": 1253448, "user_num": "30015839", "sex": 0, "name": "222222", "avatar": "http://favicon.weila.hk/default/group.png" }] } }, check(body, { "group_id": 81000335, "member_ids": [1253464, 1247754, 1253341] }))
    }
  },
  {
    url: '/v1/corp/web/group-member-change',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "members": [{ "user_id": 1253497, "user_num": "70014622", "sex": 0, "name": "清湖-企业主", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100067/u/1253497/a/3f69a555.jpg", "dept_id": 0, "country_code": "86", "phone": "18926020729", "type": 255, "tts": 1, "loc_share": 0, "track": 0, "state": 0, "created": 1732263378, "online": 0, "dept_name": "" }, { "user_id": 1253500, "user_num": "70012637", "sex": 0, "name": "技术-王五", "avatar": "http://favicon.weila.hk/default/user.png", "dept_id": 2, "country_code": "86", "phone": "13800005555", "type": 0, "tts": 0, "loc_share": 1, "track": 0, "state": 0, "created": 1732264968, "online": 0, "dept_name": "技术部" }] } }, check(body, { "group_id": 81000738, "member_id": 1253499, "prority": 1, "tts": 1, "loc_share": 1 }))
    }
  },
  {
    url: '/v1/corp/web/group-member-delete',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "members": [{ "user_id": 1253444, "prority": 0, "tts": 0, "loc_share": 0, "user_num": "70015325", "sex": 0, "name": "ent19949504", "avatar": "http://favicon.weila.hk/default/user.png" }, { "user_id": 1253446, "prority": 0, "tts": 0, "loc_share": 0, "user_num": "70011173", "sex": 0, "name": "222222", "avatar": "http://favicon.weila.hk/default/user.png" }] } }, check(body, { "group_id": 80000528, "member_ids": [1253464] }))
    }
  },
  {
    url: '/v1/corp/web/group-member-getall',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "members": [{ "user_id": 1253497, "user_num": "70014622", "sex": 0, "name": "清湖-企业主", "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100067/u/1253497/a/3f69a555.jpg", "dept_id": 0, "country_code": "86", "phone": "18926020729", "type": 255, "tts": 1, "loc_share": 0, "track": 0, "state": 0, "created": 1732263378, "online": 0, "dept_name": "" }, { "user_id": 1253500, "user_num": "70012637", "sex": 0, "name": "技术-王五", "avatar": "http://favicon.weila.hk/default/user.png", "dept_id": 2, "country_code": "86", "phone": "13800005555", "type": 0, "tts": 0, "loc_share": 1, "track": 0, "state": 0, "created": 1732264968, "online": 0, "dept_name": "技术部" }] } }, check(body, { "group_id": 81000738 }))
    }
  },
  // {
  //   url: '/v1/corp/web/location-get-track',
  //   method: 'POST',
  //   response: (res: any) => {
  //     const { body = {} } = res
  //     return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "tracks": [{ "latitude": 22.668835, "longitude": 115.070211, "created": 1731997061 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997121 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997181 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997241 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997301 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997361 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997421 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997481 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997541 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997601 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997661 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997721 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997781 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997841 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997901 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731997961 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998021 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998081 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998141 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998201 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998261 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998321 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998381 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998441 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998501 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998561 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998621 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998681 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998741 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998801 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998861 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998921 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731998981 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999041 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999106 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999168 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999228 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999288 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999349 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999409 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999470 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999530 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999590 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999651 }, { "latitude": 22.668835, "longitude": 115.070211, "created": 1731999711 }] } }, check(body, { "user_id": 1253464, "date": "2024-11-19" }))
  //   }
  // },
  // {
  //   url: '/v1/corp/web/location-get-regeo',
  //   method: 'POST',
  //   response: (res: any) => {
  //     const { body = {} } = res
  //     return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "regeo": { "province": "广东省", "city": "珠海市", "district": "斗门区", "township": "乾务镇", "road": "270省道", "number": "", "addr": "", "name": "270省道富泉虾苗场西732米", "adcode": "440403", "matchs": { "aoi_name": "", "aoi_distance": 0, "poi_name": "270省道富泉虾苗场西732米", "poi_distance": "732.954", "roadinter_name": "270省道与珠峰大道交叉口西南895米", "roadinter_distance": "895.218" }, "formatted_address": "乾务镇270省道270省道富泉虾苗场西732米" } } }, check(body, { "latitude": 22.13445, "longitude": 113.1344 }))
  //   }
  // },
  {
    url: '/v1/corp/web/message-get-group-history-message',
    method: 'POST',
    response: (res: any) => {
      const { body = {} } = res
      return Object.assign({ "errcode": 0, "errmsg": "请求成功", "data": { "messages": [{ "user_id": 1253341, "msg_id": 173198981, "content": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/media/corpgroup/81000335/20251119audio/1253341_1731989825_5?duration=5", "type": 2, "created": 1731989825 }, { "user_id": 1253341, "msg_id": 173198980, "content": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/media/corpgroup/81000335/20251119audio/1253341_1731989812_7?duration=7", "type": 2, "created": 1731989812 }, { "user_id": 1253341, "msg_id": 173198979, "content": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/media/corpgroup/81000335/20251119audio/1253341_1731989796_4?duration=4", "type": 2, "created": 1731989796 }] } }, check(body, { "group_id": 81000335, "msg_id": 0, "msg_count": 20 }))
    }
  },
] as const

export interface AvatarUploadPayload { }

export interface AvatarUploadModel { errcode: number; errmsg: string; data: { url: string; }; }

export interface FileUploadPayload { }

export interface FileUploadModel { errcode: number; errmsg: string; data: { url: string; }; }

export interface PtturlToMp3urlPayload { ptturl: string; }

export interface PtturlToMp3urlModel { errcode: number; errmsg: string; data: { url: string; }; }

export interface SendSmsVerifycodePayload { phone: string; country_code: string; sms_type: string; verify_code: string; }

export interface SendSmsVerifycodeModel { errcode: number; errmsg: string; }

export interface RegistPayload { phone: string; verify_code: string; password: string; }

export interface RegistModel { errcode: number; errmsg: string; data: { user_name: string; country_code: string; password: string; }; }

export interface LoginByPhonePayload { phone: string; password: string; }

export interface LoginByPhoneModel { errcode: number; errmsg: string; data: { user: { id: number; num: string; job_num: string; sex: number; name: string; bind_phone: string; country_code: string; avatar: string; }; account: { user_name: string; country_code: string; password: string; }; org: { num: number; name: string; avatar: string; creator: { id: number; num: string; job_num: string; sex: number; name: string; avatar: string; }; created: number; member_cnt: number; group_cnt: number; group_ver: number; address_ver: number; device_cnt: number; device_ver: number; }; access_token: string; expires_in: number; refresh_token: string; }; }

export interface LoginByNamePayload { user_name: string; password: string; }

export interface LoginByNameModel { errcode: number; errmsg: string; data: { user: { id: number; num: string; sex: number; name: string; bind_phone: string; country_code: string; avatar: string; }; account: { user_name: string; country_code: string; password: string; }; org: { num: number; name: string; avatar: string; creator: { id: number; num: string; sex: number; name: string; avatar: string; }; created: number; member_cnt: number; group_cnt: number; group_ver: number; address_ver: number; device_cnt: number; device_ver: number; }; access_token: string; expires_in: number; refresh_token: string; }; }

export interface LoginPayload { account: string; password: string; }

export interface LoginModel { errcode: number; errmsg: string; data: { user: { id: number; num: string; job_num: string; sex: number; name: string; bind_phone: string; country_code: string; avatar: string; }; account: { user_name: string; country_code: string; password: string; }; org: { num: number; name: string; avatar: string; creator: { id: number; num: string; job_num: string; sex: number; name: string; avatar: string; }; created: number; member_cnt: number; group_cnt: number; group_ver: number; address_ver: number; device_cnt: number; device_ver: number; }; access_token: string; expires_in: number; refresh_token: string; }; }

export interface RefreshPayload { refresh_token: string; }

export interface RefreshModel { errcode: number; errmsg: string; data: { access_token: string; expires_in: number; refresh_token: string; }; }

export interface ResetPasswordPayload { phone: string; country_code: string; verify_code: string; password: string; }

export interface ResetPasswordModel { errcode: number; errmsg: string; }

export interface OrgCreatePayload { name: string; avatar: string; }

export interface OrgCreateModel { errcode: number; errmsg: string; data: { org: { num: number; name: string; avatar: string; intro: string; created: number; member_cnt: number; group_cnt: number; group_ver: number; address_ver: number; device_cnt: number; device_ver: number; }; }; }

export interface OrgChangePayload { org_num: number; name: string; avatar: string; }

export interface OrgChangeModel { errcode: number; errmsg: string; data: { corp: { num: number; name: string; avatar: string; intro: string; created: number; member_cnt: number; group_cnt: number; group_ver: number; address_ver: number; device_cnt: number; device_ver: number; }; }; }

export interface OrgMyOrgPayload { }

export interface OrgMyOrgModel { errcode: number; errmsg: string; data: { corp: { num: number; name: string; avatar: string; intro: string; created: number; member_cnt: number; group_cnt: number; group_ver: number; address_ver: number; device_cnt: number; device_ver: number; }; }; }

export interface UserSelfinfoPayload { }

export interface UserSelfinfoModel { errcode: number; errmsg: string; data: { user: { id: number; num: string; sex: number; name: string; bind_phone: string; country_code: string; avatar: string; }; }; }

export interface UserChangePasswordPayload { old_password: string; new_password: string; }

export interface UserChangePasswordModel { errcode: number; errmsg: string; }

export interface UserBindPhonePayload { phone: string; password: string; verify_code: string; }

export interface UserBindPhoneModel { errcode: number; errmsg: string; }

export interface GetAddressListPayload { org_num: number; }

export interface GetAddressListModel { errcode: number; errmsg: string; data: { address_list: { version: number; members: Array<{ user_id: number; user_num: string; job_num: string; sex: number; name: string; avatar: string; dept_id: number; country_code: string; phone: string; type: number; tts: number; loc_share: number; track: number; state: number; created: number; online: number; }>; depts: Array<{ id: number; name: string; members: Array<{ user_id: number; user_num: string; job_num: string; sex: number; name: string; avatar: string; dept_id: number; country_code: string; phone: string; type: number; tts: number; loc_share: number; track: number; state: number; created: number; online: number; }>; }>; }; }; }

export interface DeptCreatePayload { org_num: number; name: string; }

export interface DeptCreateModel { errcode: number; errmsg: string; data: { id: number; name: string; }; }

export interface DeptChangePayload { org_num: number; dept_id: number; name: string; }

export interface DeptChangeModel { errcode: number; errmsg: string; data: { id: number; name: string; }; }

export interface DeptDeletePayload { org_num: number; dept_id: number; }

export interface DeptDeleteModel { errcode: number; errmsg: string; }

export interface DeptGetallPayload { org_num: number; }

export interface DeptGetallModel { errcode: number; errmsg: string; data: { depts: Array<{ id: number; name: string; user_count: number; }>; }; }

export interface DeptMemberGetallPayload { org_num: number; dept_id: number; }

export interface DeptMemberGetallModel { errcode: number; errmsg: string; data: { members: Array<{ user_id: number; user_num: string; sex: number; name: string; avatar: string; dept_id: number; country_code: string; phone: string; type: number; tts: number; loc_share: number; track: number; state: number; created: number; online: number; dept_name: string; }>; }; }

export interface MemberCreatePayload { org_num: number; name: string; job_num: string; password: string; dept_id: number; sex: number; avatar: string; phone: string; tts: number; loc_share: number; }

export interface MemberCreateModel { errcode: number; errmsg: string; data: { org_num: number; user_id: number; user_num: string; job_num: string; sex: number; name: string; avatar: string; dept_id: number; country_code: string; phone: string; type: number; tts: number; loc_share: number; track: number; state: number; created: number; }; }

export interface MemberAddDevicePayload { org_num: number; verify_code: string; name: string; job_num: string; dept_id: number; sex: number; avatar: string; phone: string; tts: number; loc_share: number; track: number; }

export interface MemberAddDeviceModel { errcode: number; errmsg: string; data: { user_id: number; org_num: number; job_num: string; dept_id: number; country_code: string; phone: string; type: number; tts: number; loc_share: number; track: number; state: number; created: number; user_num: string; sex: number; name: string; avatar: string; }; }

export interface MemberChangePayload { org_num: number; member_id: number; name: string; job_num: string; dept_id: number; sex: number; avatar: string; phone: string; tts: number; loc_share: number; track: number; }

export interface MemberChangeModel { errcode: number; errmsg: string; data: { user_id: number; org_num: number; job_num: string; dept_id: number; country_code: string; phone: string; type: number; state: number; created: number; user_num: string; sex: number; name: string; avatar: string; }; }

export interface MemberChangeStatePayload { org_num: number; member_id: number; state: number; }

export interface MemberChangeStateModel { errcode: number; errmsg: string; data: { user_id: number; org_num: number; job_num: string; dept_id: number; country_code: string; phone: string; type: number; state: number; created: number; user_num: string; sex: number; name: string; avatar: string; }; }

export interface MemberDeletePayload { org_num: number; member_id: number; }

export interface MemberDeleteModel { errcode: number; errmsg: string; }

export interface MemberResetPasswordPayload { org_num: number; member_id: number; password: string; }

export interface MemberResetPasswordModel { errcode: number; errmsg: string; }

export interface MemberGetallPayload { org_num: number; }

export interface MemberGetallModel { errcode: number; errmsg: string; data: { members: Array<{ user_id: number; user_num: string; job_num: string; sex: number; name: string; avatar: string; dept_id: number; country_code: string; phone: string; type: number; tts: number; loc_share: number; track: number; state: number; created: number; online: number; dept_name: string; }>; }; }

export interface GroupCreatePayload { org_num: number; name: string; avatar: string; burst_mode: number; }

export interface GroupCreateModel { errcode: number; errmsg: string; data: { id: number; name: string; avatar: string; user_count: number; member_version: number; burst_mode: number; shutup: number; created: number; }; }

export interface GroupDeletePayload { group_id: number; }

export interface GroupDeleteModel { errcode: number; errmsg: string; }

export interface GroupGetallPayload { org_num: string; }

export interface GroupGetallModel { errcode: number; errmsg: string; data: { groups: Array<{ id: number; name: string; avatar: string; creator: number; type: number; user_count: number; member_version: number; burst_mode: number; shutup: number; created: number; }>; }; }

export interface GroupMemberAddPayload { group_id: number; member_ids: Array<number>; }

export interface GroupMemberAddModel { errcode: number; errmsg: string; data: { members: Array<{ user_id: number; user_num: string; sex: number; name: string; avatar: string; }>; }; }

export interface GroupMemberChangePayload { group_id: number; member_id: number; prority: number; tts: number; loc_share: number; }

export interface GroupMemberChangeModel { errcode: number; errmsg: string; data: { members: Array<{ user_id: number; user_num: string; sex: number; name: string; avatar: string; dept_id: number; country_code: string; phone: string; type: number; tts: number; loc_share: number; track: number; state: number; created: number; online: number; dept_name: string; }>; }; }

export interface GroupMemberDeletePayload { group_id: number; member_ids: Array<number>; }

export interface GroupMemberDeleteModel { errcode: number; errmsg: string; data: { members: Array<{ user_id: number; prority: number; tts: number; loc_share: number; user_num: string; sex: number; name: string; avatar: string; }>; }; }

export interface GroupMemberGetallPayload { group_id: number; }

export interface GroupMemberGetallModel { errcode: number; errmsg: string; data: { members: Array<{ user_id: number; user_num: string; sex: number; name: string; avatar: string; dept_id: number; country_code: string; phone: string; type: number; tts: number; loc_share: number; track: number; state: number; created: number; online: number; dept_name: string; }>; }; }

export interface LocationGetTrackPayload { user_id: number; date: string; }

export interface LocationGetTrackModel { errcode: number; errmsg: string; data: { tracks: Array<{ latitude: number; longitude: number; created: number; }>; }; }

export interface LocationGetRegeoPayload { latitude: number; longitude: number; }

export interface LocationGetRegeoModel { errcode: number; errmsg: string; data: { regeo: { province: string; city: string; district: string; township: string; road: string; number: string; addr: string; name: string; adcode: string; matchs: { aoi_name: string; aoi_distance: number; poi_name: string; poi_distance: string; roadinter_name: string; roadinter_distance: string; }; formatted_address: string; }; }; }

export interface MessageGetGroupHistoryMessagePayload { group_id: number; msg_id: number; msg_count: number; }

export interface MessageGetGroupHistoryMessageModel { errcode: number; errmsg: string; data: { messages: Array<{ user_id: number; msg_id: number; content: string; type: number; created: number; }>; }; }

export function check(obj1: object, obj2: object) {
  const keys = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys.length !== keys2.length)
    return { errcode: 1, errmsg: `Length mismatch: ${keys.length} !== ${keys2.length}` }

  for (const key of keys) {
    if (!(key in obj2))
      return { errcode: 1, errmsg: `Missing key: ${key}` }

    const val1 = obj1[key as keyof typeof obj1]
    const val2 = obj2[key as keyof typeof obj2]

    if (typeof val1 !== typeof val2) {
      if (typeof val1 === 'string' && val1 === '' && val2 !== '')
        return { errcode: 1, errmsg: `${key} is empty string` }
      return { errcode: 1, errmsg: `Type mismatch for key: ${key}` }
    }
  }

  return { errcode: 0, errmsg: '' }
}