
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("1件目の検索結果:"); 
  for(let n of data.list.g1){
  console.log(n.service.name);
  console.log("番組名:" + n.title);
  console.log( n.subtitle);
  console.log("概要"+ n.content);
  }
}

// 課題5-1 の関数 printDom() はここに記述するこ

function printDom(data) {
  let dr =document.createElement('div');
  dr.setAttribute('div','result');
  let u=document.createElement('ul');
  dr.insertAdjacentElement('beforeend',u);
  for(let n of data.list.g1){
    let l=document.createElement('li');
    l.textContent=n.service.name;
    u.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent="番組名:" + n.title;
    u.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent=n.subtitle;
    u.insertAdjacentElement('beforeend',l);
    l=document.createElement('li');
    l.textContent="概要:"+ n.content;
    u.insertAdjacentElement('beforeend',l);
  }
  let b=document.body;
  b.insertAdjacentElement('beforeend',dr);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let sr=document.querySelector('button#answer');
sr.addEventListener('click',sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let url='https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0000-j.json';
  axios.get(url).then(showResult).catch(showError).then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data =resp.data;
  if(typeof data==='String'){
    data=JSON.parse(data);
    console.log(data);
    console.log(data.x);
  }
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
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
