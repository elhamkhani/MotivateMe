/**
 * Created by Elham.Khani on 08/01/2016.
 */
'use sctrict';
motivateMeApp.controller('QuoteController',
    function QuoteController($scope){
        $scope.quote={
            title:"default"
           };

        $scope.quotes =[ {
            title:"Be Happy",
            tags:[
                {name: "Happy"},
                {name:"Life"}
            ]}
            , {
                title:"Be Happy2",
                tags:[
                    {name: "Work"},
                    {name:"Life"}
                ]}
            ];

        $scope.tags =[
                {name: "Happy"},
            {name: "Work"},
                {name:"Life"}
            ];

        $scope.write = function(value){
            for (var i = 0, len = $scope.quotes.length; i<len; i++) {
                var arr = $scope.quotes[i].tags;
                for(var j= 0; j< arr.length; j++ )
                {
                    if (value["name"] == arr[j]["name"])
                    {
                        $scope.quote =  $scope.quotes[i];
                        return;
                    }
                }

            };

        }
    }
);

