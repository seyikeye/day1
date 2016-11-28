module.exports = function (n){
		var myprimes =[];
		var totalArray = 0;
	    
	    if(n<0){
	      return "Input Positive number"
	    }
	    if(n===undefined){
	      return "Invalid input";
	    }
	    if(n==='string'){
	      return "Invalid input"
	    }
	    if(n===n/1){
	      for(var numbers=2; numbers<n;n++){
	        var isPrime = true;
	        for(var divisor = 2; divisor <= (numbers - 1); divisor++){
	          if (numbers % divisor === 0){
	            isPrime = false;
	          }
	        }
	      }
	      if (isPrime){
				myPrime.push(numbers);
		}
	}

}



