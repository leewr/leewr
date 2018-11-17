var axios = require('axios');
var cancelObj = {};

function request(options) {
  return new Promise((resolve, reject) => {
    var cancel;

    var httpServer = axios.create({
      responseType: 'json',
      method: options.method,
      baseURL : options.url,
      headers: {
        'Content-Type': 'application/json',
      },
      transformRequest: [function (data) {
        return JSON.stringify(data);
      }],
      cancelToken: new axios.CancelToken(function (c) {
        cancel = c  // record the cancel function
      })
    })

    var common = httpServer.defaults.headers.common;
    httpServer.defaults.headers.common = Object.assign(common, options.headers);
    // every request will do this
    httpServer.interceptors.request.use(function (config) {
      var cancelMultiple = options.cancelMultiple ? options.cancelMultiple : false;
      //if need cancelMultiple
      if(cancelMultiple){
        if (cancelObj[config.baseURL]) {//

          cancelObj[config.baseURL] = cancel;
          cancelObj[config.baseURL]('request cancelled');

        } else {
          cancelObj[config.baseURL] = cancel;
        }
      }
      config.data = options.data ? options.data : {};
      return config;
    
    }, function (error) {
    
      return Promise.reject(error);
    })

    httpServer.interceptors.response.use(function(response){
      
      cancelObj[response.config.baseURL] = null;
      return response;
      
    }, function(error){
    	cancelObj[error.response.config.baseURL] = null;
      if (error.response) {
        return Promise.reject(error);
      } else if (error.request) {
        return Promise.reject({data: 'no response'});
      } else {
        return Promise.reject({data: error.message});
      }
    });
  
    httpServer().then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err)
    })

 })
}

module.exports = {
 request : request
};