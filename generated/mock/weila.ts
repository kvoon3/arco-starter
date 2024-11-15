// WARNING: 该文件通过项目内脚本自动生成，请勿手动更改
// @ts-ignore
import type { MockMethod } from 'vite-plugin-mock'
import type { WeilaRes } from '~/api'

export default ([
  // [url, http response],
  ['/v1/corp/web/avatar-upload', {
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"url": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/tmp/20230428/3/1682669682-110_80.png"
	}
}],
  ['/v1/corp/web/file-upload', {
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"url": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/tmp/20230428/3/1682669682-110_80.png"
	}
}],
  ['/v1/corp/web/send-sms-verifycode', {
	"errcode": 0,
	"errmsg": "请求成功"
}],
  ['/v1/corp/web/regist', {
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user_name": "20100114",
		"country_code": "0",
		"password": "f3072627eff7ae270288d7804842c321"
	}
}],
  ['/v1/corp/web/login-by-phone', {
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user": {
			"id": 1253444,
			"num": "70015325",
			"sex": 0,
			"name": "ent19949504",
			"bind_phone": "13353236154",
			"country_code": "86",
			"avatar": "http://favicon.weila.hk/default/user.png"
		},
		"account": {
			"user_name": "70015325",
			"country_code": "0",
			"password": "9274b15d3267407d7f073267733eb1b0"
		},
		"org": {
			"num": 100073,
			"name": "微喇测试",
			"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/a/7ddf8c72.jpg",
			"created": 1730274806,
			"member_cnt": 7,
			"group_cnt": 2,
			"group_ver": 1730707540,
			"address_ver": 1730454374,
			"device_cnt": 0,
			"device_ver": 1
		},
		"access_token": "27c468a61c57ce0b9a09e2f72cb9b365",
		"expires_in": 86400,
		"refresh_token": "201e4a25ecf1213a55a5ea27003d6d6e"
	}
}],
  ['/v1/corp/web/login-by-name', {
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user": {
			"id": 1253447,
			"num": "70010885",
			"sex": 0,
			"name": "ent44094209",
			"bind_phone": "16675441248",
			"country_code": "86",
			"avatar": "http://favicon.weila.hk/default/user.png"
		},
		"account": {
			"user_name": "70010885",
			"country_code": "0",
			"password": "73c18c320f3d13b2b2b66fbac937e66a"
		},
		"org": {
			"num": 100080,
			"name": "kvoon-org",
			"avatar": "https://picsum.photos/200?random=1730457465401",
			"created": 1730457462,
			"member_cnt": 1,
			"group_cnt": 0,
			"group_ver": 1,
			"address_ver": 1730859173,
			"device_cnt": 0,
			"device_ver": 1
		},
		"access_token": "4e74b04be33083d0d4337956d6d0db82",
		"expires_in": 86400,
		"refresh_token": "c68e0bac0cb2d0b03248f3b3b2fbaed5"
	}
}],
  ['/v1/sessions/refresh', {
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"access_token": "1e7593558560b0c816c73f55e4a3ce66",
		"expires_in": 86400,
		"refresh_token": "cb17207d38a8c731e1be101c3f80334b"
	}
}],
  ['/v1/corp/web/reset-password', {
	"errcode": 0,
	"errmsg": "请求成功"
}],
  ['/v1/corp/web/org-create', {
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
}],
  ['/v1/corp/web/org-change', {
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
}],
  ['/v1/corp/web/org-change', {
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
}],
  ['/v1/corp/web/org-my-org', {
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
}],
  ['/v1/corp/web/user-selfinfo', {
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
}],
  ['/v1/corp/web/user-change-password', {
	"errcode": 0,
	"errmsg": "请求成功"
}],
  ['/v1/corp/web/user-bind-phone', {
	"errcode": 0,
	"errmsg": "请求成功"
}],
  ['/v1/corp/web/get-address-list', {
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
}],
  ['/v1/corp/web/dept-create', {
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"id": 1,
		"name": "研发部"
	}
}],
  ['/v1/corp/web/dept-change', {
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"id": 1,
		"name": "研发部12"
	}
}],
  ['/v1/corp/web/dept-delete', {
	"errcode": 0,
	"errmsg": "请求成功"
}],
  ['/v1/corp/web/dept-getall', {
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
}],
  ['/v1/corp/web/member-create', {
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
}],
  ['/v1/corp/web/member-add-device', {
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
}],
  ['/v1/corp/web/member-change', {
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
}],
  ['/v1/corp/web/member-change-state', {
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
}],
  ['/v1/corp/web/member-delete', {
	"errcode": 0,
	"errmsg": "请求成功"
}],
  ['/v1/corp/web/member-reset-password', {
	"errcode": 0,
	"errmsg": "请求成功",
}],
  ['/v1/corp/web/group-create', {
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
}],
  ['/v1/corp/web/group-change', {
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
}],
  ['/v1/corp/web/group-delete', {
	"errcode": 0,
	"errmsg": "请求成功"
}],
  ['/v1/corp/web/group-getall', {
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
}],
  ['/v1/corp/web/group-member-add', {
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
}],
  ['/v1/corp/web/group-member-change', {
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
}],
  ['/v1/corp/web/group-member-delete', {
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
}],
  ['/v1/corp/web/group-member-getall', {
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
}],
] as Array<[string, WeilaRes<any>]>).map(([url, response]) => ({
  url,
  method: 'post',
  response,
})) as MockMethod[]