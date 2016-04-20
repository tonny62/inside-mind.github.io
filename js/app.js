var app = angular.module('siitApp', ['ngRoute','ui.router','ui.materialize'])

.config(function($stateProvider, $routeProvider){
  $routeProvider.when(
                  "/",
                  {
                    templateUrl : "templates/index.html",
                    controller  : "indexCtrl",
                  }
                ).
                when(
                    "/:canteen/all",
                    {
                      templateUrl : "templates/all.html",
                      controller  : "allCtrl",
                    }
                ).
                when(
                  "/canteens",
                  {
                    templateUrl : "templates/canteens.html",
                    controller  : "canteensCtrl",
                  }
                ).
                when(
                  "/canteens/:canteen",
                  {
                    templateUrl : "templates/canteen.html",
                    controller  : "canteenCtrl"
                  }
                ).
                when(
                  "/canteens/:canteen/:court",
                  {
                    templateUrl : "templates/court.html",
                    controller  : "courtCtrl"
                  }
                ).
                when(
                  "/canteens/:canteen/:court/:menu",
                  {
                    templateUrl : "templates/menu.html",
                    controller  : "menuCtrl"
                  }
                );
});
app.controller('BodyController', ["$scope", function ($scope) {
    $scope.select = {
        value1: "Option1",
        value2: "I'm an option",
        choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
    };

    $scope.dummyInputs = {};

}])
.controller('CollapsibleController', ["$scope", function ($scope) {
    $scope.collapsibleElements = [{
        icon: 'mdi-image-filter-drama',
        title: 'First',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-maps-place',
        title: 'Second',
        content: 'Lorem ipsum dolor sit amet.'
    },{
        icon: 'mdi-social-whatshot',
        title: 'Third',
        content: 'Lorem ipsum dolor sit amet.'
    }];
}]).controller('ToastController', ["$scope", function ($scope) {
    $scope.callback = function(message) {
        alert(message);
    };
}]).controller('PaginationController', ["$scope", function ($scope) {
    $scope.changePage = function (page) {
        Materialize.toast("Changed to page " + page, 1000);
    }
}])
.controller('DateController', ["$scope", function ($scope) {
    var currentTime = new Date();
    $scope.currentTime = currentTime;
    $scope.month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    $scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    $scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    $scope.disable = [false, 1, 7];
    $scope.today = 'Today';
    $scope.clear = 'Clear';
    $scope.close = 'Close';
    var days = 15;
    $scope.minDate = (new Date($scope.currentTime.getTime() - ( 1000 * 60 * 60 *24 * days ))).toISOString();
    $scope.maxDate = (new Date($scope.currentTime.getTime() + ( 1000 * 60 * 60 *24 * days ))).toISOString();
    $scope.onStart = function () {
        console.log('onStart');
    };
    $scope.onRender = function () {
        console.log('onRender');
    };
    $scope.onOpen = function () {
        console.log('onOpen');
    };
    $scope.onClose = function () {
        console.log('onClose');
    };
    $scope.onSet = function () {
        console.log('onSet');
    };
    $scope.onStop = function () {
        console.log('onStop');
    };
}])

app.factory("Canteens", function() {
  return {
      "jc"  : [
          {},
          {//1
              "name"  :   "ก๋วยเตี๋ยวสุโขทัย", 
              "menus" :   [1]
            },
            {//2
                "name"  :   "จ๊ะเอ๋ครัวไทย",
                "menus" :   [1]
            },
            {//3
                "name"  :   "ชาลีขาหมู",
                "menus" :   [1,2]
            },
            {//4
                "name"  :   "ดาวเดือนอิสลาม",
                "menus" :   [1]
            },
            {//5
                "name"  :   "นิติกาญจน์",
                "menus" :   [1,2]
            },
            {//6
                "name"  :   "มรดกอีสาน",
                "menus" :   [1,2,3,4,5]
            },
            {//7
                "name"  :   "ราดหน้านายบุญส่ง",
                "menus" :   [1,2]
            },
            {//8
                "name"  :   "ร้านญี่ปุ่น",
                "menus" :   [1,2,3]
            }
      ],
      "sc"  : [
          {},
          {//1
              "name"  :   "Steak and Donburi",
              "menus" :   [1,2,3,4]
          },
          {//2
              "name"  :   "กินเส้น",
              "menus" :   [1,2]
          },
          {//3
              "name"  :   "น้องเจี๊ยบ",
              "menus" :   [1,2,3]
          },
          {//4
              "name"  :   "บุ๊คเบ๊บ",
              "menus" :   [1,2]
          },
          {//5
              "name"  :   "ยูป้า",
              "menus" :   [1]
          },
          {//6
              "name"  :   "ร้านจานเดียว",
              "menus" :   [1]
          }
      ],
      "eng"  : [
          {},
          {//1
              "name"  :   "ก๋วยเตี๋ยวเด็กเส้นวิศวะ",
              "menus" :   [1,2,3]
          },
          {//2
              "name"  :   "ขาหมูตรอกซุง",
              "menus" :   [1,2,3,4,5,6]
          },
          {//3
              "name"  :   "ไข่เจียวอินเตอร์โซน",
              "menus" :   [1]
          },
          {//4
              "name"  :   "น้องโบว์",
              "menus" :   [1]
          }
      ]
  };
});

app.factory('Courts', function () {
   return {
       "jc" :   "โรงอาหาร JC",
       "sc" :   "โรงอาหาร SC",
       "eng":   "โรงอาหาร วิศวะ"
   }
});

app.controller("indexCtrl",function($scope){

});
app.controller("canteensCtrl",function($scope){

});
app.controller("allCtrl",function ($scope,$routeParams, $route, Canteens,Courts) {
    var canteen = new Array();
    for (var court=1; court< Canteens[$routeParams.canteen].length; court++){
        for(var menu=0; menu< Canteens[$routeParams.canteen][court]['menus'].length;menu++){
            canteen.push('canteens/'+$routeParams.canteen+'/'+(court)+'/'+(menu+1));
        }
    }
    $scope.canteen  =   canteen;
    $scope.route    =   $routeParams.canteen;
    $scope.name    =   Courts[$routeParams.canteen];
})

app.controller("canteenCtrl",function($scope,$routeParams, $route, Canteens){
  $scope.courts = Canteens[$routeParams.canteen];
  $scope.link   = "canteens/"+$routeParams.canteen+".html";
});

app.controller("courtCtrl",function($scope,$routeParams, $route, Canteens){
    var canteen = $routeParams.canteen;
    var court   = $routeParams.court;
    $scope.canteen  = canteen;
    $scope.court    = court;
    $scope.detail = Canteens[canteen][court];
});

app.controller("menuCtrl",function($scope,$routeParams, $route, $location, $anchorScroll, Canteens){
    var canteen =   $routeParams.canteen;
    var court   =   $routeParams.court;
    var menu    =   $routeParams.menu;
    var route   =   new Array(canteen, court, menu);
    $scope.court    =   Canteens[canteen][court]['name'];
    $scope.route    =   route.join('/');
    $scope.link     = "canteens/"+route.join("/")+".html";
});
