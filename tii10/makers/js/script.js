



if(allIgm.length >= 5){
   slider.style.justifyContent = "space-between";

 slider.addEventListener("mouseover",function(){
  slider.style.cursor = 'grab';
 })

  mover();
}else{
  slider.style.justifyContent = "center";
  slider.style.cursor = "initial"
}


slideTroca(allLabel,wrapperImg);
slideTroca(allBullets,wrapperImg2);
windowResizeimg(imgPremium,redi);
windowResizeimg(imgPremium2,redi2);
menuMobile();



