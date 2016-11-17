angular.module('adoptionBlog')
.controller('AdminDeleteCtrl', function (@scope, $http) {
    $scope.url = 'http://localhost:9292/api/blogs';
    $scope.posts = [];

    $scope.fetch = function () {
        $http.get($scope.url).success(function(results) {
            $scope.posts = results;

        }).error(function(err){
            console.log(err)
        });
    };

    $scope.removeBlogEntry = function(blog) {
        console.log(blog);
        var yaSure = confirm('are u sure u want to delete that post?');
        if(yaSure) {
            $http.delete($scope.url + blog.id).success(function (result) {
                $scope.fetch();//autoupdate my list
            }).error(function (err) {
                console.log(err);
            });
        }
    };
    $scope.fetch();

});