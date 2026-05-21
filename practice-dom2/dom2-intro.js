function changeDom(){
    let l=document.createElement('li');
    l.textContent='ヨット';
    let u=document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend',l); 
    let i=document.querySelector('img#bluemoon');
    i.setAttribute('src','bluemoon.jpg');
    let a=document.createElement('a');
    a.textContent=('拓殖大学HP');
    a.setAttribute('href','https://www.takushoku-u.ac.jp')
    let p=document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend',a);
    l = document.querySelector('li#mochi');
    l.remove();
    u=document.querySelector('ul#kassen');
    u.remove();
    u = document.createElement('ul');      // ul 要素を作成

 l = document.createElement('li');      // 赤のli要素を作成して，
 l.textContent = '赤';                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);     

 l = document.createElement('li');      // 緑のli要素を作成して，
 l.textContent = '緑';                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);     

 l = document.createElement('li');      // 青のli要素を作成して，
 l.textContent = '青';                  // ul要素の中に追加
 u.insertAdjacentElement('beforeend', l);

 p = document.querySelector('p#primary');     // p#primary 要素の
 p.insertAdjacentElement('afterend', u);
}
let b= document.querySelector('button#henkou');
b.addEventListener('click',changeDom);