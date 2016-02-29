'use strict';

/**
 * @ngdoc function
 * @name restconsumerApp.controller:PublicCtrl
 * @description
 * # PublicCtrl
 * Controller of the restconsumerApp
 */
angular.module('restconsumerApp')
	.controller('PublicCtrl', function Hello($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
})