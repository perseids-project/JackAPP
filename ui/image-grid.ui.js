appUI.directive( 'imageGrid',  
function(){
	return {
		restrict: 'E',
		replace: true,
		controller: function imageGridCtrl( $scope, $http ) {
 
			$http.get( 'json/src/vortex.json' ).success(
			function( r ){
				$scope.data = r;
			});
			
		},
		templateUrl:  'ui/image-grid.ui.html'
   }
});