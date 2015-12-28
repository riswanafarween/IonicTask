angular.module('company', ['ionic', 'company.services', 'company.controllers'])


    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('company-index', {
                url: '/companies',
                templateUrl: 'templates/company-index.html',
                controller: 'companyIndexCtrl'
            })

            .state('company-detail', {
                url: '/company/:companyId',
                templateUrl: 'templates/company-detail.html',
                controller: 'CompanyDetailCtrl'
            })

            .state('company-reports', {
                url: '/company/:companyId/reports',
                templateUrl: 'templates/company-reports.html',
                controller: 'CompanyReportsCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/companies');

    });
