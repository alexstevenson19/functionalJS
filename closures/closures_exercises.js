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

// 5 =============================================

var lastNameTrier = function(lastName){

	var innerFunction = function(firstName){
		console.log(firstName + ' ' + lastName);
	}
	return innerFunction;
}

var firstNameFarmer = lastNameTrier('Stevenson');
firstNameFarmer('Alex');

// 6 ============================================

var storyWriter = function(){
	var story = '';
	return {
		addWords: function(sentence){
			return story = story + " " + sentence;
		},
		erase: function(){
			return story = "";
		}
	};
};

// var farmLoveStory = storyWriter();
// farmLoveStory.addWords('There was once a lonely cow.');

