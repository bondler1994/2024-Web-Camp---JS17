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
describe('測試例外處理', ()=> {
    test("測試值若小於零，就為跳出'請輸入大於零的整數'", () => {
        expect(() => isNonNegitiveInteger(-1).toBe("請輸入大於零的整數"))
    })
    test("測試值若非正整數，就會跳出'請輸入正整數'", () => {
        expect(() => isNonNegitiveInteger(0.5).toBe("請輸入正整數"))
    })
})
