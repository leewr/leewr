import moment from 'moment';
import Vue from 'vue';

const filter = () => {
  // 格式化为日期
  Vue.filter('formatDate', (date) => {
    if (!date) return '';
    const time = moment(date).format('YYYY-MM-DD');
    return time;
  });
  // 格式化为时分秒
  Vue.filter('formatDateSS', (date) => {
    if (!date) return '';
    const time = moment(date).format('YYYY-MM-DD HH:mm:ss');
    return time;
  });
  // 格式化为时分
  Vue.filter('formatDate_mm', (date) => {
    if (!date) return '';
    const time = moment(date).format('YYYY-MM-DD HH:mm');
    return time;
  });
  // 格式化为汉字
  Vue.filter('formatDate_zh', (date) => {
    if (!date) return '';
    const map = new Map([
      [' 1', ' 周一'],
      [' 2', ' 周二'],
      [' 3', ' 周三'],
      [' 4', ' 周四'],
      [' 5', ' 周五'],
      [' 6', ' 周六'],
      [' 7', ' 周日'],
      [' AM', ' 上午'],
      [' PM', ' 下午'],
    ]);
    const time = moment(date).format('YYYY-MM-DD E A');
    return time.replace(/ [1-7]| AM| PM/g, match => map.get(match));
  });
  // 格式化为日期，无返回'--'
  Vue.filter('formatDate__', (date) => {
    if (!date) return '--';
    const time = moment(date).format('YYYY-MM-DD');
    return time;
  });
  // 格式化为时分秒，无返回'--'
  Vue.filter('formatDateSS__', (date) => {
    if (!date) return '--';
    const time = moment(date).format('YYYY-MM-DD HH:mm:ss');
    return time;
  });
  // 格式化时间段
  Vue.filter('formatMintueSecond', (time) => {
    /* eslint-disable */
    const seconds = ~~(time / 1000);
    const minute = ~~(seconds / 60);
    const second = seconds % 60;
    return `${minute < 10 ? ('0' + minute) : minute}分${second < 10 ? ('0' + second) : second}秒`;
    /* eslint-enable */
  });
  // 给手机号脱敏处理
  Vue.filter('formatPhone', (phone) => {
    if (!phone) return '';
    const result = `${phone.substring(0, 3)}****${phone.substring(7)}`;
    return result; // eslint-disable-line
  });
  // 格式化成百分比
  Vue.filter('percentFormat', (num) => {
    if (!num && num !== 0) return '--';
    const result = `${+parseFloat((num * 100).toPrecision(12))}%`;
    return result;
  });
  Vue.filter('textSubstr', (val) => {
    if (!val) return '';
    if (val.length > 30) val = val.substr(0, 30)
    return val + '...';
  });
};

export default filter;
