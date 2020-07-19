// import splitNum from '../../src/js/util'

function splitNum(num, splitSymbal = ',') {
  return (num + '').replace(/\B(?=(\d{3})+(?!\d))/g, splitSymbal)
}

let money = 12345678

console.log(splitNum(money))