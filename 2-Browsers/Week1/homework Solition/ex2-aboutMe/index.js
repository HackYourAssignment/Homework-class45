'use strict';

function main(){
   const nickname = document.getElementById("nickname")
   nickname.innerText = "Roba"
   const favorite = document.getElementById("fav-food")
   favorite.innerText = "Enjera"
   const hometown = document.getElementById("hometown")
   hometown.innerText = "Tigray"
   
   const allItems = document.getElementById("allItems")
   const eachList = allItems.children
   for(let i=0;i<eachList.length;i++){
   eachList[i].classList.add("list-item")
   }

}
main()