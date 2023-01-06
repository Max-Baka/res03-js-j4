function exercice1()
{
let btn = document.getElementById("btn-change-color");
let box = document.getElementById("box1");
btn.addEventListener("click", function(event){
box.style.backgroundColor = "blue";

});
}
function exercice2()
{
let btn = document.getElementById("btn-move");

btn.addEventListener("click", function(event){
    
  let move = document.getElementsByClassName("move");
  let monoboule = document.getElementById("box2");
  
  monoboule.classList.add("move");
    
});
}

function exercice3()
{
    let btn = document.getElementById("btn-add-ingredients");
    let ingredients = ["Salade", "Tomate", "Oignon"];
    btn.addEventListener("click", function(event){
        
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let txt = document.createTextNode("Salade");
        let txt2 = document.createTextNode("Tomate");
        let txt3 = document.createTextNode("Oignon");
    
        li.appendChild(txt);
        li2.appendChild(txt2);
        li3.appendChild(txt3);
        ul.appendChild(li);
        ul.appendChild(li2);
        ul.appendChild(li3);
});}

function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
}

function exercice5()
{

}

function exercice6()
{

}

window.addEventListener("DOMContentLoaded", function(){
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});