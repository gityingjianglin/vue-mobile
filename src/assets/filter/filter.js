export default {
  formatNumber: function (num) {
    let result = ''
    if (num === undefined) {
      return ''
    } else {
      num = num.toString()
      let numIntStr = ''
      let numFloatStr = ''
      if (num.indexOf('.') > -1) {
        num = num.split('.')
        numIntStr = num[0]
        numFloatStr = num[1]
      } else {
        numIntStr = num
      }
      result = numIntStr.replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,')
      result += numFloatStr ? '.' + numFloatStr : numFloatStr
    }
    return result
  },
  getWeekDate() {
    var now = new Date();
    var day = now.getDay();
    var weeks = new Array(
      "周日",
      "周一",
      "周二",
      "周三",
      "周四",
      "周五",
      "周六"
    );
    var week = weeks[day];
    return week;
  },
  getTime (time, type = 'yyyy-mm-dd') {
    // let oDate = new Date(time)
    // let preDate = oDate.setTime(oDate.getTime() - 24 * 60 * 60 * 1000)
    // console.log(new Date(preDate))
    let getDate = time ? new Date(time) : new Date()
    let getYear = getDate.getFullYear()
    let getMonth = getDate.getMonth() + 1
    if (getMonth < 10) {
      getMonth = '0' + getMonth
    }
    let getDay = getDate.getDate()
    if (getDay < 10) {
      getDay = '0' + getDay
    }
    let getHour = getDate.getHours()
    if (getHour < 10) {
      getHour = '0' + getHour
    }
    let getMinutes = getDate.getMinutes()
    if (getMinutes < 10) {
      getMinutes = '0' + getMinutes
    }
    var getSeconds = getDate.getSeconds()
    if (getSeconds < 10) {
      getSeconds = '0' + getSeconds
    }
    switch (type) {
      case 'yyyy-mm-dd':
        return getYear + '-' + getMonth + '-' + getDay
      case 'yyyy/mm/dd hh:mm':
        return getYear + '/' + getMonth + '/' + getDay + ' ' + getHour + ':' + getMinutes
      case 'yyyy/mm/dd hh:mm:ss':
        return getYear + '/' + getMonth + '/' + getDay + ' ' + getHour + ':' + getMinutes + ':' + getSeconds
      case 'yyyy.mm.dd':
        return getYear + '.' + getMonth + '.' + getDay
      case 'hh:mm:ss':
        return getHour + ':' + getMinutes + ':' + getSeconds
    }
  },
  // 千分位格式化数据
  formatMoneyWithDesiciontotal (num) {
    if (typeof num === 'number') {
      return (num + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
    } else {
      return '-'
    }
  },
  filterStr (str) {
    if (str) {
      if (str.length > 4) {
        return str.slice(0, 4) + '...'
      } else {
        return str
      }
    } else {
      return str
    }
  },
  filterFiveStr (str) {
    if (str) {
      if (str.length > 5) {
        return str.slice(0, 5) + '...'
      } else {
        return str
      }
    } else {
      return str
    }
  },
  changePhone (str) {
    if (str) {
      return str.slice(0, 3) + '****' + str.slice(7)
    } else {
      return str
    }
  },
  changeIdCard (str) {
    if (str) {
      return str.slice(0, 6) + '********' + str.slice(14)
    } else {
      return str
    }
  },
  changeTime1 (str) {
    if (str) {
      return str.slice(0, 4) + '年' + str.slice(4, 6) + '月' + str.slice(6) + '日'
    }
  },
  changeTime2 (str) {
    if (str) {
      return str.slice(0, 4) + '年' + str.slice(5, 7) + '月' + str.slice(8) + '日'
    }
  },
  changeTimeNew (str, type) {
    if (str) {
      if (type === 'date') {
        let getDate = new Date(str.replace(/-/g, '/'))
        let getYear = getDate.getFullYear()
        let getMonth = getDate.getMonth() + 1
        if (getMonth < 10) {
          getMonth = '0' + getMonth
        }
        let getDay = getDate.getDate()
        if (getDay < 10) {
          getDay = '0' + getDay
        }
        return getYear + '/' + getMonth + '/' + getDay
      } else {
        let getDate = new Date(str)
        let day = getDate.getDay()
        let weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        return weekday[day]
      }
    }
  },
  changeTimes (str) {
    if (str) {
      return str.slice(0, 2) + ':' + str.slice(2)
    }
  },
  changeNum (num) {
    if (num) {
      return (num * 10).toString().indexOf('.') > -1 ? (num * 10).toFixed(1) : (num * 10).toFixed(1)
    }
  },
  // 时间精确到日
  getTimeToDayAndWeek (time) {
    // let oDate = new Date(time)
    // let preDate = oDate.setTime(oDate.getTime() - 24 * 60 * 60 * 1000)
    // console.log(new Date(preDate))
    let getDate = new Date(time)
    let getYear = getDate.getFullYear()
    let getMonth = getDate.getMonth() + 1
    if (getMonth < 10) {
      getMonth = '0' + getMonth
    }
    let getDay = getDate.getDate()
    if (getDay < 10) {
      getDay = '0' + getDay
    }
    let weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    let week = getDate.getDay()
    return getYear + '年' + getMonth + '月' + getDay + '日' + ' ' + weekArr[week]
  },
  getSex1 (str) {
    switch (str) {
      case '0':
        return '男'
      case '1':
        return '女'
      case '2':
        return '未知'
    }
  },
  // 姓名加密隐藏第二位
  encryptName (str) {
    if (str) {
      if (str.length >= 2) {
        let strArr = str.split('')
        for (let i = 1; i < strArr.length; i++) {
          strArr[i] = '*'
        }
        if (strArr.length > 5) {
          strArr = strArr.slice(0, 5)
        }
        return strArr.join('')
      } else {
        return str
      }
    }
    return ''
  }
}
