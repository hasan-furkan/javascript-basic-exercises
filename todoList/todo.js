
const input = document.getElementById("input")
const button = document.getElementById("button")
const liste = document.getElementById("liste")


let bosListe = []
let text = ""

function tiklandi(e) {
 text = input.value
 bosListe.push( text)

 let li = document.createElement("li")
 let deleteBtn = document.createElement("button")
 deleteBtn.innerHTML = "Sil"

 liste.appendChild(li)
 liste.appendChild(deleteBtn)

 bosListe.forEach(function(i){
    li.innerHTML =  i
 input.value = ""
 
    console.log(deleteBtn);

  
})}


