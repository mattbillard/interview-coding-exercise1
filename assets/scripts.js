
angular.module('myApp', []);
angular.module('myApp').controller('myCtrl', function ($scope) {
    var vm = this;
    /*
    TODO@interviewee
    These are examples of how to use our API. You can comment them out.
    Write your code in this file.
     */

    var searchFor = 'vo';
    StockService.search(searchFor).then(function (results) {
        console.log('\n\nSearched for: ' + searchFor, results);
    });

    var idToAdd = 17250;
    StockService.addToPortfolio(idToAdd).then(function (result) {
        console.log('Added to portfolio: ' + idToAdd, result);
    });

    StockService.streamUpdates(function (portfolio) {
        console.log('Updates: ', portfolio);
    });
});
