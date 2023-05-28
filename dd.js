const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['violet','indigo','blue','green','yellow','orange','red','black'];
body.style.backgroundColor='green';
document.addEventListener('click',function(){
const colorIndex=parseInt(Math.random()*color.length);
body.style.backgroundColor=color[colorIndex];
});