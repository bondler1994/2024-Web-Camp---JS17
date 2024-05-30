// export function isPositiveInt(string) {
//     if (!/^(0|[1-9]\d*)$/.test(string)) {
//       throw new Error("需輸入正整數");
//     }
//   }
  

// export function Q1(strInput) {
//     isPositiveInt(strInput);
//     const numInput = Number(strInput)
//     let message = ""
//     if(!numInput){
//         message = "you fucking shit"
//     }else{
//         message = "you are wonderful"
//     }
//     return message;
// }

export function Q1(strInput) {
  const numInput = parseInt(strInput);
  let message = "";

  if (isNaN(numInput)) {
      message = "Invalid input. Please enter a valid number.";
  } else if (!numInput) {
      message = "No customers today, no movie.";
  } else {
      message = "Movie will play as scheduled.";
  }
  return message;
}