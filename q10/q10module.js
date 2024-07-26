// 我想找質數

// q10module.js

export function isPrime(num) {
    if (num <= 1) return false; // 1 或更小的數字不是質數
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // 質數得定義：可以被1 或自己 整除，並且不可以被其他得數整除
        if (num % i === 0) {
            return false; // 如果num能被i整除，則num不是質數
        }
    }
    return true; // 如果沒有找到能整除num的數，則num是質數
}
