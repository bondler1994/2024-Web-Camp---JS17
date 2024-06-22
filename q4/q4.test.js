import { checkOdd,Q4 } from "./q4module.js";

test("期望基數回傳true,如果不是就false",() => {
    expect(checkOdd(1)).toBe(true)
})

test("輸入10會得出1+2-3+4-5+6-7+8-9+10字串，且得出總和為7", () => {
    const result = Q4(10);
    expect(result.formula).toBe("1+2-3+4-5+6-7+8-9+10");
    expect(result.currentSum).toBe(7);
});

test("輸入1會得出1字串，且得出總和為1", () => {
    const result = Q4(1);
    expect(result.formula).toBe("1");
    expect(result.currentSum).toBe(1);
});


// 驗證數字