'use strict';

/* Controller
 *
 * Author: Fei Wu
 * 
 * */

app.controller('TopicDetailController', ['$scope', 'TopicDetailService', '$routeParams', function($scope, TopicDetailService, $routeParams) {
    TopicDetailService.getTopic().then(
        function (data) {
            $scope.topic = data[$routeParams.id];
        }
    );
}]);