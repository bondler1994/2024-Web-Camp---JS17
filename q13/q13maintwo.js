// ### 13. 龜兔賽跑，兔子每秒可以跑20公尺，烏龜每秒跑0.28公尺，他們參加1000公尺競賽：
//兔子故意用每跑5秒鐘後退1公尺的方式來挑釁烏龜，請問兔子在途中還可以偷懶休息幾秒鐘再繼續跑並且贏得比賽?

class Runner {
    const(name, speed, strpBack, mockPeriod){
       this.name = name;
       this.speed = speed;
       this.strpBack = strpBack
       this.mockPeriod = mockPeriod
    }}


// 每五秒會鬧 20 * 5 - 1 = 99 公尺 每五秒 99 公尺
// 再來總距離 1000 / 99 = 10.1/ 
// 因為有5週期 5 * 10.1 = 50.5 四捨五入 51 兔子完成時間
// 烏龜 1000 / 0.28 = 3571.4 秒才能完成比賽
// 所以要求兔子可以懶多久 3571 - 51 = 3520


const speed = [20,0.28]
const strpBack = [1,0]
const mockPeriod = [5,0]

const rabbit = new Runner("rabbit",speed[0],strpBack[0],mockPeriod[0])
const turtle = new Runner("turtle",speed[1],strpBack[1],mockPeriod[1])

const runnerList = [rabbit,turtle]

function letTheGameBegin(){
    const distance = 1000
    const timeGap = getTimeGap()
    const result = `${}`
}

function getTimeGap(runnerList, distance){
    const timeSpendList = getTimeGap(runnerList, distance)
    let timeGap = timeSpendList[0]-timeSpendList
}