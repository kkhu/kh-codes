class Timer {
  /**
   * 定时器
   * @param {*} time  时间
   * @param {*} fn    回调函数
   * @param {*} step 
   */
  constructor (time, fn, step) {
    this.start(time, fn, step)
  }
  start (time, fn, step = 1000) {
    this.timerItval = setInterval(() => {
      if (time <= 0) {
        clearInterval(this.timerItval)
        fn(time, true)
        return
      }
      fn(time, false)
      time--
    }, step)
  }
}

export default Timer