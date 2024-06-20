import { Q1,isPositiveInt } from "./q1module.js";

// test("如果值不為正整數就TM是錯得",() => {
//     expect(() => isPositiveInt(-1)).toThrow('請輸入正整數');
//     expect(() => isPositiveInt(0)).toThrow('請輸入正整數');
//     expect(() => isPositiveInt("abc")).toThrow('請輸入正整數')
// })

// test('如果值為正整數就不會報錯', () => {
//     expect(() => isPositiveInt(1)).not.toThrow();
//     expect(() => isPositiveInt(100)).not.toThrow();
// });

/////////////////////////////////////////////////////

test("測試輸入值",() => {
    expect(() => Q1(0)).toBe("No customers today, no movie.")
    expect(() => Q1(1)).toBe("Movie will play as scheduled.")
})

test("測試值是否為正整數+值是否大於0，都不是就會爆錯", () => {
    expect(() => testBundle(-1).toBe("請輸入大於零的整數"))
    expect(() => testBundle(0.5).toBe("請輸入正整數"))

})