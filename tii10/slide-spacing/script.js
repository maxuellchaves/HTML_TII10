let img_wrap = document.querySelectorAll('.img-wrap');

img_wrap.forEach(element => {
    element.addEventListener('click',()=>{
        removerActive();
        element.classList.add("active");
    })
});


function removerActive(){
    img_wrap.forEach(element=>{
        element.classList.remove("active");
    })
}