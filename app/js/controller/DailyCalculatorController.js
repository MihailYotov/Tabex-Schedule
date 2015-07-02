'use strict';

app.controller('DailyCalculatorController',
    function ($scope, $rootScope) {
        $scope.inputData = {};

        var minutes = [];
        var hours = [];
        
        for (var i = 0; i < 60; i++) {
            var tempI = i;
            if (tempI < 10) {
                tempI = "0" + tempI;
            }
          minutes.push(tempI)
        }

        for (var j = 0; j < 24; j++) {
            var tempJ = j;
            if (tempJ < 10) {
                tempJ = "0" + tempJ;
            }
            hours.push(tempJ)
        }

        $scope.minutes = minutes;
        $scope.hours = hours;

        $scope.calculateDaily = function (inputData) {
            console.log(inputData.day);

            switch (inputData.day) {
                case "1-3":
                    calculateTime(6, inputData.hour, inputData.minutes, 2, 0);
                    break;
                case "4-12":
                    calculateTime(5, inputData.hour, inputData.minutes, 2, 30);
                    break;
                case "13-16":
                    calculateTime(4, inputData.hour, inputData.minutes, 3, 0);
                    break;
                case "17-20":
                    calculateTime(3, inputData.hour, inputData.minutes, 5, 0);
                    break;
                case "21-25":
                    calculateTime(2, inputData.hour, inputData.minutes, 6, 0);
                    break;
                default:
                    console.log("Error in day choosing switch.");
                    break;
            }
        };

        function calculateTime(pillsCount, startHour, startMinutes, hoursPeriod, minutesPeriod) {
            var time = new Date(0, 0, 0, 0, 0, 0, 0);
            time.setHours(time.getHours() + startHour);
            time.setMinutes(time.getMinutes() + startMinutes);

            var outputTime = [];

            for (var i = 1; i < pillsCount; i++) {
                var pillInRow = "";

                switch (i) {
                    case 1:
                        pillInRow = "Second pill: ";
                        break;
                    case 2:
                        pillInRow = "Third pill: ";
                        break;
                    case 3:
                        pillInRow = "Fourth pill: ";
                        break;
                    case 4:
                        pillInRow = "Fifth pill: ";
                        break;
                    case 5:
                        pillInRow = "Sixth pill: ";
                        break;
                    case 6:
                        pillInRow = "Seventh pill: ";
                        break;
                    default:
                        console.log("Error in the number of pills switch.");
                }

                time.setHours(time.getHours() + hoursPeriod);
                time.setMinutes(time.getMinutes() + minutesPeriod);
                var tempH = time.getHours();
                var tempM = time.getMinutes();
                var tempRez = "";

                if (tempH < 10) {
                    tempH = "0" + tempH;
                }

                if (tempM < 10) {
                    tempM = "0" + tempM;
                }

                tempRez = pillInRow + tempH + ":" + tempM + " h";
                outputTime.push(tempRez);
            }

            return $scope.outputTime = outputTime;
        }
    });