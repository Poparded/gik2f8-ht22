'use strict';
/* Vad ska vi göra här*/
console.log("test")
const searchinput= null;
const booklist = [{
id: 1,
author: "Tappei Nagatsuki ",
title: "Re:Zero − Starting Life in Another World",
published:"April 20, 2012 "
},
{
id: 2,
author:"Eiichiro Oda",
title: "One piece",
published:"july 20, 1997"
}];

function handleKeypress(input) {
    /*Ta emot/läsa av värdet i inputfältet
    Skicka värdet till searchBooks
    searchBooks returnerar en filterad lista
    Filterade listam skickas till renderlist
    */ 
    searchBooks(input) 
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

handleKeypress("T")
function renderBookList(list){
    console.log(list)

}
