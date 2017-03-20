
angular.module('myApp', []);
angular.module('myApp').controller('myCtrl', function ($scope) {
    var vm = this;
    /*
    TODO@interviewee
    These are examples of how to use our API. You can comment them out.
    Write your code in this file.
     */

    // var searchFor = 'vo';
    // StockService.search(searchFor).then(function (results) {
    //     console.log('\n\nSearched for: ' + searchFor, results);
    // });

    // var idToAdd = 17250;
    // StockService.addToPortfolio(idToAdd).then(function (result) {
    //     console.log('Added to portfolio: ' + idToAdd, result);
    // });

    // StockService.streamUpdates(function (portfolio) {
    //     console.log('Updates: ', portfolio);
    // });

    vm.searchFor = '';
    vm.searchResults = [];
    vm.doSearch = function (searchFor) {
        StockService.search(searchFor).then(function (results) {
            console.log('\n\nSearch for: ' + searchFor, results);
            vm.searchResults = results;
            $scope.$apply();
        });
    }
    vm.clearSearch = function() {
        vm.searchFor = '';
        vm.searchResults = [];
    }

    vm.portfolio = {};
    vm.addToPortfolio = function (idToAdd) {
        StockService.addToPortfolio(idToAdd).then(function (result) {
            console.log('Added to portfolio: ' + idToAdd, result);

            vm.portfolio[result.id] = result;
            $scope.$apply();
        });
    }

    vm.removeFromPortfolio = function(idToRemove) {
        delete vm.portfolio[idToRemove];
    }

    StockService.streamUpdates(function (portfolio) {
        angular.forEach(portfolio, function(val, key) {
            vm.portfolio[key].price = val;
        });
        $scope.$apply();
    });
});
