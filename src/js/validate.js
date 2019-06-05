/**
 * 连续数字
 * @param {*} str 
 */
function isSeries(str) {
  return /((?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)|9(?=0)){2}\d)/g.test(str)
}

/**
 * 密码
 * @param {*} str 
 */
function pwd(p) {
  return /^.{6,20}$/g.test(p) && /\d/g.test(pwd)  && /[a-zA-Z~!@#$%^&*()_+]/g.test(p) && !/([a-zA-Z\d~!@#$%^&*()_+]){1}\1{2,}/g.test(p)
}

function pwd1(pwd) {
  return pwd.length >= 6 && pwd.length <= 20 && !pwd.match(/([a-zA-Z\d]){1}?\1{2,}/) && pwd.match(/(\d+[a-zA-Z]+)|([a-zA-Z]+\d+)/g)
}
const p = '122a';
const p1 = '12s23@$%^^@#$$3';
const p2 = '111abb'
console.log(pwd(p))
console.log(pwd(p1))
console.log(pwd(p2))

console.log(pwd1(p))
console.log(pwd1(p1))
console.log(pwd1(p2))