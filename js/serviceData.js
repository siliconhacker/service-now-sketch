var serviceApp = angular.module('serviceApp', []);

serviceApp.controller('ServiceCtrl', function ($scope) {
     
      var aSolutions = [{

      "name": "Solution 1",
      "industry": "Finance",
      "product": "ITOM"
      },
      {

      "name": "Solution 2",
      "industry": "Finance",
      "product": "ITSM"
      },
      {

      "name": "Solution 3",
      "industry": "Education",
      "product": "ITSM"
      },
      {

      "name": "Solution 4",
      "industry": "Media",
      "product": "HR Service Automation"
      },
      {

      "name": "Solution 5",
      "industry": "Federal",
      "product": "ITSM"
      },
      {

      "name": "Solution 6",
      "industry": "Federal",
      "product": "ITBM"
      },
      {

      "name": "Solution 7",
      "industry": "Retail",
      "product": "Knowledge Management"
      },
      {

      "name": "Solution 8",
      "industry": "Retail",
      "product": "SIAM"
      },
      {

      "name": "Solution 9",
      "industry": "Technology",
      "product": "Work Management"
      },
      {

      "name": "Solution 10",
      "industry": "Services",
      "product": "Asset Management"
      }];
  
      // solutions data set and get default value
      $scope.jSolutions = null;
      $scope.jSolutions = aSolutions;
      $scope.jSolutions.splice(0, 0,{"name": "init", "industry": "any industry","product": "any product"});
      $scope.serviceSolutionIndustry = $scope.jSolutions[0].name;  
  
      // solutions data set and get default value
      $scope.jSolutions2 = null;
      $scope.jSolutions2 = aSolutions;
      $scope.jSolutions2.splice(0, 0,{"name": "init", "industry": "any industry","product": "any product"});
      $scope.serviceSolutionProduct = $scope.jSolutions2[0].name;  
     
 
      var aWins = [{

      "name": "Solution Wins 1",
      "industry": "Finance",
      "product": "IT Cost Management"
      },
      {

      "name": "Solution Wins 2",
      "industry": "Finance",
      "product": "Facilities Service Management"
      },
      {

      "name": "Solution Wins 3",
      "industry": "Education",
      "product": "Facilities Service Management"
      },
      {

      "name": "Solution Wins 4",
      "industry": "Media",
      "product": "HR Service Automation"
      },
      {

      "name": "Solution Wins 5",
      "industry": "Federal",
      "product": "Facilities Service Management"
      },
      {

      "name": "Solution Wins 6",
      "industry": "Federal",
      "product": "IT Governance, Risk, and Compliance"
      },
      {

      "name": "Solution Wins 7",
      "industry": "Media",
      "product": "Knowledge Management"
      },
      {

      "name": "Solution Wins 8",
      "industry": "Media",
      "product": "IT Governance, Risk, and Compliance"
      },
      {

      "name": "Solution Wins 9",
      "industry": "Technology",
      "product": "Work Management"
      },
      {

      "name": "Solution Wins 10",
      "industry": "Technology",
      "product": "Asset Management"
      }
    ];


    // wins data set and get default value
    $scope.jWins = null;
    $scope.jWins = aWins;
    $scope.jWins.splice(0, 0,{"name": "init", "industry": "any industry","product": "any product"});
    $scope.serviceWinsIndustry = $scope.jWins[0].name;  

    // wins data set and get default value
    $scope.jWins2 = null;
    $scope.jWins2 = aWins;
    $scope.jWins2.splice(0, 0,{"name": "init", "industry": "any industry","product": "any product"});
    $scope.serviceWinsProduct = $scope.jWins2[0].name;  

    // solutions - paint whats selected
    $scope.jLabelSelected3 = '';
    // wins - paint whats selected
    $scope.jLabelSelected4 = '';
    // find it button
    $scope.whatsSelected = function() {
      if ($scope.jData === 'jSolutionsView') {
        alert('"industry":"' +$scope.serviceSolutionIndustry + '", "product":"' + $scope.serviceSolutionProduct + '"');
      }
       
      if ($scope.jData === 'jSolutionsWinsView') {
        alert('"industry":"' +$scope.serviceWinsIndustry + '", "product":"' + $scope.serviceWinsProduct + '"');
      }    
    }
   
});
