let circles = document.querySelectorAll('.circle');
let barLoading = document.querySelector('.bar-loading');
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let currentCircle = 1;

next.addEventListener('click',(e)=>{
currentCircle++;

if(currentCircle > circles.length){
    currentCircle = 4;
}

update();

})

prev.addEventListener('click',(e)=>{
    currentCircle--;
    
    if(currentCircle < 1){
        currentCircle = 1;
    }
    
    update();
    
    })


function update(){

    circles.forEach((circle,idx)=>{
        if(idx < currentCircle){
        circle.classList.add('active');
        
        }else{
            circle.classList.remove('active'); 
        }
    })
    
    barLoading.style.width = ((currentCircle -1) / (circles.length -1)* 100) + "%";

if(currentCircle >= circles.length){
    next.disabled = true;
    prev.disabled = false;
}else if(currentCircle > 1){
    prev.disabled = false;
    next.disabled = false;
}else{ // next.disabled = false;
    prev.disabled = true;
}




    
}