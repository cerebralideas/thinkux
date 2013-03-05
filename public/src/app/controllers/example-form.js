PHI.controller('Ctrlr', ['$scope', 'dataService', function ($scope, dataService) {

        $scope.sexes = ['Male', 'Female', 'Other'];

        $scope.states = [

            {value: "AL", text: "Alabama"},
            {value: "AK", text: "Alaska"},
            {value: "AZ", text: "Arizona"},
            {value: "AR", text: "Arkansas"},
            {value: "CA", text: "California"},
            {value: "CO", text: "Colorado"},
            {value: "CT", text: "Connecticut"},
            {value: "DE", text: "Delaware"},
            {value: "DC", text: "District Of Columbia"},
            {value: "FL", text: "Florida"},
            {value: "GA", text: "Georgia"},
            {value: "HI", text: "Hawaii"},
            {value: "ID", text: "Idaho"},
            {value: "IL", text: "Illinois"},
            {value: "IN", text: "Indiana"},
            {value: "IA", text: "Iowa"},
            {value: "KS", text: "Kansas"},
            {value: "KY", text: "Kentucky"},
            {value: "LA", text: "Louisiana"},
            {value: "ME", text: "Maine"},
            {value: "MD", text: "Maryland"},
            {value: "MA", text: "Massachusetts"},
            {value: "MI", text: "Michigan"},
            {value: "MN", text: "Minnesota"},
            {value: "MS", text: "Mississippi"},
            {value: "MO", text: "Missouri"},
            {value: "MT", text: "Montana"},
            {value: "NE", text: "Nebraska"},
            {value: "NV", text: "Nevada"},
            {value: "NH", text: "New Hampshire"},
            {value: "NJ", text: "New Jersey"},
            {value: "NM", text: "New Mexico"},
            {value: "NP", text: "Neehr Perfect"},
            {value: "NY", text: "New York"},
            {value: "NC", text: "North Carolina"},
            {value: "ND", text: "North Dakota"},
            {value: "OH", text: "Ohio"},
            {value: "OK", text: "Oklahoma"},
            {value: "OR", text: "Oregon"},
            {value: "PA", text: "Pennsylvania"},
            {value: "RI", text: "Rhode Island"},
            {value: "SC", text: "South Carolina"},
            {value: "SD", text: "South Dakota"},
            {value: "TN", text: "Tennessee"},
            {value: "TX", text: "Texas"},
            {value: "UT", text: "Utah"},
            {value: "VT", text: "Vermont"},
            {value: "VA", text: "Virginia"},
            {value: "WA", text: "Washington"},
            {value: "WV", text: "West Virginia"},
            {value: "WI", text: "Wisconsin"},
            {value: "WY", text: "Wyoming"}
        ];

        $scope.save = function () {

            dataService.save($scope.user);
	        $scope.savedData = dataService.get();
        };
    }]);