/**
 * 正序符号
 ~ ! @ # $ % ^ & * ( ) _ +
 * @param {*} str 
 */
function isSignSeries(str) {
  return /((?:~(?=!)|!(?=@)|@(?=#)|#(?=$)|$(?=%)|%(?=^)|^(?=&)|&(?=*)|*(?=\())|\((?=\)|\)(?=_)|_(?=+)){2,}\w)/g.test(str)
}

/**
 * 正序符号
 + _ ) ( * & ^ % $ # @ ! ~
 * @param {*} str 
 */
function isSignSeriesReverse(str) {
  return /((?:+(?=_)|_(?=\))|\)(?=\())|\((?=*)|*(?=&)|&(?=^)|^(?=%)|%(?=$)|$(?=#)|#(?=@|@(?=!)|!(?=~)){2,}\w)/g.test(str)
}


/**
 * 正序字母,至少3个一起组成的正序
 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
 * @param {String} str 
 */
function isAlphabetSeries(str) {
  return /((?:a(?=b)|b(?=c)|c(?=d)|d(?=e)|e(?=f)|f(?=g)|g(?=h)|h(?=i)|i(?=j)|j(?=k)|k(?=l)|l(?=m)|m(?=n)|n(?=o)|o(?=p)|p(?=q)|q(?=r)|r(?=s)|s(?=t)|t(?=u)|u(?=v)|v(?=w)|w(?=x)|x(?=y)|y(?=z)){2,}\w)/gi.test(str)
}

/**
 * 逆序字母,至少3个一起组成的逆序
 Z Y X W V U T S R Q P O N M L K J I H G F E D C B A
 * @param {String} str 
 */
function isAlphabetSeriesReverse(str) {
  return /((?:z(?=y)|y(?=x)|x(?=w)|w(?=v)|v(?=u)|u(?=t)|t(?=s)|s(?=r)|r(?=q)|q(?=p)|p(?=o)|o(?=n)|n(?=m)|m(?=l)|l(?=k)|k(?=j)|j(?=i)|i(?=h)|h(?=g)|g(?=f)|f(?=e)|e(?=d)|d(?=c)|c(?=b)|b(?=a)){2,}\w)/gi.test(str)
}


/**
 * 正序数字
 * @param {*} str 
 */
function isNumSeries(str) {
  return /((?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)|9(?=0)){2}\d)/g.test(str)
}

/**
 * 逆序数字
 * @param {*} str 
 */
function isNumSeriesReverse(str) {
  return /((?:9(?=8)|8(?=7)|7(?=6)|6(?=5)|5(?=4)|4(?=3)|3(?=2)|2(?=1)|1(?=0)){2}\d)/g.test(str)
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