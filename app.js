const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["#3b3a37", "#ffe626", "#85e625", "#f73465", "#35a2bd" , "#ffffff" , "#000000" , "#49ad69" , "#6e26ad"];


button.addEventListener("click" , changeBackground);

let sira = 0;

function changeBackground() {
    //rastgele renk
    //  const rastgelesayi = Math.floor(Math.random() * colors.length  )
    //    const  secilenrenk = colors[rastgelesayi]
    // console.log(rastgelesayi , secilenrenk)
    // body.style.backgroundColor = secilenrenk


    // sirayla renk secme
       console.log(sira)
       if(sira == 9) sira = 0;
const secilenrenk = colors[sira]  
sira++;
body.style.background = secilenrenk



}   