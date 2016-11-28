//Person class

function Person(name, skinColour,continent, noOfLegs = 2){
	this.skinColour = skinColour;
	this.continent = continent;
	this.name = name;
	this.noOfLegs = noOfLegs;
}

//Person methods
Person.prototype.colour = function() {
  if (skinColour===black) {
  	return "Your colour is " + this.skinColour;
  }
};

Person.prototype.said = function(bla){
	return this.name + " said " +string;
};
Person.prototype.isFrom= function(skinColour){
if (skinColour===black){
   return "You are from Africa"; } 
	if (skinColour===white){
		return "You are not from Africa"
	}
};


var you = new Person ('seyi','black', 'africa');
console.log(you.noOfLegs);
console.log(you.name);
console.log(you.continent);
console.log(you.skinColour);
