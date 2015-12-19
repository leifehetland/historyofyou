app.controller('YouCtrl', ["$firebaseArray", '$location', 
    function($firebaseArray, $location) {
      var ref = new Firebase("https://historyofyou.firebaseio.com/stories");
      	this.stories_list = $firebaseArray(ref);
	      console.log('this.stories_list', this.stories_list);

      }])