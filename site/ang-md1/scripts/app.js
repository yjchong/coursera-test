(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', mainFunc);
  
  //to protect your code from minification
  mainFunc.$inject = ['$scope']; 
  
  function mainFunc($scope) {
	$scope.dishes = "";	//don't put wrong place	
	$scope.message = ""; //don't put wrong place
	$scope.colorClass = "";	
	$scope.check = function () {  		
		var dishCounter = 0;
		
		if($scope.dishes==""){	
			$scope.message = "Please enter data first";	
			$scope.colorClass = "red";			
		}else{	
		
			var arrDishes = $scope.dishes.split(",");
		
			for(var i=0;i<arrDishes.length;i++){
				if(arrDishes[i].trim()!=""){
					dishCounter++;
				}
			}
			$scope.colorClass = "green";
			if(dishCounter <= 3){			
				$scope.message = "Enjoy!";				
			}else{				
				$scope.message = "Too Much!";	
			}
	}	
		
  };


  

};

}
)();