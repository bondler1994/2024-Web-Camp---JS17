// ### 5. 寫一個遞迴函數 `function umleven(n)` 來求算 `2*4 + 4*6 + 6*8...+(n-2)*n`

import { isPositiveInt,isZero,isInteger, isEven, umleven} from "./q5module"

test("如果值不為正整數就TM是錯得",() => {
    expect(() => isPositiveInt(-1)).toThrow('請輸入正整數');
    expect(() => isPositiveInt(0)).toThrow('請輸入正整數');
    expect(() => isPositiveInt("abc")).toThrow('請輸入正整數')
})

test('如果值為正整數就不會報錯', () => {
    expect(() => isPositiveInt(1)).not.toThrow();
    expect(() => isPositiveInt(100)).not.toThrow();
});
////////////////////////////////////////////////////////////

test("如果值為零，那你還是去吃屎吧", () => {
    expect(() => isZero(0)).toThrow('請輸入值不為零')
})

test("如果值不為零，就不會報錯", () => {
    expect(() => isZero(1)).not.toThrow()
})

////////////////////////////////////////////////////////////

test("如果值不為整數就報錯", () => {
    expect(() => isInteger(0.5)).toThrow('請輸入整數')
})

test("如果值為整數就不會報錯", () => {
    expect(() => isInteger(1)).not.toThrow()
})

////////////////////////////////////////////////////////////

test('期望給予得數值計算正確',() => {
    expect(umleven(10)).toBe(160)
    expect(umleven(2)).toBe(0)
})

////////////////////////////////////////////////////////////
