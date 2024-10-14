// ### 14. 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，
//試寫一遞迴函數`function twofold(b, m)` 。
// 讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。

//目前我想到是b = ramdam 的數值



export function twofold(b, m) {
  const bacteriaIncreaseTime = 20
  const bacteriaMultiple = 2

  if (m < bacteriaIncreaseTime) {
    return b;
  } else {
    return twofold(b * bacteriaMultiple, m - bacteriaIncreaseTime)
  }
}