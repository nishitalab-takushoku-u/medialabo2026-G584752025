function greeting2(){
  let i=document.querySelector('input[name="shimei"]');
  let shimei =i.value;
  let aisatu = 'こんにちは' + shimei + 'さん';
  let p = document.querySelector('p#message');
  p.textContent = aisatu;
  console.log(aisatu);
}
 let b = document.querySelector('button#print');
 b.addEventListener('click',greeting2);