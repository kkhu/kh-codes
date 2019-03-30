/*
@desc 获取URL上的参数
*/
export function getUrlParams(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i'),
      rs = window.location.search.substr(1).match(reg)
  return rs ? decodeURI(rs[2]) : null
}

/**
 * 日期格式化
 * @param {*} date 
 * @param {*} fmt 
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

/**
 * 对列表按指定字段排序
 * @param {*} list
 * @param {*} filedName 排序字段
 * @param {*} order 默认升序，降序(desc)
 */
export function listOrderByField(list, fieldName, order) {
  let temp
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - i; j++) {
      if (list[j][fieldName] > (list[j + 1] && list[j + 1][fieldName])) {
        temp = list[j + 1]
        list[j + 1] = list[j]
        list[j] = temp
      }
    }
  }
  if (order == 'desc') {
    list = list.reverse()
  }
  return list
}

/**
 * 金额转大写
 * @param {*} n 
 */
export function amountToUp(n) {
  let fraction = ['角', '分']
  let digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ]
  let unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ]
  let head = n < 0 ? '欠' : ''
  n = Math.abs(n)
  let s = ''
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  n = Math.floor(n)
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = ''
    for (let j = 0; j < unit[1].length && n > 0; j++) {
        p = digit[n % 10] + unit[1][j] + p
        n = Math.floor(n / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }
  return head + s.replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整')
}