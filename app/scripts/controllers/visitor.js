'use strict';

/**
 * @ngdoc function
 * @name bookitmedApp.controller:VisitorCtrl
 * @description
 * # VisitorCtrl
 * Controller of the bookitmedApp
 */
angular.module('bookitmedApp')
  .controller('VisitorCtrl', function ($scope) {

  this.visitor = {email:""};

  this.showThanks = function() {
    alert("THANK YOU!\nWe will get back to you with the news about our progress.");
  }

});
