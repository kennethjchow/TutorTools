function gcf_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function generate_two_non_prime_numbers(min, max) { 
    const prime_numbers = generate_prime_numbers(min, max)
    let non_primes = []

    while (non_primes.length < 2) {
        random_number = Math.floor(Math.random() * (max - min) + min); 
        if (!prime_numbers.includes(random_number)){
            non_primes.append(Math.random())
        }
    }
    return non_primes
}

function generate_prime_numbers(min, max) {
    let holdme;
  
    if (!arguments.length) return [];
    if (min < 0 || max < 0) return [];
   
    if (min === max) return isprime(min) ? [min] : [];
  
    if (~min && ~max && min > max) {
      holdme = min;
      min = max;
      max = holdme;
    };
    
    if (max === undefined) {
      max = min;
      min = 0;
    };
  
    if (min == 0) min = 1;
  
    return new Array(max+1)
      .join(',').split(',')
      .map(function(a, b){ return b; })
      .slice(min, max)
      .filter(isprime);
};

function isprime (num) {
    if (num == 1) return false;
    num += 2;
  
    var upper = Math.sqrt(num);
    var sieve = new Array(num)
      .join(',').split(',') // get values for map to work
      .map(function(){ return true });
    
    for (var i = 2; i <= num; i++) {
      if (sieve[i]) {
        for (var j = i * i; j < num; j += i) {
          sieve[j] = false;
        };
      };
    };
  
    return sieve[num-2];
  };

export default gcf_two_numbers