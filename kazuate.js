// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let v=0;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu=Number(kaisu+1);
  let yosokaisu=kaisu;
  let p=document.querySelector('span#kaisu');
  p.textContent=yosokaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let z=document.querySelector('input[name="box"]');
  let x=z.value;
  let t=Number(x);
  let yoso=Number(t);
  
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  if(Number(kaisu)>=4||Number(v)==1){
    m=document.querySelector('p#result');
    m.textContent='答えは' +kotae+ 'でした。すでに答えは終わっています';
  }
  if(Number(x)===Number(kotae)&&Number(v)!==1){
    let m =document.querySelector('p#result');
    v=1;
    m.textContent='正解です。おめでとう！';
  }
  if(Number(yoso)!==Number(kotae)&&Number(kaisu)===3){
    m=document.querySelector('p#result');
    m.textContent='まちがい。残念でした答えは'+kotae+'です。';
  }
  if(Number(kaisu)<3&&Number(kotae)>Number(yoso)){
    m=document.querySelector('p#result');
    m.textContent='まちがい。答えはもっと大きいですよ';
  }
  if(Number(kaisu)<3&&Number(kotae)<Number(yoso)){
    m=document.querySelector('p#result');
    m.textContent='まちがい。答えはもっと小さいですよ';
  }
  // 　　　　  正解/不正解のときのメッセージを表示する
  
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let s=document.querySelector('button#answer');
s.addEventListener('click',hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
