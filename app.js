let navbar=document.querySelector('.navbar');
// window.addEventListener("click",function(){
//     if(navbar.style.width==="150px")
//     navbar.style.width="60px";
// });
document.addEventListener('DOMContentLoaded',function(){
    let wrapper=document.querySelector('#wrapper');
    let toplayer =document.querySelector('.top');
    let handle=document.querySelector('.handle');
    let skew=0;
    let delta=0;
     if(wrapper.className.indexOf('skewed') != -1){ 
        skew=10000;}
      wrapper.addEventListener('mousemove', function(e){
            delta = (e.clientX - window.innerWidth/2) * 0.5;
            handle.style.left= e.clientX + delta + 'px';
            toplayer.style.width= e.clientX+skew+delta+'px';
          
      });
});
