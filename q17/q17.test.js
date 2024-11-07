import { q17 } from "./q17module.js";
// test('測試main', () => {
//     const result = main();
//     expect(result).toEqual({
//         a: 253,
//         b: 251,
//         c: 305,
//         d: 191
//     });
// });



describe('測試Q17,使用AAA', () => {
    test('測試題目的基本運算是否正常', () => {
        // Arrange
        //建立分數
        const score = [4, 3, 2, 1]


        //建立選民人數
        const vote = [51, 5, 23, 21]

        //建立候選人
        // const candidates = [
        //     //col
        //     ["a", "c", "b", "d"],//4row
        //     ["c", "b", "c", "c"],//3
        //     ["b", "d", "d", "b"],//2
        //     ["d", "a", "a", "a"],//1
        // ]
        const candidates2 = [
            //col
            ['a', 'c', 'b', 'd'],
            ['c', 'b', 'd', 'a'],
            ['b', 'c', 'd', 'a'],
            ['d', 'c', 'b', 'a']
        ]

        // 預期分數：根據給定的 score 和 vote 計算出的結果
        const expectedScores = {
            a: 253,
            b: 251,
            c: 305,
            d: 191
        };

        // Act
        // 執行 main 函數，獲得候選人的分數
        const result = q17(candidates2, score, vote);

        // Assert
        // 驗證結果是否符合預期
        expect(result).toEqual(expectedScores);
    });

    test('測試增加組合後運算是否正常', () => {
        
        // Arrange
        //建立選民人數
        const vote = [51, 5, 23, 21, 100]

        //建立候選人
        // const candidates = [
        //     //col
        //     ["a", "c", "b", "d"],//4row
        //     ["c", "b", "c", "c"],//3
        //     ["b", "d", "d", "b"],//2
        //     ["d", "a", "a", "a"],//1
        // ]
        const candidates2 = [
            //col
            ['a', 'c', 'b', 'd'],
            ['c', 'b', 'd', 'a'],
            ['b', 'c', 'd', 'a'],
            ['d', 'c', 'b', 'a'],
            ['a', 'b', 'd', 'c']
        ]
        //建立分數
        const score = [4, 3, 2, 1]

        // 預期分數：根據給定的 score 和 vote 計算出的結果
        const expectedScores = {
            a: 653,
            b: 551,
            c: 405,
            d: 391,
        };

        // Act
        // 執行 main 函數，獲得候選人的分數
        const result = q17(candidates2, score, vote);

        // Assert
        // 驗證結果是否符合預期
        expect(result).toEqual(expectedScores);
    });

    test('測試多加候選人是否可以正常運算', () => {
        // Arrange


        //建立選民人數
        const vote = [51, 5, 23, 21, 100]

        //建立候選人
        // const candidates = [
        //     //col
        //     ["a", "c", "b", "d"],//4row
        //     ["c", "b", "c", "c"],//3
        //     ["b", "d", "d", "b"],//2
        //     ["d", "a", "a", "a"],//1
        // ]
        const candidates2 = [
            //col
            ['a', 'c', 'b', 'd', 'e'],
            ['c', 'b', 'd', 'e', 'a'],
            ['b', 'c', 'e', 'd', 'a'],
            ['d', 'e', 'c', 'b', 'a'],
            ['a', 'b', 'd', 'e', 'c']
        ]
        //建立分數
        const score = [5, 4, 3, 2, 1]

        // 預期分數：根據給定的 score 和 vote 計算出的結果
        const expectedScores = {
              a: 804,
              b: 730,
              c: 484,
              d: 568,
              e: 414,
        };

        // Act
        // 執行 main 函數，獲得候選人的分數
        const result = q17(candidates2, score, vote);

        // Assert
        // 驗證結果是否符合預期
        expect(result).toEqual(expectedScores);
    });
});