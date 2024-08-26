// ### 11. 好想健身房新開幕，每期會費500元，第一期79折，每滿五期再折200元，請讓使用者自行輸入所需期數，並利用`do while`計算，印出總費用。

import { isNonNegitiveInteger } from "../tool/validator.js";
import { isZero } from "../tool/validator.js";

export function coupon(num){
    
    // 會員初始款項
    const memberCost = Number(500)
    // 每五期要減去得費用
    const reductionPerPeriod = 200;
    // 每5期計算費用
    const fristPeriod = 0.79
    isNonNegitiveInteger(num)
    isZero(num)
    
    let total = 0
    let period = num

    total = memberCost * fristPeriod
    period--;

    do{
        if(num > 1){
            total += memberCost
        }

        period--;

        if((num - period) % 5 === 0){
            total -= reductionPerPeriod
        }

    }while(period > 0)
        return {total, num}
}

// 我現在要做檢查num是否為五倍數，使用餘數檢查，如果是count++
// 我想讓count為計數器，去乘上每五期要扣除得費用<這裡可能用定義一個變數
// 在讓memberCost減去變數

// export function coupon(num, numCount = 0){
//     isNonNegitiveInteger(num)
    
//     const currentSum = Number(num)

//     if(num % 5 === 0){
//         numCount++
//     }

//     // 這裡是讓numCount乘上每五期折扣後在讓會員減去
//     const check = numCount * reductionPerPeriod
//     const makeSureDiscount = memberCost - check
    


//     if(currentSum === 1){
//         makeSureDiscount * 0.79;
//     } 
    
//     do{
        
        
//     }while()


// }