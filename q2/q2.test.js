import { isZero, isInteger, Q2 } from './q2module';

test("如果值為零，那你還是去吃屎吧", () => {
    expect(() => isZero(0)).toThrow('請輸入值不為零')
})

test("如果值不為零，就不會報錯", () => {
    expect(() => isZero(1)).not.toThrow()
})

//////////////////////////////////////////

test("如果值不為整數就報錯", () => {
    expect(() => isInteger(0.5)).toThrow('請輸入整數')
})

test("如果值為整數就不會報錯", () => {
    expect(() => isInteger(1)).not.toThrow()
})

/////////////////////////////////////////

// beforeEach 和 afterEach 在每個測試用例之前和之後設置和清除模擬。
// jest.spyOn 來模擬 console.log，測試捕捉其輸出，
// expect 來檢查 console.log 的輸出是否正確。 

// beforeEach(() => {
//     consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
// });

// afterEach(() => {
//     consoleSpy.mockRestore();
// });

test('應輸出 "餘數相同" 當兩個輸入的餘數相同時', () => {
    const result = Q2([6, 9]); // 6 % 3 === 0, 9 % 3 === 0
    expect(result).toBe("餘數相同");

    const resultTwo = Q2([4, 1]); // 4 % 3 === 1, 1 % 3 === 1
    expect(resultTwo).toBe("餘數相同");
});

// test('應輸出 "你是智障" 當兩個輸入的餘數不同時', () => {
//     Q2([4, 2]); // 4 % 3 === 1, 2 % 3 === 2
//     expect(consoleSpy).toHaveBeenCalledWith("你是智障");

//     Q2([7, 5]); // 7 % 3 === 1, 5 % 3 === 2
//     expect(consoleSpy).toHaveBeenCalledWith("你是智障");
// });

// 有機會研究mock
// 


