// WARNING: 该文件通过项目内脚本自动生成，请勿手动更改
// @ts-ignore

import { z } from 'zod'

export default [
{
  url: '/v1/corp/web/send-sms-verifycode',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功"
}, check(body, {
    "phone": "18675500568",
    "country_code": "86",
    "sms_type": "regist",
    "verify_code": "ufc6"
}))
  }
},
{
  url: '/v1/corp/web/regist',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user_name": "20100114",
		"country_code": "0",
		"password": "f3072627eff7ae270288d7804842c321"
	}
}, check(body, {
	"phone": "13353236154",
	"verify_code": "412604",
	"password":"e10adc3949ba59abbe56e057f20f883e"
}))
  }
},
{
  url: '/v1/corp/web/login-by-phone',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user": {
			"id": 1253488,
			"num": "70014762",
			"sex": 0,
			"name": "ent98164680",
			"bind_phone": "13353236455",
			"country_code": "86",
			"avatar": "http://favicon.weila.hk/default/user.png"
		},
		"account": {
			"user_name": "70014762",
			"country_code": "0",
			"password": "7f4c9356c38de7e5d3ff9294206af974"
		},
		"org": {
			"num": 100130,
			"name": "微喇测试",
			"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/a/b85fb875.jpg",
			"creator": {
				"id": 1253488,
				"num": "70014762",
				"sex": 0,
				"name": "ent98164680",
				"avatar": "http://favicon.weila.hk/default/user.png"
			},
			"created": 1731986807,
			"member_cnt": 4,
			"group_cnt": 1,
			"group_ver": 1731989765,
			"address_ver": 1732001188,
			"device_cnt": 0,
			"device_ver": 1
		},
		"access_token": "32b627465b68a866603ab265cf408c67",
		"expires_in": 86400,
		"refresh_token": "3a98cc3ac7f9db4c823a3d1413d667a9"
	}
}, check(body, {
	"phone": "13353236455",
	"password": "e10adc3949ba59abbe56e057f20f883e"
}))
  }
},
{
  url: '/v1/corp/web/login-by-name',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user": {
			"id": 1253488,
			"num": "70014762",
			"sex": 0,
			"name": "ent98164680",
			"bind_phone": "13353236455",
			"country_code": "86",
			"avatar": "http://favicon.weila.hk/default/user.png"
		},
		"account": {
			"user_name": "70014762",
			"country_code": "0",
			"password": "27388e8b38d2d7491c4986e3b01a7705"
		},
		"org": {
			"num": 100130,
			"name": "微喇测试",
			"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/a/b85fb875.jpg",
			"creator": {
				"id": 1253488,
				"num": "70014762",
				"sex": 0,
				"name": "ent98164680",
				"avatar": "http://favicon.weila.hk/default/user.png"
			},
			"created": 1731986807,
			"member_cnt": 4,
			"group_cnt": 1,
			"group_ver": 1731989765,
			"address_ver": 1732001188,
			"device_cnt": 0,
			"device_ver": 1
		},
		"access_token": "949fbf405308d13736afd3bc43f4b174",
		"expires_in": 86400,
		"refresh_token": "224a637da6f3a01796126ea117daa4e1"
	}
}, check(body, {
	"user_name": "70014762",
	"password": "e10adc3949ba59abbe56e057f20f883e"
}))
  }
},
{
  url: '/v1/sessions/refresh',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"access_token": "1e7593558560b0c816c73f55e4a3ce66",
		"expires_in": 86400,
		"refresh_token": "cb17207d38a8c731e1be101c3f80334b"
	}
}, check(body, {
	"refresh_token": "201e4a25ecf1213a55a5ea27003d6d6e"
}))
  }
},
{
  url: '/v1/corp/web/reset-password',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功"
}, check(body, {
	"phone": "16675441248",
	"country_code": "86",
	"verify_code": "143399",
	"password": "e10adc3949ba59abbe56e057f20f883e"
}))
  }
},
{
  url: '/v1/corp/web/org-create',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"org": {
			"num": 100021,
			"name": "微喇测试",
			"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100021/a/346d7956.jpg",
			"intro": "111111111111111111111",
			"created": 1730198941,
			"member_cnt": 1,
			"group_cnt": 0,
			"group_ver": 1,
			"address_ver": 1,
			"device_cnt": 0,
			"device_ver": 1
		}
	}
}, check(body, {
	"name": "微喇测试",
	"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100011/a/0e9763d6.jpg"
}))
  }
},
{
  url: '/v1/corp/web/org-change',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"corp": {
			"num": 100021,
			"name": "222222",
			"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100021/a/346d7956.jpg?v=1730198963",
			"intro": "123123123",
			"created": 1730198941,
			"member_cnt": 1,
			"group_cnt": 0,
			"group_ver": 1,
			"address_ver": 1,
			"device_cnt": 0,
			"device_ver": 1
		}
	}
}, check(body, {
	"org_num": 100021,
	"name": "222222",
	"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100040/a/8ea474b7.jpg"
}))
  }
},
{
  url: '/v1/corp/web/org-change',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"corp": {
			"org_number": "111861",
			"org_name": "111111",
			"org_avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/tmp/20230508/3/1683529371-110_80.png",
			"org_intro": "12222222",
			"org_created": "2023-10-26 19:30:05",
			"member_count": 1,
			"member_version": 1,
			"group_version": 1,
			"service": {
				"id": 29,
				"number": "100285",
				"name": "测试服务号",
				"avatar": "http://favicon.weila.hk/default/session.png",
				"intro": "微喇测试企业服务号",
				"url": "http:demo.weila.hk",
				"created": "2023-10-26 19:34:47"
			},
			"owner": {
				"user_id": 1247626,
				"user_number": "20100021",
				"sex": 0,
				"nick": "微喇80459583",
				"phone": "18675500568",
				"avatar": "http://favicon.weila.hk/default/user.png"
			}
		}
	}
}, check(body, {
	"org_num": 100021,
	"name": "222222",
	"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100040/a/8ea474b7.jpg"
}))
  }
},
{
  url: '/v1/corp/web/org-my-org',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"corp": {
			"num": 100040,
			"name": "222222",
			"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100040/a/8ea474b7.jpg?v=1730197031",
			"intro": "123123123",
			"created": 1730196879,
			"member_cnt": 1,
			"group_cnt": 0,
			"group_ver": 1,
			"address_ver": 1,
			"device_cnt": 0,
			"device_ver": 1
		}
	}
}, check(body, {
	"org_num": 100021,
	"name": "222222",
	"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100040/a/8ea474b7.jpg"
}))
  }
},
{
  url: '/v1/corp/web/user-selfinfo',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user": {
			"id": 1253437,
			"num": "70010607",
			"sex": 0,
			"name": "ent15800121",
			"bind_phone": "13353236155",
			"country_code": "86",
			"avatar": "http://favicon.weila.hk/default/user.png"
		}
	}
}, check(body, {
	"org_num": 100021,
	"name": "222222",
	"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100040/a/8ea474b7.jpg"
}))
  }
},
{
  url: '/v1/corp/web/user-change-password',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功"
}, check(body, {
    "old_password": "578ae0acf922151e0577b7ec4ff4348e",
    "new_password": "e10adc3949ba59abbe56e057f20f883e"
}))
  }
},
{
  url: '/v1/corp/web/user-bind-phone',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功"
}, check(body, {
    "phone": "13353236155",
    "password": "e10adc3949ba59abbe56e057f20f883e",
    "verify_code": "143399"
}))
  }
},
{
  url: '/v1/corp/web/get-address-list',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"address_list": {
			"version": 1730434624,
			"members": [
				{
					"user_id": 1253444,
					"dept_id": 0,
					"country_code": "86",
					"phone": "13353236154",
					"type": 255,
					"tts": 1,
					"loc_share": 0,
					"track": 0,
					"state": 0,
					"created": 1730274537,
					"user_num": "70015325",
					"sex": 0,
					"name": "ent19949504",
					"avatar": "http://favicon.weila.hk/default/user.png"
				}
			],
			"depts": [
				{
					"id": 6,
					"name": "研发部2",
					"members": [
						{
							"user_id": 1253446,
							"dept_id": 6,
							"country_code": "86",
							"phone": "18611111111",
							"type": 0,
							"tts": 1,
							"loc_share": 0,
							"track": 0,
							"state": 0,
							"created": 1730279383,
							"user_num": "70011173",
							"sex": 0,
							"name": "222222",
							"avatar": "http://favicon.weila.hk/default/user.png"
						},
						{
							"user_id": 1253448,
							"dept_id": 6,
							"country_code": "86",
							"phone": "18611111111",
							"type": 1,
							"tts": 1,
							"loc_share": 0,
							"track": 0,
							"state": 0,
							"created": 1730434624,
							"user_num": "30015839",
							"sex": 0,
							"name": "222222",
							"avatar": "http://favicon.weila.hk/default/group.png"
						}
					]
				}
			]
		}
	}
}, check(body, {
    "org_num": 100073
}))
  }
},
{
  url: '/v1/corp/web/dept-create',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"id": 1,
		"name": "研发部"
	}
}, check(body, {
    "org_num": 100080,
    "name": "研发部2"
}))
  }
},
{
  url: '/v1/corp/web/dept-change',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"id": 1,
		"name": "研发部12"
	}
}, check(body, {
    "org_num": 100021,
    "dept_id": 1,
    "name": "研发部12"
}))
  }
},
{
  url: '/v1/corp/web/dept-delete',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功"
}, check(body, {
    "org_num": 100021,
    "dept_id": 1
}))
  }
},
{
  url: '/v1/corp/web/dept-getall',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"depts": [
			{
				"id": 1,
				"name": "研发部12"
			},
			{
				"id": 2,
				"name": "研发部2"
			},
			{
				"id": 3,
				"name": "研发部2"
			},
			{
				"id": 4,
				"name": "研发部2"
			},
			{
				"id": 5,
				"name": "研发部2"
			}
		]
	}
}, check(body, {
    "org_num": 100021
}))
  }
},
{
  url: '/v1/corp/web/member-create',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user_id": 1253449,
		"org_num": 100073,
		"dept_id": 6,
		"country_code": "86",
		"phone": "18611111111",
		"type": 0,
		"tts": 0,
		"loc_share": 0,
		"track": 0,
		"state": 0,
		"created": 1730453120,
		"user_num": "70013070",
		"sex": 0,
		"name": "222222",
		"avatar": "http://favicon.weila.hk/default/user.png"
	}
}, check(body, {
	"org_num": 100050,
	"name": "44444444",
	"password": "e10adc3949ba59abbe56e057f20f883e",
    "dept_id": 15,
	"sex": 1,
	"avatar": "http://favicon.weila.hk/default/session.png",
	"phone": "18644444444",
	"tts": 1,
	"loc_share": 1
}))
  }
},
{
  url: '/v1/corp/web/member-add-device',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user_id": 1253448,
		"org_num": 100073,
		"dept_id": 6,
		"country_code": "86",
		"phone": "18611111111",
		"type": 1,
		"tts": 0,
		"loc_share": 0,
		"track": 1,
		"state": 0,
		"created": 1730453616,
		"user_num": "30015839",
		"sex": 0,
		"name": "222222",
		"avatar": "http://favicon.weila.hk/default/group.png"
	}
}, check(body, {
	"org_num": 100073,
	"verify_code": "193212",
	"name": "测试机2",
    "dept_id": 6,
	"sex": 0,
	"avatar": "http://favicon.weila.hk/default/group.png",
	"phone": "18611111111",
    "tts": 1,
	"loc_share": 1,
	"track": 1 //0关闭 1高频 2中频 3低频 4保留 其他自定义单位秒
}))
  }
},
{
  url: '/v1/corp/web/member-change',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user_id": 1253437,
		"org_num": 100021,
		"dept_id": 1,
		"country_code": "86",
		"phone": "1862222222",
		"type": 2,
		"state": 0,
		"created": 1730196254,
		"user_num": "70010607",
		"sex": 1,
		"name": "33333",
		"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100021/u/1253437/a/4b00bbb0.jpg"
	}
}, check(body, {
	"org_num": 100021,
	"member_id": 1253443,
	"name": "33333",
    "dept_id": 1,
	"sex": 1,
	"avatar": "http://favicon.weila.hk/default/session.png",
	"phone": "1862222222",
	"tts": 0,
	"loc_share": 0,
	"track": 0 //设备类型用户有效 0关闭 1高频 2中频 3低频 4保留 其他自定义单位秒
}))
  }
},
{
  url: '/v1/corp/web/member-change-state',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user_id": 1253443,
		"org_num": 100021,
		"dept_id": 1,
		"country_code": "86",
		"phone": "1862222222",
		"type": 0,
		"state": 1,
		"created": 1730267118,
		"user_num": "70012325",
		"sex": 1,
		"name": "33333",
		"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100021/u/1253443/a/58785cbe.jpg"
	}
}, check(body, {
	"org_num": 100021,
	"member_id": 1253443,
	"state": 0
}))
  }
},
{
  url: '/v1/corp/web/member-delete',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功"
}, check(body, {
	"org_num": 100021,
	"member_id": 1253443
}))
  }
},
{
  url: '/v1/corp/web/member-reset-password',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
}, check(body, {
	"org_num": 100021,
	"member_id": 1253443,
	"password": "e10adc3949ba59abbe56e057f20f883e"
}))
  }
},
{
  url: '/v1/corp/web/group-create',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"id": 80000528,
		"name": "测试群3",
		"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80000528/a/3e01b28d.jpg",
		"user_count": 0,
		"member_version": 1,
		"burst_mode": 0,
		"shutup": 0,
		"created": 1730452576
	}
}, check(body, {
    "org_num": 100073,
    "name": "测试群3", //群名
    "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100011/a/0e9763d6.jpg", //群头像,
    "burst_mode": 0 //0排队 1抢麦 2抢断
}))
  }
},
{
  url: '/v1/corp/web/group-change',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"id": 80000180,
		"name": "测试群3",
		"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80000180/a/f3d6bb21.jpg?v=1730275632",
		"creator": 1253444,
		"type": 33,
		"user_count": 0,
		"member_version": 1,
		"intro": "群介绍",
		"user_limit": 500,
		"burst_mode": 0,
		"shutup": 0,
		"created": 1730274965
	}
}, check(body, {
    "org_num": 100073,
    "group_id": 80000180, //群Id
    "name": "测试群3", //群名
    "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100011/a/0e9763d6.jpg", //群头像,
    "burst_mode": 0 //0排队 1抢麦 2抢断
}))
  }
},
{
  url: '/v1/corp/web/group-delete',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功"
}, check(body, {
    "group_id": 80000180 //群Id
}))
  }
},
{
  url: '/v1/corp/web/group-getall',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"groups": [
			{
				"id": 80000528,
				"name": "测试群3",
				"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80000528/a/3e01b28d.jpg",
				"creator": 1253444,
				"type": 17,
				"user_count": 2,
				"member_version": 3,
				"burst_mode": 0,
				"shutup": 0,
				"created": 1730452576
			},
			{
				"id": 80010090,
				"name": "测试群3",
				"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80010090/a/707546dd.jpg",
				"creator": 1253444,
				"type": 17,
				"user_count": 0,
				"member_version": 1,
				"burst_mode": 0,
				"shutup": 0,
				"created": 1730452310
			}
		]
	}
}, check(body, {
    "org_num": "100073"
}))
  }
},
{
  url: '/v1/corp/web/group-member-add',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"members": [
			{
				"user_id": 1253448,
				"user_num": "30015839",
				"sex": 0,
				"name": "222222",
				"avatar": "http://favicon.weila.hk/default/group.png"
			}
		]
	}
}, check(body, {
    "group_id": 80000528, //群Id
    "member_ids":[1253444]
}))
  }
},
{
  url: '/v1/corp/web/group-member-change',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"members": [
			{
				"user_id": 1253448,
				"user_num": "30015839",
				"sex": 0,
				"name": "222222",
				"avatar": "http://favicon.weila.hk/default/group.png"
			}
		]
	}
}, check(body, {
    "group_id": 80000180, //群Id
    "member_id": 1253446,
    "prority": 1,
	"tts": 1,
	"loc_share": 1
}))
  }
},
{
  url: '/v1/corp/web/group-member-delete',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"members": [
			{
				"user_id": 1253444,
				"prority": 0,
				"tts": 0,
				"loc_share": 0,
				"user_num": "70015325",
				"sex": 0,
				"name": "ent19949504",
				"avatar": "http://favicon.weila.hk/default/user.png"
			},
			{
				"user_id": 1253446,
				"prority": 0,
				"tts": 0,
				"loc_share": 0,
				"user_num": "70011173",
				"sex": 0,
				"name": "222222",
				"avatar": "http://favicon.weila.hk/default/user.png"
			}
		]
	}
}, check(body, {
    "group_id": 80000180, //群Id
    "member_ids":[1253446]
}))
  }
},
{
  url: '/v1/corp/web/group-member-getall',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"members": [
			{
				"user_id": 1253448,
				"user_num": "30015839",
				"sex": 0,
				"name": "222222",
				"avatar": "http://favicon.weila.hk/default/group.png"
			}
		]
	}
}, check(body, {
    "group_id": 80000528 //群Id
}))
  }
},
{
  url: '/v1/corp/web/location-get-track',
  method: 'post',
  response: (res: any) => {
    const { body = {} } = res
    console.log(res)
    return Object.assign({
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"tracks": [
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997061
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997121
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997181
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997241
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997301
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997361
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997421
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997481
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997541
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997601
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997661
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997721
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997781
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997841
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997901
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731997961
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998021
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998081
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998141
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998201
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998261
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998321
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998381
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998441
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998501
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998561
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998621
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998681
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998741
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998801
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998861
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998921
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731998981
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999041
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999106
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999168
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999228
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999288
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999349
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999409
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999470
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999530
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999590
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999651
			},
			{
				"latitude": 22.668835,
				"longitude": 115.070211,
				"created": 1731999711
			}
		]
	}
}, check(body, {
    "user_id": 1253464, //群Id
    "date": "2024-11-19"
}))
  }
},
]

function check(obj1: object, obj2: object) {
  const weilaRes = { errcode: 0, errmsg: '' }
  const keys = Object.keys(obj1);
  
  for (const key of keys) {
    if (!(key in obj2)) {
      weilaRes.errcode = 1;
      weilaRes.errmsg = `Missing key: ${key}`;
      return weilaRes;
    }
    
    if (typeof obj1[key as keyof typeof obj1] !== typeof obj2[key as keyof typeof obj2]) {
      weilaRes.errcode = 1;
      weilaRes.errmsg = `Type mismatch for key: ${key}`;
      return weilaRes;
    }
  }
  
  return weilaRes;
}