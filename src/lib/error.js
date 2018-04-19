class error {
  constructor(code, msg) {
    let error = new Error()

    error.code = code
    error.message = msg ? `${code}: ${msg}` : `${code}: ${this.errorMsg(code)}`

    return error
  }

  errorMsg(code) {
    switch (code) {
    case 415:
      // 参数类型不正确
      return 'incorrect parameter type'
    default:
      return 'unknown error'
    }
  }
}

module.exports = error