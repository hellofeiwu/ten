app.factory('TopicDetailService', ['$http', function($http) {
    var getTopic = function() {
        return $http({
            method: 'GET',
            url: 'http://api.spider.gobeta.com.cn/admin/website',
            headers: {
                Accept: 'application/json'
            }
        }).then(function successCallback(response) {
            return response.data;
        }, function errorCallback(response) {
            return response;
        });
    };

    return {
        getTopic: getTopic
    };
}]);