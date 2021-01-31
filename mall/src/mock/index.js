const Mock = require('mockjs');
require('./mock-template');
window.Mock = Mock;

(function(RAP, Mock) {
  for (let repositoryId in RAP.interfaces) {
	for (let itf of RAP.interfaces[repositoryId]){
      Mock.mock(itf.url, itf.method.toLowerCase(), settings => {
		console.log(`Mock ${itf.method} ${itf.url} =>`, itf.response);
		console.log(settings);
		return Mock.mock(itf.response);});
	}
  }
})(window.RAP, window.Mock);