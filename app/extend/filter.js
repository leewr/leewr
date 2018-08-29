const moment = require('moment')
exports.timeFormate = (val) => {
  return moment(new Date(val)).format('YYYY.MM.DD HH:mm')
}

exports.dayFormate = (val) => {
  return moment(new Date(val)).format('M.D HH:mm')
}