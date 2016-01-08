/**
 * Created by Elham.Khani on 08/01/2016.
 */
'use sctrict';
motivateMeApp.controller('QuoteController',
    function QuoteController($scope, $http) {
        $scope.quote = {
            title: "default"
        };

        $scope.write = function (value) {
            var $quotes = getQuotes(value);


            //  $scope.quote =  $scope.quotes[i];


        };


        function getQuotes(tag) {
            var cx ="003349064938656858571:ssao9mx4hg8";
            var apiKey="AIzaSyB0wTD18aEfb1t-jCmzBgzbrkyLxrmKvWo";

            $http({
                method: 'GET',
                url: 'https://www.googleapis.com/customsearch/v1?cx='+cx+'&key='+apiKey+'&q=' + tag.name
            }).then(function successCallback(response) {
                $scope.quote = response.data.items[0];
            }, function errorCallback(response) {
                console.log('Error retrieving News' + response);
            });

        }




        $scope.tags =[
            {name: "Accomplished"},
            {name: "Accepted"},
            {name: "Aggravated"},
            {name: "Alone"},
            {name: "Amused"},
            {name: "Angry"},
            {name: "Annoyed"},
            {name: "Anxious"},
            {name: "Apathetic"},
            {name: "Apologetic"},
            {name: "Ashamed"},
            {name: "Awake"},
            {name: "Bewildered"},
            {name: "Bitchy"},
            {name: "Bittersweet"},
            {name: "Blah"},
            {name: "Blank"},
            {name: "Blissful"},
            {name: "Bored"},
            {name: "Bouncy"},
            {name: "Brooding"},
            {name: "Calm"},
            {name: "Cautious"},
            {name: "Chaotic"},
            {name: "Cheerful"},
            {name: "Chilled"},
            {name: "Chipper"},
            {name: "Cold"},
            {name: "Complacent"},
            {name: "Confused"},
            {name: "Content"},
            {name: "Cranky"},
            {name: "Crappy"},
            {name: "Crazy"},
            {name: "Crushed"},
            {name: "Curious"},
            {name: "Cynical"},
            {name: "Dark"},
            {name: "Defensive"},
            {name: "Delusional"},
            {name: "Demented"},
            {name: "Depressed"},
            {name: "Determined"},
            {name: "Devious"},
            {name: "Dirty"},
            {name: "Disappointed"},
            {name: "Discontent"},
            {name: "Ditzy"},
            {name: "Dorky"},
            {name: "Drained"},
            {name: "Drunk"},
            {name: "Ecstatic"},
            {name: "Energetic"},
            {name: "Enraged"},
            {name: "Enthralled"},
            {name: "Envious"},
            {name: "Exanimate"},
            {name: "Excited"},
            {name: "Exhausted"},
            {name: "Fearful"},
            {name: "Flirty"},
            {name: "Forgetful"},
            {name: "Frustrated"},
            {name: "Full"},
            {name: "Geeky"},
            {name: "Giddy"},
            {name: "Giggly"},
            {name: "Gloomy"},
            {name: "Good"},
            {name: "Grateful"},
            {name: "Groggy"},
            {name: "Grumpy"},
            {name: "Guilty"},
            {name: "Happy"},
            {name: "Heartbroken"},
            {name: "High"},
            {name: "Hopeful"},
            {name: "Hot"},
            {name: "Hungry"},
            {name: "Hyper"},
            {name: "Impressed"},
            {name: "Indescribable"},
            {name: "Indifferent"},
            {name: "Infuriated"},
            {name: "Irate"},
            {name: "Irritated"},
            {name: "Jealous"},
            {name: "Joyful"},
            {name: "Jubilant"},
            {name: "Lazy"},
            {name: "Lethargic"},
            {name: "Listless"},
            {name: "Lonely"},
            {name: "Loved"},
            {name: "Mad"},
            {name: "Melancholy"},
            {name: "Mellow"},
            {name: "Mischievous"},
            {name: "Moody"},
            {name: "Morose"},
            {name: "Naughty"},
            {name: "Nerdy"},
            {name: "Numb"},
            {name: "Okay"},
            {name: "Optimistic"},
            {name: "Peaceful"},
            {name: "Pessimistic"},
            {name: "Pissed off"},
            {name: "Pleased"},
            {name: "Predatory"},
            {name: "Quixotic"},
            {name: "Rapturous"},
            {name: "Recumbent"},
            {name: "Refreshed"},
            {name: "Rejected"},
            {name: "Rejuvenated"},
            {name: "Relaxed"},
            {name: "Relieved"},
            {name: "Restless"},
            {name: "Rushed"},
            {name: "Sad"},
            {name: "Satisfied"},
            {name: "Shocked"},
            {name: "Sick"},
            {name: "Silly"},
            {name: "Sleepy"},
            {name: "Smart"},
            {name: "Stressed"},
            {name: "Surprised"},
            {name: "Sympathetic"},
            {name: "Thankful"},
            {name: "Tired"},
            {name: "Touched"},
            {name: "Uncomfortable"},
            {name: "Weird"}
            ];


    }
);

