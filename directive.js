(function() {
    "use strict";

    angular
        .module("angularApp")
        .directive("addAddress", handleAddress);

    function handleAddress()
    {
        return {
            restrict: "E",
            /*scope: {},
            transclude: true,*/
            replace: true,
            templateUrl: "/partials/add.html",
            compile : function compile(tElement, tAttrs, transclude){
                console.log("tElement is :  " , tElement);
                //console.log("tAttrs is :  " , tAttrs);
                var city = tAttrs.city;
                var state = tAttrs.state;

                var cityElement = tElement[0].childNodes[9];
                //console.log(cityElement);
                cityElement.value = city;
                
                var stateElement = tElement[0].childNodes[12];
                console.log(stateElement);
                stateElement.value = state;
                
            }
        };
    }

})();