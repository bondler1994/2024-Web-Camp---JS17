// export function isPositiveInt(string) {
//     if (!/^(0|[1-9]\d*)$/.test(string)) {
//       throw new Error("需輸入正整數");
//     }
//   }
  


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

export function isPositiveInt(string) {
    return /^(0|[1-9]\d*)$/.test(string);
}

export function Q1(strInput) {
    try {
        const isValidInput = isPositiveInt(strInput);
        let message = "";
        
        if (!isValidInput) {
            message = "Invalid input. Please enter a valid number.";
        } else if (strInput === "0") {
            message = "No customers today, no movie.";
        } else {
            message = "Movie will play as scheduled.";
        }
        return message;
    } catch (error) {
        return "Error: " + error.message;
    }
}
