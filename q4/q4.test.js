import { checkOdd,Q4 } from "./q4module.js";

test("期望基數回傳true,如果不是就false",() => {
    expect(checkOdd(1)).toBe(true)
})

describe("測算式與總和",() =>{
    test("n=0",() => {
        const number = 0;
        const result = Q4(number);
        expect(result).toBe(`0 = 0`)
    });
})
// 驗證數字