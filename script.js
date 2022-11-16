'use strict';
/* Vad ska vi göra här*/
console.log("test")
const booklist = [{
id: 1,
author: "Tappei Nagatsuki ",
title: "Re:Zero − Starting Life in Another World",
published:"April 20, 2012 ",
bestGirl:"Emilia"
},
{
id: 2,
author:"Eiichiro Oda",
title: "One piece",
published:"july 20, 1997",
bestGirl:"Carrot"
}]; 
const searchField= document.getElementById("searchField")
 /* Input, beforeInput, keypress, Keydown, keyup*/
searchField.addEventListener("keyup", handleKeypress);






function handleKeypress(e) {
    /*Ta emot/läsa av värdet i inputfältet 
    Skicka värdet till searchBooks
    searchBooks returnerar en filterad lista
    Filterade listam skickas till renderlist
    */ 
    searchBooks(e.target.value) 
}

function searchBooks(searchTerm)
{
/*Loopa igenom booklist
För varje varv i loopen, ta det aktuella elementet(boken)
Jämföra titeln med sökteremen
Om search termen matchar, lägg till i ny lista(filteredList)"
returner filteredlist eller anropar renderBookLiST
*/
const filteredList = []
      for(let i=0; i < booklist.length; i++){
const booklist_title = booklist[i].title.toLowerCase();
      if (booklist_title.indexOf(searchTerm.toLowerCase()) >= 0 ){
        console.log(searchTerm, booklist[i])
      filteredList.push(booklist[i])      

      }

}

renderBookList(filteredList)

} 

 
function renderBookList(list){
    /* Element i HTML-listan visas/döljs beroende på listans innehåll*/
    console.log(list)

}
