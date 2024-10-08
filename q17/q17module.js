export default function getRank(rank) {
    //新增權重物件
    let scoreList = Object.create({});
    console.log(scoreList);
    //依序取得權重分數
    for (let i = 0; i < rank.length; i++) {
      let score = rank.length - i;
      scoreList[`score${i + 1}`] = score;
    }
    return scoreList;
  }
  