// Run in console due to the alerts in the first couple functions.

//1,2
var nonsense = function(string){
	var blab = function(){
		alert(string);
	};

	setTimeout(blab, 2000);
};

nonsense('no sense?');


// 3, 4 =============================================

var nonsense = function(string){
	var blab = function(){
		alert(string);
	};
	return blab;
};

var blabLater = nonsense('test1');
var blabAgainLater = nonsense('test2');

blabLater();
blabAgainLater();

// 5 a function with a closure =============================================

var lastNameTrier = function(firstName){

	var innerFunction = function(lastName){
		console.log(firstName + ' ' + lastName);
	}
	return innerFunction;
}

var firstNameAlex = lastNameTrier('Alex');
firstNameAlex('Kitabatake');

// 6 function that returns an object with two methods. ============================================

var storyWriter = function(){
	var story = '';
	return {
		addWords: function(sentence){
			return story = story + " " + sentence;
			// story += sentence + '';
			// return story.trim();
		},
		erase: function(){
			return story = "";
		}
	};
};

// var farmLoveStory = storyWriter();
// farmLoveStory.addWords('There was once a lonely cow.');

// 7 module pattern ============================================

var Toaster = function(){
	var toastStatus = '';

	var dry = function(){
		toastStatus = 'not toasted'
	};

	var brown = function(){
		toastStatus = 'just right';
		// return toastStatus;
	};
	var burn = function(){
		toastStatus = 'burned toast';
		// return toastStatus;		
	};

	return {
		toastTimer: function(time){
			if (time <= 2){
				dry();
				return toastStatus;
			}
			else if (time > 2 && time < 5){
				brown();
				return toastStatus;
			}
			else {
				burn();
				return toastStatus;
			}
		}
	};
}







