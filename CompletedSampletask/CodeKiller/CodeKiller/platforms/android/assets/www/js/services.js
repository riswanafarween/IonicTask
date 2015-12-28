angular.module('company.services',['ngResource'])

    .factory('companyService', function($q,$resource) {
		return $resource('https://api.myjson.com/bins/2ggcs', {})
  })
  .value('version', '0.1');
