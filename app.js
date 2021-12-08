function myfun(e) {
    let cls = "m" + e.text;
    console.log(cls);
    let chk = document.querySelector(".otherpages");
    for (let item of chk.children) {
        if (item.classList.contains("shifttome")) { item.classList.toggle("shifttome"); }
    }
    document.getElementsByClassName(cls)[0].classList.toggle("shifttome");

}
let itm = document.querySelector(".otherpages");
// window.addEventListener("wheel",fun2(e));
window.onwheel= fun2;
let cnt=0;
function fun2(e){
   // console.log(1234);
    
    cnt+=e.deltaY;
    console.log(cnt);
    if(cnt<200){itm.children[0].classList.add("shifttome");}
    else if(cnt<500){ itm.children[1].classList.add("shifttome");}
   else if(cnt<800) {itm.children[2].classList.add("shifttome");}
   else if(cnt<1000){ itm.children[3].classList.add("shifttome");}
   //if(cnt>1000)
  // else cnt=0;






}
// window.addEventListener('wheel',(event) => {
//     console.log('Scrolling...');
// });
