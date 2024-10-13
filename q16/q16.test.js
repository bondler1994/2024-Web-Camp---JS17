import { inputFiveWord } from "./q16module.js";

describe("測試函式", ()=>{
  
    test("錯誤情況：輸入為非字串的類型", () => {
        expect(() => inputFiveWord(12345)).toThrow("請輸入五個字母");
    });

      
    test("錯誤情況：輸入空字串", () => {
        expect(() => inputFiveWord()).toThrow("請輸入五個字母");
    });

    test("輸入正確",()=>{
        const result = inputFiveWord("abcde")
        expect(result).toBe("abcde")
    })

})