// // ### 6. 宣告陣列 `nameList`，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。


//目前我想到 先建立一個fn 是專門判斷使用者輸入是否為四個子 並傳入陣列
//設立檢查點 當使用者輸入不屬於英文會報錯
//設立輸出值 判斷並印出
//建立斷點 它可以判斷假設使用者輸入 1是英文名稱 若二是錯誤 那就會卡在二並且重新輸入


import { pickOddLetter } from "./q6module.js";
import { checkAlphabet } from "../tool/validator.js";
import prompt from "../tool/prompt-sync.js";

//步驟一 建輸入單字檢查點 來確認使用者輸入得是英文單字
function getName(input) {
  try {
    const name = prompt(input);
    checkAlphabet(name);          
    pickOddLetter(name);          
    return name;
  } catch (error) {
    console.log("輸入錯誤，請重新輸入有效的英文名字！");
    return getName(input);         
  }
}

//步驟二 因為要讓使用者輸入四次 所以
function main() {
  const nameList = [];
  for (let i = 0; i < 4; i++) {
    nameList.push(getName(`請輸入名字，第 ${i + 1} 個：`));
  }

  // 輸出 nameList 內容
  console.log(nameList);

  // 取得第一和第三個名字的奇數索引字母
  const firstOddLetters = pickOddLetter(nameList[0]);
  const thirdOddLetters = pickOddLetter(nameList[2]);

  console.log(`第一個名字的奇數索引字母：${firstOddLetters}`);
  console.log(`第三個名字的奇數索引字母：${thirdOddLetters}`);
}

main();

// function wo() {
//   const nameList = [];

//   for (let i = 0; i < 4; i++) {
//     try {
//       const input4Name = prompt(`pls insert ${i + 1} nameList: `);
//       checkAlphabet(input4Name)
//       nameList.push(input4Name)
//     } catch (error) {
//       console.log(error.message);
//       wo()
//     }
    
//   }
  
//   return nameList;
// }


// // 這提問題是無法達成輸出第一個和第三個名字的單數個字母。

// async function main(){

//   const nameList = await wo()
//   console.log(nameList);
//   no(nameList)

// }

// main()

// //解構附值
// function no(nameList){

//   const fristLetter = pickOddLetter(...nameList[0])
//   const secondLetter = pickOddLetter(...nameList[2])
  
//   console.log(`第一位得單數字母是:${fristLetter}`);
//   console.log(`第三位得單數字母是:${secondLetter}`)
// }

