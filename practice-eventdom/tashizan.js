function kekka(){
    let l =document.querySelector('input[name="left"]');
    let r =document.querySelector('input[name="right"]');
    let nl=Number(l.value) ;
    let nr=Number(r.value);
    let kekka =nl+nr;
    let a=document.querySelector('span#answer');
    a.textContent=kekka;
    console.log(kekka);
}
let b =document.querySelector('button');
b.addEventListener('click',kekka);
