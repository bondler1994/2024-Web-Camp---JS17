import { carryEquipments } from "./q15module.js";

describe("測試函式",()=>{


    test("邊界情況測試：當總重量接近或超過限制時，應正確停止遞迴", () => {
        const num = [0, 0, 0];  // 初始裝備數量
        const weight = [10, 20, 30];  // 每種裝備的重量
        const total = 40;  // 初始總重量
        const limit = 50;  // 限制重量

        const result = carryEquipments(num, weight, total, limit);

        
        expect(result.num).toEqual([0, 1, 0]);  // 根據模擬的隨機值，第二個裝備應增加1
        expect(result.totalWeight).toBe(60);  // 總重量超過限制，應正確停止
    });

})