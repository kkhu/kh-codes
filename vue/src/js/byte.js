/**
 * 数字转字节数组
 * @param {*} value 
 * @param {*} byteLength 
 */
export function intToByteArray (value, byteLength) {
  let buffer = new ArrayBuffer(byteLength)
  let dataView = new DataView(buffer)
  let byteM = {2: 'setUint16', 4: 'setUint32'}
  dataView[byteM[byteLength]](0, value, true)
  return viewToByteArray(dataView)
}

function viewToByteArray (view) {
  let byteArray = []
  for (let i = 0; i < view.byteLength; i++) {
    byteArray.push(view.getUint8(i))
  }
  return byteArray
}

/**
 * 字节数组专数字
 * @param {*} x 
 */
export function bytesToInt (x){
  let val = 0
  for (var i = 0; i < x.length; ++i) {        
      val += x[i]
      if (i < x.length-1) {
          val = val << 8
      }
  }
  return val
}

export function isArrayBuffer (buffer) {
  return Object.prototype.toString.call(buffer) === '[object ArrayBuffer]'
}
