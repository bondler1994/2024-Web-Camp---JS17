// ### 14. 細菌實驗中，原有 b隻細菌，每經過20分鐘細菌數量會增加為原來的2倍(2b)，
//試寫一遞迴函數`function twofold(b, m)` 。
// 讓使用者輸入分鐘數 m，並計算在沒有細菌死亡的狀況下，m 分鐘後的細菌有幾隻。

//目前我想到是b = ramdam 的數值



export function twofold(b, m) {

  //用 const 來存取值，如果之後要變更可以不用到處改數值
  const bacteriaIncreaseTime = 20
  const bacteriaMultiple = 2

  //如果使用者輸入 m (minuteInput)時間小於20分鐘
  //就直接回傳使用者輸入得細菌數量 b (initialBacteria)
  //如果使用者輸入 m 超過 20 分鐘,那就是細菌數量 b x 2(倍數)
  //直到使用者輸入得時間小於20為止（遞迴）
  if (m < bacteriaIncreaseTime) {
    return b;
  } else {
    return twofold(b * bacteriaMultiple, m - bacteriaIncreaseTime)
  }
}