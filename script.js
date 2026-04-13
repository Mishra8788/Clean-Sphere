let questions = [
 {q:"3R stands for?",opts:["A","Reduce Reuse Recycle","C","D"],ans:1},
 {q:"Plastic decomposes in?",opts:["10","50","100","450"],ans:3},
 {q:"Best habit?",opts:["Litter","Clean","Ignore","Burn"],ans:1}
];

// RANDOMIZE
questions = questions.sort(()=>Math.random()-0.5);

let current=0,score=0;

function loadQ(){
document.getElementById("q").innerText=questions[current].q;
let opts=questions[current].opts.map((o,i)=>
`<div class="option" onclick="select(${i})">${o}</div>`
).join("");
document.getElementById("opts").innerHTML=opts;
}

let selected=-1;
function select(i){
selected=i;
}

function next(){
if(selected==questions[current].ans)score++;
current++;
selected=-1;

if(current<questions.length){
loadQ();
}else{
document.getElementById("quiz").innerHTML=
`<h2>Result: ${score}/${questions.length}</h2>`;
}
}

window.onload=loadQ;