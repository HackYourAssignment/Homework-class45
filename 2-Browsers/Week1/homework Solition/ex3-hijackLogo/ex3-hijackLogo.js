'use strict';

function hijackGoogleLogo() {
   const googleLogo = ["/Users/hackyourfuture/Documents/HYF-projects/Assignments/2-Browsers/Week1/homework/ex3-hijackLogo/assests/google2.jpeg","/Users/hackyourfuture/Documents/HYF-projects/Assignments/2-Browsers/Week1/homework/ex3-hijackLogo/assests/google3.jpeg","/Users/hackyourfuture/Documents/HYF-projects/Assignments/2-Browsers/Week1/homework/ex3-hijackLogo/assests/download.png"]
   const HackYourFutureLogo = "/Users/hackyourfuture/Documents/HYF-projects/Assignments/2-Browsers/Week1/homework/ex3-hijackLogo/assests/hyf.png"   
  
   const ListofLogos = document.getElementById("logos")
   const eachlogo = ListofLogos.children
   for(let i =0;i<eachlogo.length;i++){
      let url = new URL(eachlogo[i].src)
      if(url.pathname === googleLogo[0]|| url.pathname === googleLogo[1] || url.pathname === googleLogo[2] ){
         eachlogo[i].src = HackYourFutureLogo
      }

   }
e
}
setTimeout(() => {
   hijackGoogleLogo()
 }, 5000);
