/**
 * @desc 密码强弱评分
 * 
    一、密码长度：
              5 分: 小于等于5 个字符
              10 分: 6 到8 字符
              25 分: 大于等于9 个字符
    二、字母：
              0 分: 没有字母
              10 分: 全都是小（大）写字母
              20 分: 大小写混合字母
    三、数字:
              0 分: 没有数字
              10 分: 1 个数字
              20 分: 大于1 个数字
    四、符号:
              0 分: 没有符号
              10 分: 1 个符号
              25 分: 大于1 个符号
    五、奖励:
              2 分: 字母和数字
              3 分: 字母、数字和符号
              5 分: 大小写字母、数字和符号

  根据密码评分，将密码划分成以下4个等级：
  >= 90: 非常安全
  >= 70: 安全
  >= 50: 一般
  >= 0: 弱
 * 
 * @param {String} pwd 密码
 */
export function checkPwdScore(pwd) {
  pwd = String(pwd)
  if (!pwd) return 0

  let rule1Score = 0
  let rule2Score = 0
  let rule3Score = 0
  let rule4Score = 0
  let rule5Score = 0

  // 规则1 长度
  if (pwd.length >= 9) {
    rule1Score = 25
  } else if (pwd.length >= 6 && pwd.length <= 8) {
    rule1Score = 10
  } else {
    rule1Score = 5
  }

  // 规则2 字母
  if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) {
    rule2Score = 20
  } else if (/[a-z]/.test(pwd) || /[A-Z]/.test(pwd)) {
    rule2Score = 10
  } else {
    rule2Score = 0
  }
  
  // 规则3 数字
  let numLen = (pwd.match(/\d/g) || []).length
  if (numLen > 1) {
    rule3Score = 20
  } else if (numLen === 1) {
    rule3Score = 10
  } else {
    rule3Score = 0
  }

  // 规则4 符号
  let signLen = (pwd.match(/[~!@#$%^&*()_+]/g) || []).length
  if (signLen > 1) {
    rule4Score = 25
  } else if (signLen === 1) {
    rule4Score = 10
  } else {
    rule4Score = 0
  }

  // 规则5 奖励
  if (/\d/.test(pwd) && /[a-z]/.test(pwd) && /[A-Z]/.test(pwd) &&  /[~!@#$%^&*()_+]/.test(pwd)) {
    rule5Score = 5
  } else if (/\d/.test(pwd) && (/[a-z]/.test(pwd) || /[A-Z]/.test(pwd)) &&  /[~!@#$%^&*()_+]/.test(pwd)) {
    rule5Score = 3
  } else if (/\d/.test(pwd) && (/[a-z]/.test(pwd) || /[A-Z]/.test(pwd))) {
    rule5Score = 2
  } else {
    rule5Score = 0
  }

  return (rule1Score + rule2Score + rule3Score + rule4Score + rule5Score)
}

/**
 * 获取密码强度级别
 * @param {String} pwd 
 */
export function getPwdSafeLevel (pwd) {
  let score = checkPwdScore(pwd)
  let level = 1
  if (score >= 90) {
    level = 4
  } else if (score >= 70) {
    level = 3
  } else if (score >= 50) {
    level = 2
  } else {
    level = 1
  }
  return level
}