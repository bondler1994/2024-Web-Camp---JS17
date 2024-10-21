class Runner {
    constructor(name, step, mock, mockPeriod) {
        this.name = name;
        this.step = step;
        this.mock = mock;
        this.mockPeriod = mockPeriod;
    }
}

const rabbit = new Runner('rabbit', 20, 1, 5)
const turtle = new Runner('turtle', 0.28, 0, 1)//1 for position += (runner.step * runner.mockPeriod) - runner.mock,如過是0就會無法計算


const runnerList = [rabbit, turtle];
// console.log(runnerList);
main()

function main(){
    const distance = 1000;
    const timeGap = getTimeGap(runnerList, distance)
    const result = `${runnerList[0].name} can lazy ${timeGap} sec`
    console.log(result);
    
}

//實驗,先不拆出去
function getTimeGap(runnerList, distance){
    const timeSpendList = getTimeSpend(runnerList, distance)
    //Titan let change to const
    let timeGap = Number((Math.abs(timeSpendList[0]- timeSpendList[1])).toFixed(2))
    return timeGap
}




function getTimeSpend(runnerList, distance) {
    return runnerList.map((runner) => {

        //兔子完賽時間、用let是因為值會變更
        let forwardTime = 0;//兔子前進時間
        let position = 0;//兔子目前位置，會根據狀態更新位置，
        let backwardTime = 0;//兔子退後時間
        let raceEnd = 0


        while (position < distance) {
            position += (runner.step * runner.mockPeriod) - runner.mock

            forwardTime += runner.mockPeriod
            backwardTime += runner.mock / runner.step

            if (position >= distance) {
                raceEnd = forwardTime + backwardTime - (position - distance) / runner.step
                // console.log(raceEnd);

            }
        }
        return raceEnd
    })
}
