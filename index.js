const jour = document.querySelectorAll(".active-day");
const formul = document.querySelector('.formul');
const semaine = document.querySelector(".semaine");
const formulaire = document.querySelector(".form-calendrier");
const casee = document.querySelectorAll("td");
const btn = document.querySelector("#button");


for (let i = 0; i < casee.length; i++) {
    casee[i].textContent = i+1;
} 

let casse = null;

casee.forEach(element =>{
  element.addEventListener('click', () => {
    formul.style.display = 'block';
    formulaire.style.display = "flex";
  });
});



const colors = {
  VIP: "bg-danger text-white",
}


btn.addEventListener('click', (event) => {
   event.preventDefault();

   const nom = document.getElementsById("nom").value;
   const HeurDebut = document.querySelector("#heure").value;
   const HeurFin = document.querySelector("#date").value;
   const date = document.querySelector("#time").value;
   const num = document.querySelector("#nombre").value;
   const type = document.querySelector("#reserv").value;

   if (!nom || !HeurDebut || !HeurFin || !date || !num || !type) {
    alert("Veuillez remplir tous les champs.");
    return;
  }


})







