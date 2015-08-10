var Calculator = {
	current : 0,
	add : function(n){
		var sum = this.current;
		for(var i = 0, len = arguments.length; i < len; i++){
			sum += arguments[i];
		}
		this.current = sum;
		return this.current;
	},
	subtract : function(n){
		var result = this.current;
		for(var i = 0, len = arguments.length; i < len; i++){
			result -= arguments[i];
		}
		this.current = result;
		return result;
	},
	multiply : function(nums){
		return nums.reduce(function(prevValue, curValue){
			return prevValue * curValue;
		})
	},
	divide : function(nums){
		return nums.reduce(function(prevValue, curValue){
			return prevValue / curValue;
		})
	},
	reset : function () {
		current = 0;
	}
};