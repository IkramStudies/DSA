const lcm = (n, m) => {
    let lowest = 0;
    for (let i = n; i < 100; i++) {
        // i = 5; i < 100;
        if (i % n == 0 && i % m == 0) {
            // if (5 % 5 === 0 && 11 % 5 == 0) , false
            lowest = i; // i++;
            return lowest;
        }
    }
};

console.log(lcm(5, 10));
console.log(lcm(5, 11));
