import { checkOdd } from "./q4module.js";

test("期望基數回傳true,如果不是就false",() => {
    expect(checkOdd(1)).toBe(true)
})

// 驗證數字