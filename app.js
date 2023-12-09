function bgcolor(color){
    let colorarray = ["#e58e26", "#f9b4ab", "#B1FB17", "#78e08f", "#fd79a8"];
    document.body.style.backgroundColor=colorarray[color];
}
let colorarray = ["#e58e26", "#f9b4ab", "#B1FB17", "#78e08f", "#fd79a8"];
let div= document.querySelector("div");

colorarray.forEach(function(color,index,arr){
    let span=document.createElement("span");
    span.style.backgroundColor=color;
    span.addEventListener("click",function(){
        bgcolor(index);
    });
    div.appendChild(span);
})