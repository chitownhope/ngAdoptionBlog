angular.module('adoptionBlog')
.controller('AdminCreateCtrl', function ($scope, $http) {
    $scope.messages = [
        'please fill out all fields',
        'thanks for your post. view the blog to see it live'
    ];
    $scope.message = $scope.messages[0];

    $scope.createPost = function(title, content, tags) {
        $http({
            url: 'http://localhost:9292/api/blogs',
            method: 'POST',
            params: {title: title, content: content, tags: tags}
        }).success(function (results) {
            $scope.message = scope.message[1];
        }).error(function (err) {
            console.log('ajax use go down hole--ERROR');
            console.log(err);
        });
    };

});