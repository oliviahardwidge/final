
function checkPrime(number) {
    var result = "";
    for(i = 2; i <= number; i++) {
        if(number == 2) {
            result = "PRIME";
        }
        else if(number % i == 0 || number <= 1 || number % 1 !== 0) {
            result = "NOT PRIME";
            return result;
        }
        else {
            result = "PRIME";
        }
    }
    return result;
}
