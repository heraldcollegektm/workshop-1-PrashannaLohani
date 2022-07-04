Grg Niroj
function primeInRange(n1, n2) {         //this function checks the range and returns true if the range contains at least one prime number 
    num1 = n1;   
    num2 = n2;

    while (num1 <= num2) {
        let i = 2;
        while (i < num1 / 2) {
            if (num1 % i == 0) {
                console.log(true);
                break
            }
            i++;
        }
        num1++;
    };
};

primeInRange(5, 11);