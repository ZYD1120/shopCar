app.controller("shoppingCar", ['$scope', 'shopServer', function ($scope, shopServer) {
    shopServer.ajax("data/shooping.json", "get").then(function (data) {
        $scope.arr = data.data;
    });
    $scope.num = 0;
    $scope.money = 0;
    $scope.is = false;
    //删除
    $scope.close = function (val) {
        for (var i = 0; i < $scope.arr.length; i++) {
            if ($scope.arr[i].id == val) {
                $scope.arr.splice(i, 1)
                price();
            }
            if ($scope.arr.length == 0) {
                $scope.is = false
            }
        }
    };
    //全选
    $scope.all = function () {
        for (var i = 0; i < $scope.arr.length; i++) {
            $scope.arr[i].color = "pink"
        }
        $scope.is = true;
        price()
    };
    //单选
    var count = 0;
    $scope.odd = function (val) {
        if ($scope.arr[val].color == "#fff") {
            $scope.arr[val].color = "pink";
            count++;
            $scope.num += $scope.arr[val].num * 1;
            $scope.money += $scope.arr[val].money * 1
        } else {
            $scope.arr[val].color = "#fff";
            count--;
            $scope.num -= $scope.arr[val].num * 1;
            $scope.money -= $scope.arr[val].money * 1
        }
        if (count == $scope.arr.length) {
            $scope.is = true
        } else {
            $scope.is = false
        }
    };
    //加减
    var num = 0;
    $scope.add = function (val, id) {
        for (var i = 0; i < $scope.arr.length; i++) {
            if ($scope.arr[i].id == id) {
                if (val == "-") {
                    $scope.arr[i].num--;
                    price();
                    if ($scope.arr[i].num < 1) {
                        $scope.arr[i].num = 1
                    }
                } else {
                    $scope.arr[i].num++;
                    price();
                }
            }
        }
    };
    function price() {
        $scope.num = 0;
        $scope.money = 0;

        $scope.arr.forEach(function (item) {
            if (item.color=="pink") {
                $scope.num += item.num*1;
                $scope.money += item.num * item.money;
            }
        });
    }
}]);