/*
@desc 获取URL上的参数
*/
export function getUrlParams(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
      rs = window.location.search.substr(1).match(reg)
  return rs ? decodeURI(rs[2]) : null
}

/*
  @desc 日期格式化
*/
export function dateFormat(date, fmt) {
  if(!date) {
      date = new Date()
  }

  let year = date.getFullYear()
  let month = date.getMonth() + 1
  month = month < 10 ? ('0' + month) : month
  let  d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let  hour = date.getHours()
  hour = hour < 10 ? ('0' + hour) : hour
  let minutes = date.getMinutes()
  minutes = minutes < 10 ? ('0' + minutes) : minutes
  let seconds = date.getSeconds()
  seconds = seconds < 10 ? ('0' + seconds) : seconds
  let milliseconds = date.getMilliseconds()

  fmt = fmt ? fmt : 'yyyy-MM-dd'

  if (/yyyy/.test(fmt)) {
    fmt = fmt.replace('yyyy', year)
  }  
  if (/MM/.test(fmt)) {
    fmt = fmt.replace('MM', month)
  } 
  if (/dd/.test(fmt)) {
    fmt = fmt.replace('dd',d)
  } 
  if (/hh/.test(fmt)) {
    fmt = fmt.replace('hh', hour)
  } 
  if (/mm/.test(fmt)) {
    fmt = fmt.replace('mm', minutes)
  } 
  if (/ss/.test(fmt)) {
    fmt = fmt.replace('ss',seconds)
  } 
  if (/SS/.test(fmt)) {
    fmt = fmt.replace('SS',milliseconds)
  }  

  return fmt 
}

/*
@desc 对数字进行分隔

@param {number} num 需要处理的数字

@example
输入：2123456
输出：2，123，456
*/
export function splitNum(num, splitSymbal = ',') {
  return (num + '').replace(/\B(?=(\d{3})+(?!\d))/g, splitSymbal)
}

/*
@desc 是否是整数
*/
export function isInteger(num) {
  return num % 1 === 0
}

/*
@desc 是否是小数
*/
export function isDecimal(num) {
  return num % 1 !== 0
}
