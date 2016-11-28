module.exports= {
	function checkprime(n) {
	  var prime_number = [ ];
	    for (counter = 2; counter <= n; counter++) {
	    
	    var not_prime = false;
	    var roundnum = Math.floor(counter/2);
	    
	    for (var i = 2; i <= roundnum ; i++) {
	      if (counter%i === 0 && i !== counter) {
	        not_prime = true;
	        }
	    }
	    if (not_prime === false) {
	      prime_number.push(counter);
	    }
	  }
	return prime_number;
	}
}