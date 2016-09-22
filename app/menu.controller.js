'use strict'
angular.module( 'amApp', [ 'ngMaterial' ] );

angular.module('amApp')
  .controller('menuController',[
    function () {
      this.isOpen = false;
      this.menuImg = 'menu.svg';
      this.menu = function(){
        if(this.isOpen) {
          this.isOpen = false;
          this.menuImg = 'menu.svg';
        }
        else {
          this.isOpen = true;
          this.menuImg = 'keyboard_backspace.svg';
        }
      };
    }]);
