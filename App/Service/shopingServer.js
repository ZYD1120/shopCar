app.factory("shopServer", function ($http, $q) {
    return {
        ajax: function (url,type) {
            var der=$q.defer();
            $http({
                url:url,
                method:type
            }).then(function (data) {
                der.resolve(data)
            });
            return der.promise
        }
    }
});