'use strict';

/* Controller
 *
 * Author: Fei Wu
 *
 * */

app.controller('TopicListController', ['$scope', 'TopicListService', function($scope, TopicListService) {
    $scope.title = 'Power of Ten';
    TopicListService.getTopic().then(
        function (data) {
            $scope.topTopics = data;
        }
    );
}]);