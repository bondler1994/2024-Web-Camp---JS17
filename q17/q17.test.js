import { main } from './q17main.js';

test('測試main', () => {
    const result = main();
    expect(result).toEqual({
        a: 253,
        b: 251,
        c: 305,
        d: 191
    });
});


describe('測試borda count,使用AAA', () => {
    test('測試計算是否正確', () => {
        
        // Arrange
        // 預期分數：根據給定的 score 和 vote 計算出的結果
        const expectedScores = {
            a: 253,
            b: 251,
            c: 305,
            d: 191
        };

        // Act
        // 執行 main 函數，獲得候選人的分數
        const result = main();

        // Assert
        // 驗證結果是否符合預期
        expect(result).toEqual(expectedScores);
    });
});