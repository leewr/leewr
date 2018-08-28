const moment = require('moment')
exports.timeFormate = (val) => {
	console.log('val', val)
  return moment(new Date(val)).format('YYYY.MM.DD HH:mm')
}