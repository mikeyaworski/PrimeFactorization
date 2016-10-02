# reduces the parameter n into a product of only prime numbers
# and returns a list of those prime number factors
def primeFactorize(n):
    primeFactors = []
    primeFactor = 0
    i = 2

    while i <= n / i:
        if n % i == 0:
            primeFactor = i
            primeFactors.append(i)
            n /= i
        else:
            i += 1

    if primeFactor < n:
        primeFactors.append(int(n))
    else:
        primeFactors.append(primeFactor)

    return primeFactors