export const isPositiveInt = (input) => {
    if(!/^[1-9]\d*$/.test(input)){
        throw new Error("請輸入正整數");
    }
}

export const isNonNegitiveInteger = input => {
    const num = Number(input);
    if (!Number.isInteger(num) || num < 0) {
        throw new Error("請輸入大於零的整數");
    }
};

function testBundle(input){
    isNonNegitiveInteger(input);
    isPositiveInt(input);
}

// ### 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
//讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」

export function Q1(strInput) {
    try {
        // isPositiveInt(strInput);
        testBundle(strInput);
        let message = "";
        // console.log(isValidInput);
        if (strInput === "0") {
            message = "No customers today, no movie.";
        } else {
            message = "Movie will play as scheduled.";
        }
        return message;
    } catch (error) {
        return "Error: " + error.message;
    }
}


// export function isPositiveInt(string) {
//     if (!/^(0|[1-9]\d*)$/.test(string)) {
//       throw new Error("需輸入正整數");
//     }
//   }
  
// export const isInteger = input => {
//     if (!Number.isInteger(Number(input) && Number(input) < 0)) {
//         throw new Error("請輸入整數");
//     }
// };


// export function Q1(strInput) {
//   const numInput = isPositiveInt(strInput);
//   let message = "";

//   if (isNaN(numInput)) {
//       message = "Invalid input. Please enter a valid number.";
//   } else if (!numInput) {
//       message = "No customers today, no movie.";
//   } else {
//       message = "Movie will play as scheduled.";
//   }
//   return message;
// }

// 簡化code
// return true
// 轉型問題
// 使用者輸入都是字串
// 