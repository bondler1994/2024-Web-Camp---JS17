// 顯示小數後面使用Number.toFixed
// 將小數店後四捨五入Math.floor

// 如何求算n值?
// 計算多少次得這個邏輯怎寫?
// 如何達成：？
// 為什麼要用遞迴？
// if要做什麼事情：判斷過程，判斷如果除與三之後 後面得小數點是否等於0？
// 如果是救回傳啥？
// 如果不是要讓他在重跑一遍？

// 先建立一個函式，是用來檢查浮點數後面第二位是否為0

const divisor = 3

export function divi(n, count = 0) {
    let result = n / divisor;
    // count + 1
    if (result.toFixed(3).slice(-2,-1) === "0") {
        // console.log(result.toFixed(3).slice(-2,-1))
        return count + 1;

        
    } else {
        return divi(result, count + 1);
    }
}


