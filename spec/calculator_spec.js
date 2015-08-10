describe("Calculator", function(){
	beforeEach(function(){
		Calculator.current = 0;
	});

	describe("When adding numbers", function(){
		it("should store the current value at all times", function(){
			expect(Calculator.current).toBeDefined();
		});

		it("should add numbers", function(){
			expect(Calculator.add(5)).toEqual(5);
			expect(Calculator.add(5)).toEqual(10);
		});

		it("should add any number of numbers", function(){
			expect(Calculator.add(1, 2, 3)).toEqual(6);
			expect(Calculator.add(1, 2, 3, 4)).toEqual(16);
		});
	});

	describe("When subtracting numbers", function(){
		it("should subtract any number of numbers", function(){
			expect(Calculator.subtract(5)).toEqual(-5);
			expect(Calculator.subtract(-5)).toEqual(0);
		});
	});

	describe("When multiplying numbers", function(){
		it("should multiply two numbers", function(){
			expect(Calculator.multiply([3, 3])).toEqual(9);
		});
		it("should multiply any amount of numbers", function(){
			expect(Calculator.multiply([2, 3, 4])).toEqual(24);
		});
	});

	describe("When dividing numbers", function(){
		it("should perform division on any amount of numbers", function(){
			expect(Calculator.divide([20, 0])).toEqual(0);
		});
	});

	describe("When an invalid argument is passed", function(){
		it("should throw an error message", function(){
			expect(Calculator.multiply([2, 0])).toEqual('invalid number entered');
		});
	});
});