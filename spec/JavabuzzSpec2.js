describe('Javabuzz2', function(){
  var javabuzz2;
  beforeEach(function(){
    javabuzz2 = new Javabuzz2();
  });

  describe('knows when a number is', function(){
    it('divisible by 3', function(){
      expect(javabuzz2.isDivisibleByThree(3)).toBe(true);
    });

    it('not divisible by 3', function(){
      expect(javabuzz2.isDivisibleByThree(1)).toBe(false);
    });

    it('divisible by 5', function(){
      expect(javabuzz2.isDivisibleByFive(5)).toBe(true);
    });

    it('not divisible by 5', function(){
      expect(javabuzz2.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by 15', function(){
      expect(javabuzz2.isDivisibleByFifteen(15)).toBe(true);
    });

    it('not divisible by 15', function(){
      expect(javabuzz2.isDivisibleByFifteen(1)).toBe(false);
    });
  });
});
