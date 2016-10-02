// reduces the parameter n into a product of only prime numbers
// and returns a list of those prime number factors
function primeFactorize(n) {
    var primeFactors = [];
    
    var primeFactor = 0;
        
    for (var i = 2; i <= n / i; ) {
        if (n % i == 0) {
            primeFactor = i;
            primeFactors.push(primeFactor);
            n /= i;
        } else {
            i++;
        }
    }
    
    if (primeFactor < n) {
        primeFactors.push(n);
    } else {
        primeFactors.push(primeFactor);
    }
        
    return primeFactors;
}