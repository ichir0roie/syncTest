
var fs = require('fs');
function asyncFunc() {
    return new Promise((res,rej) => {
        console.log("start read file");
        //fs.readFileSync(ファイルのパス, 文字コード, コールバック関数)
        fs.readFile('./test.txt', (err, data) => {
            //dataがファイルの中身、errは読み込み時のエラー
            if (data) {
                console.log("end read file");
            } else {
                console.log(err);
            }
            res("test");
        });
    })
}

async function needAsyncFunc(){
    console.log("test start");
    const waiter=await asyncFunc();
    console.log("test end");
}

//why!?

needAsyncFunc();














