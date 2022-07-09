colors=["#f29292","#a7d938","#c16d16","#2f8add","#f03491","#0e95f4","#e47d12"];
const container=document.getElementById("container");
const sq=800;
for(var i=0;i<sq;i++){
    const square=document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',()=>{
        setcolor(square);
       
    })
    square.addEventListener('mouseout',()=>{
        removeColor(square);
       
    })
    container.appendChild(square);
}
function setcolor(element){
    const color=randomColor();
    element.style.background=color;
    element.style.boxShadow="0 0 5px #000";
    
}
function removeColor(element){
    element.style.background="#1d1d1d";
    element.style.boxShadow="0  0 2px #000";
}
function randomColor(){
    const index=Math.floor(Math.random()*colors.length);
    console.log(Math.random());
    return colors[index];
}