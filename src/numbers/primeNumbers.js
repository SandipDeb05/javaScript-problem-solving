function generatePrimeNumbers(n) {
  const primes = [];
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(generatePrimeNumbers(10));
