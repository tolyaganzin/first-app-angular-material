'use strict'
angular.module( 'amApp', [ 'ngMaterial' ] );

angular.module('amApp')
  .controller('menuController',['$mdSidenav', '$mdMedia', '$scope',
    function ($mdSidenav, $mdMedia, $scope) {
      this.isOpen=!$mdMedia('gt-sm');
    //  console.log(this.isOpen);
      $scope.$watch(function() { return $mdMedia('gt-sm'); }, angular.bind(this,function(isSm) {
        this.isOpen = isSm;
        if(this.menuImg)
          this.menuImg = 'menu.svg';
        console.log(this.isOpen);
      }));

      this.menuImg = 'menu.svg';

      this.menu = function(){
          if(this.isOpen) {
            this.isOpen=false;
            this.menuImg = 'menu.svg';
          }
          else {
            this.isOpen=true;
            this.menuImg = 'more_vert.svg';
          }
        };

      // this.menu = function() {
      //   $mdSidenav('left').toggle();
      // };

    }]);
