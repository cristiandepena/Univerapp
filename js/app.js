var app = angular.module('universidadApp',['ngRoute','univerFilters', 'ui.mask']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
	$scope.menuSuperior = 'parciales/menu.html';
	$scope.telefonoMask = "999-9999";


	$scope.setActive = function(Opcion){

		$scope.mInicio     = "";
		$scope.mProfesores = "";
		$scope.mAlumnos    = "";

		$scope[Opcion] = "active";

	}

}]);

angular.module('univerFilters', []).filter('telefono', function() {
	return function(numero) {
		return numero.substring(0,4) + "-" + numero.substring(4);
	}
});



