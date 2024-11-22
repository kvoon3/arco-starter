## 全局公共参数
#### 全局Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 全局Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 全局Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 全局认证方式
```text
noauth
```
#### 全局预执行脚本
```javascript
暂无预执行脚本
```
#### 全局后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI
```text
暂无描述
```
#### Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI/corp
```text
暂无描述
```
#### Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI/corp/web
```text
暂无描述
```
#### Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI/corp/web/上传头像(最大4M)
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/avatar-upload?access-token=1a0066e53cc7a7496d9c55d43247111c

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 1a0066e53cc7a7496d9c55d43247111c | String | 是 | -
#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
file | ["C:\\Users\\zrd\\Pictures\\QQ浏览器截图\\QQ浏览器截图20230608161757.png"] | File | 是 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"url": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/tmp/20230428/3/1682669682-110_80.png"
	}
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/上传文件(最大100M)
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/file-upload?access-token=1a0066e53cc7a7496d9c55d43247111c

#### 请求方式
> POST

#### Content-Type
> form-data

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 1a0066e53cc7a7496d9c55d43247111c | String | 是 | -
#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
file | ["C:\\Users\\zrd\\Pictures\\QQ浏览器截图\\1.png"] | File | 是 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"url": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/tmp/20230428/3/1682669682-110_80.png"
	}
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/PTTURL转码MP3URL
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> https://demo.weila.hk/v1/corp/web/ptturl-to-mp3url?access-token=e0a714b9e2e8c52aef84b06165e603fe

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | e0a714b9e2e8c52aef84b06165e603fe | String | 是 | -
#### 请求Body参数
```javascript
{
    "ptturl":"http://businessaudio.oss-cn-shenzhen.aliyuncs.com/media/service/103079215545/20251024audio/441_1729738955_3"
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
user_id | 1 | Number | 是 | -
name | 文件名 | String | 是 | 文件名称(taxi.jpg)
data | 文件数据base64编码 | String | 是 | 文件数据base64编码
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"url": "http://businessaudio.oss-cn-shenzhen.aliyuncs.com/media/service/103079215545/20251024audio/441_1729738955_3.mp3"
	}
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/登录、注册、验证码
```text
暂无描述
```
#### Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI/corp/web/登录、注册、验证码/获取图形验证码
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/get-verifycode-image?width=150&height=50

#### 请求方式
> GET

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
width | 150 | String | 是 | -
height | 50 | String | 是 | -
#### 请求Body参数
```javascript

