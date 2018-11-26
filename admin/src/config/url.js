
const devUrl = '';
const proUrl = 'http://apiUrl.com';

export default {
  apiUrl : process.env.NODE_ENV=='development' ? devUrl : proUrl,
  apiPrefix : "api",
}

