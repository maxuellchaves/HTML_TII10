function mover(){
    slider.addEventListener('mousedown',(e)=>{
        isDown =true;
        slider.style.cursor = "grabbing";
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        })
        
        
        slider.addEventListener('mouseleave',()=>{
        isDown = false;
        slider.style.cursor ="initial";
        })
        
        slider.addEventListener('mouseup',()=>{
        isDown = false;
        slider.style.cursor ="initial";
        })
        
        addEventListenerAll(slider,'mousemove drag',(e)=>{
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX)*3;
        slider.scrollLeft = scrollLeft - walk;
        })
}

function addEventListenerAll (slider,events,fn){
let event = events.split(' ');

event.forEach(element => {
    slider.addEventListener(element,fn);
});

}

function slideTroca(element,element2){

element[0].style.backgroundColor = "white";
let contador = 0;
  let intervalo =  setInterval(function(){
    removeBullets(element);
contador++;
if(contador >= allLabel.length){
    contador = 0;
}

element[contador].style.backgroundColor ="white";
element2.style.marginLeft = "-"+contador+"00%";

    },6000)

    element.forEach((e,q)=>{
        e.addEventListener('click',function(){
            clearInterval(intervalo);
            removeBullets(element);
            this.style.backgroundColor = "white";
            element2.style.marginLeft = "-"+ q+ "00%";

        })
    })

}

function removeBullets(element){
    for(x of element){
        x.style.backgroundColor = "#444";
    }
}

function windowResizeimg(element,element2){
    window.addEventListener('resize', (e) => {
        let wrapperWidth = element.clientWidth;
        element2.forEach((e)=>{
            e.style.width = wrapperWidth+"px";
        })
    });

    let wrapperWidth = element.clientWidth;
    element2.forEach((e)=>{
        e.style.width = wrapperWidth+"px";
    });
}

function menuMobile(){
    clickMobi.addEventListener('click',function(){
        layerMobile.style.display = "block";
        mobileCompleto.style.transform = "translateX(0)"
       
    })

    fecharMobile.addEventListener('click',function(){
        layerMobile.style.display = "none";
        mobileCompleto.style.transform = "translateX(-100%)"
      })

   
}

function changeEquipamento(){
    btnEquipamento.forEach(function(e,i){
        e.addEventListener('click',function(){
            removerClassEq();
            esconder();
            equipamento[i].style.opacity ="1";
            this.classList.add('active');
        })
    })
}

function removerClassEq(){
    btnEquipamento.forEach(function(e){
     e.classList.remove("active");
    })
}

function esconder(){
    equipamento.forEach(function(e){
        e.style.opacity = "0";
    })
}

