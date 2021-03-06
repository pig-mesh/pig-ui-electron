// 配置编译环境和线上环境之间的切换

const env = process.env
const baseUrl = env.VUE_APP_API_URL
// 图表库为avue和pig2套地址
const iconfontVersion = ['567566_qo5lxgtishg', '667895_v7uduh4zui']
const iconfontUrl = `https://at.alicdn.com/t/font_$key.css`
const codeUrl = `${env.VUE_APP_API_URL}/code`
console.log(env)
export {
  baseUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  env
}
