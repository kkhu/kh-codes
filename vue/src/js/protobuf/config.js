import Types from './constant'

let codeMethodMap = new Map()

// 响应protobuf Message 名
codeMethodMap.set(Types.LOG_IN_STC_MSG, 'LoginStcMsg')
codeMethodMap.set(Types.ERROR_MSG_STC_MSG, 'ErrorMsgStcMsg')

// 请求
codeMethodMap.set(Types.LOG_IN_CTS_MSG, 'LoginCtsMsg')


export default codeMethodMap