```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI/corp/web/登录、注册、验证码/发送短信验证码
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/send-sms-verifycode

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
    "phone": "18675500568",
    "country_code": "86",
    "sms_type": "regist",
    "verify_code": "ufc6"
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
phone | 18675500568 | String | 是 | -
country_code | 86 | String | 是 | -
sms_type | regist | String | 是 | 注册regist 重置密码 reset-password 绑定手机号 bind-phone
verify_code | ufc6 | String | 是 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功"
}
```
#### 错误响应示例
```javascript
{"errcode":44005,"errmsg":"图片验证码校验失败,请刷新后再试!"}
```
## /WEBAPI/corp/web/登录、注册、验证码/注册
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/regist

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"phone": "13353236154",
	"verify_code": "412604",
	"password":"e10adc3949ba59abbe56e057f20f883e"
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"user_name": "20100114",
		"country_code": "0",
		"password": "f3072627eff7ae270288d7804842c321"
	}
}
```
## /WEBAPI/corp/web/登录、注册、验证码/手机号密码登录
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/login-by-phone

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"phone": "13353236455",
	"password": "e10adc3949ba59abbe56e057f20f883e"
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
## /WEBAPI/corp/web/登录、注册、验证码/账号密码登录
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/login-by-name

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"user_name": "70014762",
	"password": "e10adc3949ba59abbe56e057f20f883e"
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
## /WEBAPI/corp/web/登录、注册、验证码/刷新令牌
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/sessions/refresh?access-token=27c468a61c57ce0b9a09e2f72cb9b365

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 27c468a61c57ce0b9a09e2f72cb9b365 | String | 是 | -
#### 请求Body参数
```javascript
{
	"refresh_token": "201e4a25ecf1213a55a5ea27003d6d6e"
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"access_token": "1e7593558560b0c816c73f55e4a3ce66",
		"expires_in": 86400,
		"refresh_token": "cb17207d38a8c731e1be101c3f80334b"
	}
}
```
## /WEBAPI/corp/web/登录、注册、验证码/重置密码
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/reset-password

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{
	"phone": "16675441248",
	"country_code": "86",
	"verify_code": "143399",
	"password": "e10adc3949ba59abbe56e057f20f883e"
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功"
}
```
## /WEBAPI/corp/web/企业管理
```text
暂无描述
```
#### Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI/corp/web/企业管理/创建企业组织
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/org-create?access-token=6338b4249ee06427eeeddf78e51de639

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 6338b4249ee06427eeeddf78e51de639 | String | 是 | -
#### 请求Body参数
```javascript
{
	"name": "微喇测试",
	"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100011/a/0e9763d6.jpg"
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
## /WEBAPI/corp/web/企业管理/修改企业
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/org-change?access-token=7b61dbfa76a497538e597b633221950d

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 7b61dbfa76a497538e597b633221950d | String | 是 | -
#### 请求Body参数
```javascript
{
	"org_num": 100021,
	"name": "222222",
	"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100040/a/8ea474b7.jpg"
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
#### 错误响应示例
```javascript
{
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
}
```
## /WEBAPI/corp/web/企业管理/我的企业
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/org-my-org?access-token=6522909b5350eccf8ee889361ca4b6a8

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 6522909b5350eccf8ee889361ca4b6a8 | String | 是 | -
#### 请求Body参数
```javascript

```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
## /WEBAPI/corp/web/用户信息管理
```text
暂无描述
```
#### Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI/corp/web/用户信息管理/用户信息
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/user-selfinfo?access-token=b822b56b62484143778fb1df998b4b82

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | b822b56b62484143778fb1df998b4b82 | String | 是 | -
#### 请求Body参数
```javascript

```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
## /WEBAPI/corp/web/用户信息管理/修改用户密码
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/user-change-password?access-token=398d2980c1a4ae5e9d21e6d641d2398c

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 398d2980c1a4ae5e9d21e6d641d2398c | String | 是 | -
#### 请求Body参数
```javascript
{
    "old_password": "578ae0acf922151e0577b7ec4ff4348e",
    "new_password": "e10adc3949ba59abbe56e057f20f883e"
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功"
}
```
## /WEBAPI/corp/web/用户信息管理/绑定手机号
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/user-bind-phone?access-token=eeba9b319549b09932c9bd6baccb5c53

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | eeba9b319549b09932c9bd6baccb5c53 | String | 是 | -
#### 请求Body参数
```javascript
{
    "phone": "13353236155",
    "password": "e10adc3949ba59abbe56e057f20f883e",
    "verify_code": "143399"
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功"
}
```
## /WEBAPI/corp/web/通讯录管理
```text
暂无描述
```
#### Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI/corp/web/通讯录管理/获取通讯录
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://demo.weila.hk/v1/corp/web/get-address-list?access-token=6fc1b380a214fc3f78460e8b6e845474

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 6fc1b380a214fc3f78460e8b6e845474 | String | 是 | -
#### 请求Body参数
```javascript
{
    "org_num": 100130
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
name | 行政部 | String | 是 | -
avatar | http:// | String | 否 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"address_list": {
			"version": 1732001188,
			"members": [
				{
					"user_id": 1253488,
					"user_num": "70014762",
					"sex": 0,
					"name": "ent98164680",
					"avatar": "http://favicon.weila.hk/default/user.png",
					"dept_id": 0,
					"country_code": "86",
					"phone": "13353236455",
					"type": 255,
					"tts": 0,
					"loc_share": 0,
					"track": 0,
					"state": 0,
					"created": 1731986785,
					"online": 0
				}
			],
			"depts": [
				{
					"id": 1,
					"name": "研发部",
					"members": [
						{
							"user_id": 1253341,
							"user_num": "30015778",
							"sex": 1,
							"name": "测试机Linux",
							"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253341/a/38035fcb.jpg",
							"dept_id": 1,
							"country_code": "86",
							"phone": "1862222222",
							"type": 1,
							"tts": 0,
							"loc_share": 1,
							"track": 1,
							"state": 0,
							"created": 1731987269,
							"online": 0
						},
						{
							"user_id": 1247754,
							"user_num": "30010197",
							"sex": 1,
							"name": "测试机Linux",
							"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1247754/a/c4c83dd3.jpg",
							"dept_id": 1,
							"country_code": "86",
							"phone": "1862222222",
							"type": 1,
							"tts": 0,
							"loc_share": 1,
							"track": 1,
							"state": 0,
							"created": 1731987480,
							"online": 0
						},
						{
							"user_id": 1253464,
							"user_num": "30015845",
							"sex": 1,
							"name": "测试机Linux",
							"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253464/a/f7041816.jpg",
							"dept_id": 1,
							"country_code": "86",
							"phone": "1862222222",
							"type": 1,
							"tts": 0,
							"loc_share": 1,
							"track": 1,
							"state": 0,
							"created": 1731987604,
							"online": 0
						}
					]
				}
			]
		}
	}
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/通讯录管理/创建部门
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> https://demo.weila.hk/v1/corp/web/dept-create?access-token=6338b4249ee06427eeeddf78e51de639

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 6338b4249ee06427eeeddf78e51de639 | String | 是 | -
#### 请求Body参数
```javascript
{
    "org_num": 100130,
    "name": "研发部"
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
owner_id | 1 | Number | 是 | 群主
name | 行政部 | String | 是 | 群名
avatar | http:// | String | 否 | 群头像
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"id": 1,
		"name": "研发部"
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
errcode | 0 | Number | -
errmsg | 请求成功 | String | -
data | - | Object | 返回数据
data.group | - | Object | 群属性
data.group.id | 123 | Number | 群Id
data.group.owner_id | 1 | Number | 群主用户Id
data.group.name | 企业群 | String | 群名
data.group.number | 10000000 | Number | 群号
data.group.avatar | http://xx | String | 群头像
data.group.burst_mode | 0 | Number | 对讲模式 0排麦 1抢麦 2抢占
data.group.shutup | 0 | Number | 群禁言 0 不禁言 1禁言(管理员可以讲话)
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/通讯录管理/修改部门
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/dept-change?access-token=9bf184b1633fa052304ec3fffff893e1

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 9bf184b1633fa052304ec3fffff893e1 | String | 是 | -
#### 请求Body参数
```javascript
{
    "org_num": 100021,
    "dept_id": 1,
    "name": "研发部12"
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
group_id | 123 | Number | 是 | 群Id
name | 行政部 | String | 否 | 群名
avatar | http:// | String | 否 | 群头像
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"id": 1,
		"name": "研发部12"
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
errcode | 0 | Number | -
errmsg | 请求成功 | String | -
data | - | Object | 返回数据
data.group | - | Object | 群属性
data.group.id | 123 | Number | 群Id
data.group.owner_id | 1 | Number | -
data.group.name | 企业群 | String | 群名
data.group.number | 10000000 | Number | 群号
data.group.burst_mode | 0 | Number | 对讲模式 0排麦 1抢麦 2抢占
data.group.shutup | 0 | Number | 群禁言 0 不禁言 1禁言(管理员可以讲话)
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/通讯录管理/删除部门
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/dept-delete?access-token=dcd423a896632efafd1228750755327a

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | dcd423a896632efafd1228750755327a | String | 是 | -
#### 请求Body参数
```javascript
{
    "org_num": 100021,
    "dept_id": 1
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
group_id | 123 | Number | 是 | 群Id
name | 行政部 | String | 否 | 群名
avatar | http:// | String | 否 | 群头像
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
errcode | 0 | Number | -
errmsg | 请求成功 | String | -
data | - | Object | 返回数据
data.group | - | Object | 群属性
data.group.id | 123 | Number | 群Id
data.group.owner_id | 1 | Number | -
data.group.name | 企业群 | String | 群名
data.group.number | 10000000 | Number | 群号
data.group.burst_mode | 0 | Number | 对讲模式 0排麦 1抢麦 2抢占
data.group.shutup | 0 | Number | 群禁言 0 不禁言 1禁言(管理员可以讲话)
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/通讯录管理/获取所有部门
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/dept-getall?access-token=f4ff8260f9fe89277dea247cc862044f

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | f4ff8260f9fe89277dea247cc862044f | String | 是 | -
#### 请求Body参数
```javascript
{
    "org_num": 100073
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
name | 行政部 | String | 是 | -
avatar | http:// | String | 否 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/通讯录管理/获取部门所有成员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/dept-member-getall?access-token=69a2d502c258fcb58dc134e9dd74867f

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 69a2d502c258fcb58dc134e9dd74867f | String | 是 | -
#### 请求Body参数
```javascript
{
    "org_num": 100130,
    "dept_id": 1
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
name | 行政部 | String | 是 | -
avatar | http:// | String | 否 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"members": [
			{
				"user_id": 1253341,
				"user_num": "30015778",
				"sex": 1,
				"name": "测试机Linux",
				"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253341/a/38035fcb.jpg",
				"dept_id": 1,
				"country_code": "86",
				"phone": "1862222222",
				"type": 1,
				"tts": 0,
				"loc_share": 1,
				"track": 1,
				"state": 0,
				"created": 1731987269,
				"online": 0,
				"dept_name": "研发部"
			},
			{
				"user_id": 1247754,
				"user_num": "30010197",
				"sex": 1,
				"name": "测试机Linux",
				"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1247754/a/c4c83dd3.jpg",
				"dept_id": 1,
				"country_code": "86",
				"phone": "1862222222",
				"type": 1,
				"tts": 0,
				"loc_share": 1,
				"track": 1,
				"state": 0,
				"created": 1731987480,
				"online": 0,
				"dept_name": "研发部"
			},
			{
				"user_id": 1253464,
				"user_num": "30015845",
				"sex": 1,
				"name": "测试机Linux",
				"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253464/a/f7041816.jpg",
				"dept_id": 1,
				"country_code": "86",
				"phone": "1862222222",
				"type": 1,
				"tts": 0,
				"loc_share": 1,
				"track": 1,
				"state": 0,
				"created": 1731987604,
				"online": 0,
				"dept_name": "研发部"
			}
		]
	}
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/通讯录管理/创建企业成员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/member-create?access-token=6522909b5350eccf8ee889361ca4b6a8

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 6522909b5350eccf8ee889361ca4b6a8 | String | 是 | -
#### 请求Body参数
```javascript
{
	"org_num": 100050,
	"name": "44444444",
	"password": "e10adc3949ba59abbe56e057f20f883e",
    "dept_id": 15,
	"sex": 1,
	"avatar": "http://favicon.weila.hk/default/session.png",
	"phone": "18644444444",
	"tts": 1,
	"loc_share": 1
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
## /WEBAPI/corp/web/通讯录管理/添加企业设备
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://demo.weila.hk/v1/corp/web/member-add-device?access-token=6338b4249ee06427eeeddf78e51de639

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 6338b4249ee06427eeeddf78e51de639 | String | 是 | -
#### 请求Body参数
```javascript
{
	"org_num": 100130,
	"verify_code": "411691",
	"name": "测试机Linux",
    "dept_id": 1,
	"sex": 0,
	"avatar": "http://favicon.weila.hk/default/group.png",
	"phone": "18611111111",
    "tts": 1,
	"loc_share": 1,
	"track": 1 //0关闭 1高频 2中频 3低频 4保留 其他自定义单位秒
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
## /WEBAPI/corp/web/通讯录管理/修改企业成员信息
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> https://demo.weila.hk/v1/corp/web/member-change?access-token=6338b4249ee06427eeeddf78e51de639

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 6338b4249ee06427eeeddf78e51de639 | String | 是 | -
#### 请求Body参数
```javascript
{
	"org_num": 100130,
	"member_id": 1253341,
	"name": "测试机Linux",
    "dept_id": 1,
	"sex": 1,
	"avatar": "http://favicon.weila.hk/default/session.png",
	"phone": "1862222222",
	"tts": 0,
	"loc_share": 1,
	"track": 1 //设备类型用户有效 0关闭 1高频 2中频 3低频 4保留 其他自定义单位秒
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
org_number | 00001 | Number | 是 | -
member_id | 143997 | Number | 是 | -
nick | 张三 | String | 否 | 用户昵称
track-frequency | 0 | Number | 否 | 轨迹上报频率
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
## /WEBAPI/corp/web/通讯录管理/修改企业成员状态
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/member-change-state?access-token=57d88cb501917e4a79aafb22e93b874a

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 57d88cb501917e4a79aafb22e93b874a | String | 是 | -
#### 请求Body参数
```javascript
{
	"org_num": 100021,
	"member_id": 1253443,
	"state": 0
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
org_number | 00001 | Number | 是 | -
member_id | 143997 | Number | 是 | -
status | 0 | Number | 是 | 0 启用 1 暂停
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
## /WEBAPI/corp/web/通讯录管理/删除企业成员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://demo.weila.hk/v1/corp/web/member-delete?access-token=98f519193d03301c98db9f8655530a85

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 98f519193d03301c98db9f8655530a85 | String | 是 | -
#### 请求Body参数
```javascript
{
	"org_num": 100073,
	"member_id": 1253464
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
org_number | 00001 | Number | 是 | -
member_id | 143997 | Number | 是 | -
status | 0 | Number | 是 | 0 启用 1 暂停
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功"
}
```
## /WEBAPI/corp/web/通讯录管理/重置企业成员密码
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/member-reset-password?access-token=57d88cb501917e4a79aafb22e93b874a

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 57d88cb501917e4a79aafb22e93b874a | String | 是 | -
#### 请求Body参数
```javascript
{
	"org_num": 100021,
	"member_id": 1253443,
	"password": "e10adc3949ba59abbe56e057f20f883e"
}
```
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
}
```
## /WEBAPI/corp/web/通讯录管理/获取所有企业成员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/member-getall?access-token=69a2d502c258fcb58dc134e9dd74867f

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 69a2d502c258fcb58dc134e9dd74867f | String | 是 | -
#### 请求Body参数
```javascript
{
    "org_num": 100130
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
name | 行政部 | String | 是 | -
avatar | http:// | String | 否 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"members": [
			{
				"user_id": 1253488,
				"user_num": "70014762",
				"sex": 0,
				"name": "ent98164680",
				"avatar": "http://favicon.weila.hk/default/user.png",
				"dept_id": 0,
				"country_code": "86",
				"phone": "13353236455",
				"type": 255,
				"tts": 0,
				"loc_share": 0,
				"track": 0,
				"state": 0,
				"created": 1731986785,
				"online": 0,
				"dept_name": ""
			},
			{
				"user_id": 1253341,
				"user_num": "30015778",
				"sex": 1,
				"name": "测试机Linux",
				"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253341/a/38035fcb.jpg",
				"dept_id": 1,
				"country_code": "86",
				"phone": "1862222222",
				"type": 1,
				"tts": 0,
				"loc_share": 1,
				"track": 1,
				"state": 0,
				"created": 1731987269,
				"online": 0,
				"dept_name": "研发部"
			},
			{
				"user_id": 1247754,
				"user_num": "30010197",
				"sex": 1,
				"name": "测试机Linux",
				"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1247754/a/c4c83dd3.jpg",
				"dept_id": 1,
				"country_code": "86",
				"phone": "1862222222",
				"type": 1,
				"tts": 0,
				"loc_share": 1,
				"track": 1,
				"state": 0,
				"created": 1731987480,
				"online": 0,
				"dept_name": "研发部"
			},
			{
				"user_id": 1253464,
				"user_num": "30015845",
				"sex": 1,
				"name": "测试机Linux",
				"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100130/u/1253464/a/f7041816.jpg",
				"dept_id": 1,
				"country_code": "86",
				"phone": "1862222222",
				"type": 1,
				"tts": 0,
				"loc_share": 1,
				"track": 1,
				"state": 0,
				"created": 1731987604,
				"online": 0,
				"dept_name": "研发部"
			}
		]
	}
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/企业群组管理
```text
暂无描述
```
#### Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI/corp/web/企业群组管理/创建群组
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://demo.weila.hk/v1/corp/web/group-create?access-token=6338b4249ee06427eeeddf78e51de639

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 6338b4249ee06427eeeddf78e51de639 | String | 是 | -
#### 请求Body参数
```javascript
{
    "org_num": 100130,
    "name": "测试群", //群名
    "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100011/a/0e9763d6.jpg", //群头像,
    "burst_mode": 0 //0排队 1抢麦 2抢断
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
owner_id | 1 | Number | 是 | 群主
name | 行政部 | String | 是 | 群名
avatar | http:// | String | 否 | 群头像
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
errcode | 0 | Number | -
errmsg | 请求成功 | String | -
data | - | Object | 返回数据
data.group | - | Object | 群属性
data.group.id | 123 | Number | 群Id
data.group.owner_id | 1 | Number | 群主用户Id
data.group.name | 企业群 | String | 群名
data.group.number | 10000000 | Number | 群号
data.group.avatar | http://xx | String | 群头像
data.group.burst_mode | 0 | Number | 对讲模式 0排麦 1抢麦 2抢占
data.group.shutup | 0 | Number | 群禁言 0 不禁言 1禁言(管理员可以讲话)
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/企业群组管理/修改群组
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> https://demo.weila.hk/v1/corp/web/group-change?access-token=0ebed33a5d229903f831e6e197fcf6e1

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 0ebed33a5d229903f831e6e197fcf6e1 | String | 是 | -
#### 请求Body参数
```javascript
{
    "org_num": 100073,
    "group_id": 80000528, //群Id
    "name": "测试群3", //群名
    "avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100011/a/0e9763d6.jpg", //群头像,
    "burst_mode": 0 //0排队 1抢麦 2抢断
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
group_id | 123 | Number | 是 | 群Id
name | 行政部 | String | 否 | 群名
avatar | http:// | String | 否 | 群头像
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"content": {
		"group": {
			"avatar": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80010090/a/707546dd.jpg?v=1731493671",
			"burst_mode": 0,
			"created": 1730452310,
			"creator": 1253444,
			"id": 80010090,
			"member_version": 2,
			"name": "测试群3",
			"org_num": 100073,
			"shutup": 0,
			"type": 17,
			"user_count": 1
		}
	},
	"msg_id": 486,
	"msg_type": "corp-group-change",
	"timestamp": 1731493671,
	"transfer": true
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
errcode | 0 | Number | -
errmsg | 请求成功 | String | -
data | - | Object | 返回数据
data.group | - | Object | 群属性
data.group.id | 123 | Number | 群Id
data.group.owner_id | 1 | Number | -
data.group.name | 企业群 | String | 群名
data.group.number | 10000000 | Number | 群号
data.group.burst_mode | 0 | Number | 对讲模式 0排麦 1抢麦 2抢占
data.group.shutup | 0 | Number | 群禁言 0 不禁言 1禁言(管理员可以讲话)
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/企业群组管理/删除群组
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/group-delete?access-token=7aa3cdd9c069a32351c04402ecd6dc21

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 7aa3cdd9c069a32351c04402ecd6dc21 | String | 是 | -
#### 请求Body参数
```javascript
{
    "group_id": 80000180 //群Id
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
group_id | 123 | Number | 是 | 群Id
name | 行政部 | String | 否 | 群名
avatar | http:// | String | 否 | 群头像
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
errcode | 0 | Number | -
errmsg | 请求成功 | String | -
data | - | Object | 返回数据
data.group | - | Object | 群属性
data.group.id | 123 | Number | 群Id
data.group.owner_id | 1 | Number | -
data.group.name | 企业群 | String | 群名
data.group.number | 10000000 | Number | 群号
data.group.burst_mode | 0 | Number | 对讲模式 0排麦 1抢麦 2抢占
data.group.shutup | 0 | Number | 群禁言 0 不禁言 1禁言(管理员可以讲话)
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/企业群组管理/获取所有群组
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/group-getall?access-token=4bea81a81c6331942f91e7493f48d8ee

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 4bea81a81c6331942f91e7493f48d8ee | String | 是 | -
#### 请求Body参数
```javascript
{
    "org_num": "100073"
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
name | 行政部 | String | 是 | -
avatar | http:// | String | 否 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
errcode | 0 | Integer | -
errmsg | 请求成功 | String | -
data | - | Object | -
data.groups | - | Array | -
data.groups.id | 80000528 | Integer | -
data.groups.name | 测试群3 | String | -
data.groups.avatar | http://weilacorp.oss-cn-shenzhen.aliyuncs.com/corp/100073/g/80000528/a/3e01b28d.jpg | String | -
data.groups.creator | 1253444 | Integer | -
data.groups.type | 17 | Integer | 17 企业正式群
data.groups.user_count | 2 | Integer | -
data.groups.member_version | 3 | Integer | -
data.groups.burst_mode | 0 | Integer | -
data.groups.shutup | 0 | Integer | -
data.groups.created | 1730452576 | Integer | -
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/企业群组管理/添加群成员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://demo.weila.hk/v1/corp/web/group-member-add?access-token=6338b4249ee06427eeeddf78e51de639

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 6338b4249ee06427eeeddf78e51de639 | String | 是 | -
#### 请求Body参数
```javascript
{
    "group_id": 81000335, //群Id
    "member_ids":[1253464,1247754,1253341]
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
group_id | 123 | Number | 是 | 群Id
member_ids | 3 | Number | 是 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/企业群组管理/修改群成员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/group-member-change?access-token=7aa3cdd9c069a32351c04402ecd6dc21

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 7aa3cdd9c069a32351c04402ecd6dc21 | String | 是 | -
#### 请求Body参数
```javascript
{
    "group_id": 80000180, //群Id
    "member_id": 1253446,
    "prority": 1,
	"tts": 1,
	"loc_share": 1
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
group_id | 123 | Number | 是 | 群Id
member_ids | 3 | Number | 是 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/企业群组管理/删除群成员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> https://demo.weila.hk/v1/corp/web/group-member-delete?access-token=0ebed33a5d229903f831e6e197fcf6e1

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 0ebed33a5d229903f831e6e197fcf6e1 | String | 是 | -
#### 请求Body参数
```javascript
{
    "group_id": 80000528, //群Id
    "member_ids":[1253464]
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
name | 行政部 | String | 是 | -
avatar | http:// | String | 否 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/企业群组管理/获取群组所有成员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/group-member-getall?access-token=1a0066e53cc7a7496d9c55d43247111c

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 1a0066e53cc7a7496d9c55d43247111c | String | 是 | -
#### 请求Body参数
```javascript
{
    "group_id": 80000528 //群Id
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
name | 行政部 | String | 是 | -
avatar | http:// | String | 否 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/位置管理
```text
暂无描述
```
#### Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI/corp/web/位置管理/获取用户轨迹
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/location-get-track?access-token=6338b4249ee06427eeeddf78e51de639

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 6338b4249ee06427eeeddf78e51de639 | String | 是 | -
#### 请求Body参数
```javascript
{
    "user_id": 1253464, //群Id
    "date": "2024-11-19"
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
name | 行政部 | String | 是 | -
avatar | http:// | String | 否 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
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
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/位置管理/逆地理编码
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/location-get-regeo?access-token=31c0ad4441c100d49760e392e9ce2f38

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | 31c0ad4441c100d49760e392e9ce2f38 | String | 是 | -
#### 请求Body参数
```javascript
{
    "latitude": 22.13445,
    "longitude": 113.1344
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
name | 行政部 | String | 是 | -
avatar | http:// | String | 否 | -
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"regeo": {
			"province": "广东省",
			"city": "珠海市",
			"district": "斗门区",
			"township": "乾务镇",
			"road": "270省道",
			"number": "",
			"addr": "",
			"name": "270省道富泉虾苗场西732米",
			"adcode": "440403",
			"matchs": {
				"aoi_name": "",
				"aoi_distance": 0,
				"poi_name": "270省道富泉虾苗场西732米",
				"poi_distance": "732.954",
				"roadinter_name": "270省道与珠峰大道交叉口西南895米",
				"roadinter_distance": "895.218"
			},
			"formatted_address": "乾务镇270省道270省道富泉虾苗场西732米"
		}
	}
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```
## /WEBAPI/corp/web/历史消息管理
```text
暂无描述
```
#### Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /WEBAPI/corp/web/历史消息管理/获取群历史消息
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> http://192.168.0.125:8088/v1/corp/web/message-get-group-history-message?access-token=e0a714b9e2e8c52aef84b06165e603fe

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
access-token | e0a714b9e2e8c52aef84b06165e603fe | String | 是 | -
#### 请求Body参数
```javascript
{
    "group_id": 81000335,
    "msg_id": 0,
    "msg_count": 20
}
```
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
user_id | 1 | Number | 是 | -
name | 文件名 | String | 是 | 文件名称(taxi.jpg)
data | 文件数据base64编码 | String | 是 | 文件数据base64编码
#### 认证方式
```text
noauth
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"errcode": 0,
	"errmsg": "请求成功",
	"data": {
		"messages": [
			{
				"user_id": 1253341,
				"msg_id": 173198981,
				"content": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/media/corpgroup/81000335/20251119audio/1253341_1731989825_5?duration=5",
				"type": 2,
				"created": 1731989825
			},
			{
				"user_id": 1253341,
				"msg_id": 173198980,
				"content": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/media/corpgroup/81000335/20251119audio/1253341_1731989812_7?duration=7",
				"type": 2,
				"created": 1731989812
			},
			{
				"user_id": 1253341,
				"msg_id": 173198979,
				"content": "http://weilacorp.oss-cn-shenzhen.aliyuncs.com/media/corpgroup/81000335/20251119audio/1253341_1731989796_4?duration=4",
				"type": 2,
				"created": 1731989796
			}
		]
	}
}
```
#### 错误响应示例
```javascript
{
	"errcode": "105",
	"errmsg": "账号或密码错误"
}
```