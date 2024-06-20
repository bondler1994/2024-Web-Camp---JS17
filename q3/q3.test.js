import { isPositiveInt,Q3} from "./q3module"


test("如果值不為正整數就TM是錯得",() => {
    expect(() => isPositiveInt(-1)).toThrow('請輸入正整數');
    expect(() => isPositiveInt(0)).toThrow('請輸入正整數');
    expect(() => isPositiveInt("abc")).toThrow('請輸入正整數')
})

test('如果值為正整數就不會報錯', () => {
    expect(() => isPositiveInt(1)).not.toThrow();
    expect(() => isPositiveInt(100)).not.toThrow();
});


test("期望輸入年紀6歲以下與65歲以上都是半價，其他則原價", () => {
    expect(Q3(6)).toBe("half price $200");
    expect(Q3(65)).toBe("half price $200");
    expect(Q3(7)).toBe("full price $400");
});