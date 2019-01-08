global.constants = {
  env: window.location.host.indexOf('leewr.com') > -1 ? 'prod' : 'dev',
  ImageHost:
    window.location.host.indexOf('leewr.com') > -1
      ? `${window.location.protocol}//img.leewr.com`
      : 'http://localhost:7001',
  webpa: false
}
