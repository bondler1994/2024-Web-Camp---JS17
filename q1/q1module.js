export const isNonNegitiveInteger = input => {
    const num = Number(input);
    if (!Number.isInteger(num) || num < 0) {
        throw new Error("請輸入大於零的整數");
    }
};

export function Q1(strInput) {
    try {
        // isPositiveInt(strInput);
        isNonNegitiveInteger(strInput);
        let message = "";
        // console.log(isValidInput);
        if (Number(strInput) === 0) {
            //issue
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