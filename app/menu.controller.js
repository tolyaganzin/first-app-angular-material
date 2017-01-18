'use strict'
angular.module( 'amApp', [ 'ngMaterial' ] );

angular.module('amApp')
  .controller('menuController',['$mdSidenav', '$mdMedia', '$scope', '$mdBottomSheet',
    function ($mdSidenav, $mdMedia, $scope, $mdBottomSheet) {


      this.users=[
        {
          name: 'Thomas Burleson',
          avatar: 'android.svg',
          content: 'Bacon ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          name: 'Aron Frost',
          avatar: 'account.svg',
          content: 'Chease ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ];
      this.selected=this.users[0];
      this.isOpen=!$mdMedia('gt-sm');

      $scope.$watch(function() { return $mdMedia('gt-sm'); }, angular.bind(this,function(isSm) {
        this.isOpen = isSm;
        if(this.isOpen)
          this.menuImg = 'menu.svg';
        console.log(this.isOpen);
      }));

      this.menuImg = 'menu.svg';

      this.selectUser=function(user){
        this.selected=user;
      };

      this.share=function (selectedUser) {
        $mdBottomSheet.show({
          template: '<md-bottom-sheet><h3>Hello, '+selectedUser.name+'!</h3></md-bottom-sheet>',
          parent: '#content'
        });
        function UserSheetController(){
          this.user=selectedUser;
          this.performAction=function (action) {
            $mdBottomSheet.hide();
          };
        }
      };

      this.menu = function() {
        $mdSidenav('left').toggle();
      };

    }]);
