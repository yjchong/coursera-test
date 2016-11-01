(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', mainFunc);
  
  //to protect your code from minification
  mainFunc.$inject = ['$scope']; 
  
  function mainFunc($scope) {
			

  $scope.msg = function () {   
  
    var menuList = $scope.txtLunchMenu;
	var comma =",";
	var arrMenuList = menuList.split(comma);	
					
		if(arrMenuList.length <= 3)
			$scope.msgLunchMenu = "Enjoy!";				
		else 
			$scope.msgLunchMenu = "Too Much!";	
		
		
  };


  

};

}
)();