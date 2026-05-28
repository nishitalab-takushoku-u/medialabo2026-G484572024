
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
console.log(data.sys.country+" "+data.name);
for(let r of data.weather) {
  console.log(r.id+" "+r.main+" "+r.description+" "+r.icon);
}
console.log("緯度 "+data.coord.lon);
console.log("経度 "+data.coord.lat);
console.log("最低気温 "+data.main.temp_min+" 最高気温 "+data.main.temp_max);
console.log("湿度 "+data.main.humidity);
console.log("風速 "+data.wind.speed+" 風向 "+data.wind.deg);

}

//検索キー
// let b = document.querySelector('#print');
// b.addEventListener('click', ()=>{
//   let k = document.getElementById("city").value;
//   console.log("検索キー: " + k);
//   sendRequest();
// });


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
    let body = document.querySelector('body');
    let div = document.createElement('div');
    div.setAttribute('id','result');
    body.insertAdjacentElement('beforeend', div);

    let p = document.createElement('p');
    div.insertAdjacentElement('beforeend', p);

    let q = document.createElement('q');
    p.insertAdjacentElement('beforeend', q);
    q.textContent = '検索結果1件';
    let u = document.createElement('ul');
    div.insertAdjacentElement('beforeend', u);

    // let h2 = document.createElement('li');
    // u.insertAdjacentElement('beforeend', h2);
    // h2.textContent = data.name + ", " + data.sys.country;

    
    let li1 = document.createElement('li');
    li1.textContent = '緯度: ' + data.coord.lon;
    u.insertAdjacentElement('beforeend', li1);

    let li2 = document.createElement('li');
    li2.textContent = '経度: ' + data.coord.lat;
    u.insertAdjacentElement('beforeend', li2);

    let li3 = document.createElement('li');
    li3.textContent='天気: '+data.weather[0].description;
    u.insertAdjacentElement('beforeend',li3);

    let li4 = document.createElement('li');
    li4.textContent='最低気温: '+data.main.temp_min;
    u.insertAdjacentElement('beforeend',li4);

    let li5 = document.createElement('li');
    li5.textContent='最高気温: '+data.main.temp_max;
    u.insertAdjacentElement('beforeend',li5);

    let li6 = document.createElement('li');
    li6.textContent='湿度: '+data.main.humidity;
    u.insertAdjacentElement('beforeend',li6);

    let li7 = document.createElement('li');
    li7.textContent='風速: '+data.wind.speed+' 風向き: '+data.wind.deg;
    u.insertAdjacentElement('beforeend',li7);

    let li8 = document.createElement('li');
    li8.textContent='都市名: '+data.name;
    u.insertAdjacentElement('beforeend',li8);


}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
b = document.querySelector('#print');
b.addEventListener('click',sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
const cityid ={
  "カイロ":360630,
  "モスクワ":524901,
  "ヨハネスブルク":993800,
  "北京":1816670,
  "東京":1850147,
  "シンガポール":1880252,
  "シドニー":2147714,
  "ロンドン":2643743,
  "パリ":2968815,
  "リオデジャネイロ":3451189,
  "ニューヨーク":5128581,
  "ロサンゼルス":5368361,
}
let i = document.querySelector('#city').value;
let id = cityid[i];
if(!id) {
  let old = document.querySelector('#result');
  if(old){
     old.remove();
  }
  let body = document.querySelector('body');
  let div = document.createElement('div');
  div.setAttribute('id','result');
  body.insertAdjacentElement('beforeend', div);
  div.textContent = i + ' という都市は見つかりませんでした';
  return;
}
let url='https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';

axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

let pri=true;
// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
let data = resp.data;

if(pri) {
  let div = document.querySelector('div');
  div.remove();
}
printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

