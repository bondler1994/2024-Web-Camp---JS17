// ### 12. 找出`10~20`的質數，並列出前述各質數在1~100的倍數
import { isPrime } from "../tool/validator.js"

// 這裡我建立一個回全讓它從10跑到20
let start = 10
let end = 20
const number = []

for(let i = start;i<=end;i++){
    number.push(i)
}
// console.log(number)

// 這裡在從10~20中尋找質數
const takePrimeOut = []
const nova = number.forEach((num) => {
    if(isPrime(num)){
        takePrimeOut.push(num)
    }
})

const limit = 100

export function findMultiple(num, limit){
    const multiples = []
    for(let multiple = 0; multiple <= limit; multiple++){
        if(multiple === 0){
            continue
        }
        if(num * multiple > limit){
            break
        }else{
            multiples.push(num * multiple)
        }

    }
    return multiples;
}


console.log(`10~20得質數是${takePrimeOut}`);

export function main(){
    takePrimeOut.forEach(prime => {
        const multiples = findMultiple(prime, limit)
        console.log(`質數 ${prime} 在 1 到 ${limit} 內的倍數:`, multiples);
    })
}

main()

