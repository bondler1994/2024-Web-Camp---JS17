// ### 6. 宣告陣列 `name`，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

import { pickOddLetter } from "./q6module.js";
import { checkAlphabet } from "../tool/validator.js";
import prompt from "../tool/prompt-sync.js";


function main(){
  const name = [];
  
  for(let i = 0; i < 4; i++){
    try{
      const input4Name = Array(prompt(`pls insert ${i+1} name: `));
      checkAlphabet(input4Name)
      name.push(input4Name)
    }catch(error){
      console.log(error.message);
      main()
    }
    
  }
  
      const fristLetter = pickOddLetter(name[0])
      const secondLetter = pickOddLetter(name[2])
  
      console.log(`第一位得單數字母是:${fristLetter}`);
      console.log(`第一位得單數字母是:${secondLetter}`)
}

main()

// 這提問題是無法達成輸出第一個和第三個名字的單數個字母。