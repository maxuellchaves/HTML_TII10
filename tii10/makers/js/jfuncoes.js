$(function(){

    let imgs = $(".img-wrapper img");

    let currentImg = 0;

    setInterval(function(){
imgs.eq(currentImg).fadeOut(3000);
currentImg++;
if(currentImg >= imgs.length) currentImg = 0;
imgs.eq(currentImg).fadeIn(2000);


   
    },6000);
    
    

})