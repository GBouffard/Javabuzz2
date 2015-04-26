var Javabuzz2 = function(){};

Javabuzz2.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

Javabuzz2.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

Javabuzz2.prototype.isDivisibleByFifteen = function(number){
  return (number % 15 === 0);
};

Javabuzz2.prototype.sayWords = function(number){
  if (this.isDivisibleByFifteen(number)) return 'JAVABUZZ';
   //I just discovered that return 'JAVA' if didnt work. It had to be if...return 'JAVA';
  if (this.isDivisibleByThree(number)) return 'JAVA';
  // also important not to forget 'this.' else it doesnt work.
  if (this.isDivisibleByFive(number)) return 'BUZZ';
  return number;
};
