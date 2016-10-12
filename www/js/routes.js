angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('drift', {
    url: '/home',
    templateUrl: 'templates/drift.html',
    controller: 'driftCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('searchAddress', {
    url: '/search_address',
    templateUrl: 'templates/searchAddress.html',
    controller: 'searchAddressCtrl'
  })

  .state('socialDrift', {
    url: '/page5',
    templateUrl: 'templates/socialDrift.html',
    controller: 'socialDriftCtrl'
  })

  .state('billingInfo', {
    url: '/billing',
    templateUrl: 'templates/billingInfo.html',
    controller: 'billingInfoCtrl'
  })

  .state('leaderboard', {
    url: '/leaderboard',
    templateUrl: 'templates/leaderboard.html',
    controller: 'leaderboardCtrl'
  })

  .state('account', {
    url: '/account',
    templateUrl: 'templates/account.html',
    controller: 'accountCtrl'
  })

$urlRouterProvider.otherwise('/home')

  

});