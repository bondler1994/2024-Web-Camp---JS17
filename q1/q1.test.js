import { Q1,isNonNegitiveInteger } from "./q1module.js";


test('當輸入0時,會回傳"No customers today, no movie."', () => {
    const strInput = Q1("0");
    expect(strInput).toBe("No customers today, no movie.");
});

test('當輸入1以上得值,會回傳"Movie will play as scheduled."', () => {
    const strInput = Q1("1");
    expect(strInput).toBe("Movie will play as scheduled.");
});


/////////////////////////////////////////////////////

test("測試值是否為正整數+值是否大於0，都不是就會爆錯", () => {
    expect(() => isNonNegitiveInteger(-1).toBe("請輸入大於零的整數"))
    expect(() => isNonNegitiveInteger(0.5).toBe("請輸入正整數"))

})