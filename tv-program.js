
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
let kaisu=0;
function sendRequest() {
  // name 属性が tyannel の input 要素をすべて検索
  let rs = document.querySelectorAll('input[name="tyannel"]');
  let r;
  for (r of rs) {
    if (r.checked) {        // r が選択されていたら
      console.log(r.value);
     }
    }
  let s = document.querySelector('select#zyanru');
  let idx = s.selectedIndex;  // idx 番目の option が選択された

  let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o = os.item(idx);       // os の idx 番目の要素

  console.log('選択された ' + idx + ' 番目の option の情報:');
  console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
  console.log('  textContent='+o.textContent);
  /*let service='g1';
  let genre='0000';
  
  if(r.value==="e1"){
    service='e1'
  }
    if(o.value==="0100"){
      genre='0100';
    }
    if(o.value==="0205"){
      genre='0205';
    }
    if(o.value==="0300") { 
      genre='0300';
    }
    if(o.value==="0409"){
      genre='0409';  
    }
    if(o.value==="0502"){  
      genre='0502';
    }
    if(o.value==="0600"){  
      genre='0600';
    }
    if(o.value==="0700"){  
      genre='0700';
    }
    if(o.value==="0800"){  
      genre='0800';
    }
    if(o.value==="0903"){  
      genre='0903';
    }
    if(o.value==="1000"){
      genre='1000';
    }
    if(o.value==="1100"){
      genre='1100';
    }*/
  
    console.log(r.value + ',' + o.getAttribute('value'));
   console.log('https://www.nishita-lab.org/web-contents/jsons/nhk/' + r.value + '-' + o.getAttribute('value') + '-j.json');
  
  
  let url='https://www.nishita-lab.org/web-contents/jsons/nhk/' + r.value + '-' +o.getAttribute('value')+ '-j.json';
  axios.get(url).then(showResult).catch(showError).then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data =resp.data;
  if(typeof data==='String'){
    data=JSON.parse(data);
  }
  console.log(data);
  console.log(data.x);
  let space=document.createElement('div');
  sr.insertAdjacentElement('afterend',space);
  let rs = document.querySelectorAll('input[name="tyannel"]');
  let r;
  for (r of rs) {
    if (r.checked) {        // r が選択されていたら
      console.log(r.value);
     }
  }
    let cont=0;
  if(r.value==="g1"){
    if(Number(kaisu)>0){
      for(let z of data.list.g1){
        let f=document.querySelector('ul');
        f.remove;
      }
    }
  
    kaisu=Number(kaisu+1);

  for(let z of data.list.g1){
  let ul=document.createElement('ul');
  space.insertAdjacentElement('afterend',ul);
  let list=document.createElement('li');
  list.textContent=z.service.name;
  ul.insertAdjacentElement('beforeend',list);
  list=document.createElement('li');
  list.textContent=z.title;
  ul.insertAdjacentElement('beforeend',list);
  list=document.createElement('li');
  list.textContent=z.subtitle;
  ul.insertAdjacentElement('beforeend',list);
  list=document.createElement('li');
  list.textContent=z.content;
  ul.insertAdjacentElement('beforeend',list);
  list=document.createElement('li');
  list.textContent=z.act;
  ul.insertAdjacentElement('beforeend',list);
  }
}if(r.value==="e1"){
  if(Number(kaisu)>0){
      for(let z of data.list.e1){
        let f=document.querySelector('ul');
        f.remove;
      }
    }
  if(data===null){
    console.log(data);
  }
  for(let z of data.list.e1){
  let ul=document.createElement('ul');
  space.insertAdjacentElement('afterend',ul);
  let list=document.createElement('li');
  list.textContent=z.service.name;
  ul.insertAdjacentElement('beforeend',list);
  list=document.createElement('li');
  list.textContent=z.title;
  ul.insertAdjacentElement('beforeend',list);
  list=document.createElement('li');
  list.textContent=z.subtitle;
  ul.insertAdjacentElement('beforeend',list);
  list=document.createElement('li');
  list.textContent=z.content;
  ul.insertAdjacentElement('beforeend',list);
  list=document.createElement('li');
  list.textContent=z.act;
  ul.insertAdjacentElement('beforeend',list);
  }
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
