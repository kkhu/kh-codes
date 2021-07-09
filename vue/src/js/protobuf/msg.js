import protobuf from 'protobufjs'
import protobufCTS from '../../../protobuf/protobuf_cts'
import protobufSTC from '../../../protobuf/protobuf_stc'
import { intToByteArray, bytesToInt, isArrayBuffer } from './byte'
import Types from './constant'
import codeMapping from './config'

const HEAD_LENGTH = 8
const GAME_ID = 11
const DEVICE_TYPE = 3

function getByteArrayComPkgHead (cmdId, bodySize, key = 0) {
  return [...intToByteArray(cmdId, 2), ...intToByteArray(bodySize, 4), ...intToByteArray(key, 2)]
}

/**
 * 登录
 * @param {*} params
 * {
 *  token
 *  tableId
 * }
 */
export function loginCtsMsg (params = {}) {
  return requestComParams(codeMapping.get(Types.LOG_IN_CTS_MSG), Types.LOG_IN_CTS_MSG, Object.assign({ deviceId: DEVICE_TYPE, gameId: GAME_ID }, params))
}

/**
 * 请求封装
 * @param {*} entityType
 * @param {*} cmdId
 * @param  {...any} params
 */
function requestComParams (entityType, cmdId, params = {}) {
  let protobufEntity = protobufCTS.lookup(entityType)
  let data = protobufEntity.encode(protobufEntity.create(params)).finish()
  return protobuf.util.newBuffer([...getByteArrayComPkgHead(cmdId, data.length, params.key), ...data])
}

/**
 * 响应封装
 * @param {*} buffer
 * @param {*} callback
 */
export function parseResponse (buffer, callback) {
  if (!isArrayBuffer(buffer)) {
    console.log('error: not a ArrayBuffer type in parseResponse')
    return
  }
  if (buffer.byteLength <= HEAD_LENGTH) {
    console.log('info: response no body')
    return
  }
  let dataView = new DataView(buffer.slice(0, 2))
  let code = bytesToInt([dataView.getUint8(1), dataView.getUint8(0)])
  const pkgBodyBuffer = protobuf.util.newBuffer(buffer.slice(8))
  let protobufEntity = protobufSTC.lookup(codeMapping.get(code))
  let message = protobufEntity.decode(pkgBodyBuffer)
  typeof callback === 'function' && callback(code, message)
}
