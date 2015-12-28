angular.module('company.controllers', [])

    .controller('companyIndexCtrl',['$scope', 'companyService',function ($scope, companyService) {

        $scope.query = {}
		$scope.queryBy = '$'
		$scope.companies={};

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            findAllEmployees();
        }

        $scope.search = function () {
		var companyName = $scope.searchKey;
		console.log(companyName);
		companyService.query(function(response) {
				var company = response.filter(function (el) {
					return el.comapnyName == companyName;
				});
				console.log("after filter");
				console.log(company[0]);
				$scope.company = company[0];
		});
        }
		 companyService.query(function(response) {
				$scope.companies = response;
		});
    }])

    .controller('CompanyDetailCtrl',['$scope', '$stateParams','companyService',function ($scope, $stateParams, companyService) {
		var companyId = $stateParams.companyId;
		console.log(companyId);
		companyService.query(function(response) {
				var company = response.filter(function (el) {
					return el.companyID == companyId;
				});
				console.log("after filter");
				console.log(company[0]);
				$scope.company = company[0];
		});
    }])

    .controller('CompanyReportsCtrl', function ($scope, $stateParams, companyService) {
        companyService.findByManager($stateParams.employeeId).then(function(employees) {
            $scope.employees = employees;
        });
    });
