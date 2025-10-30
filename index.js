const jour = document.querySelectorAll(".active-day");
const formul = document.querySelector('.formul');
const semaine = document.querySelector(".semaine");
const formulaire = document.querySelector(".form-calendrier");
const casee = document.querySelectorAll("td");
const btn = document.querySelector("#button");


for (let i = 0; i < casee.length; i++) {
    casee[i].textContent = i+1;
} 


casee.forEach((element, index) =>{
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

   const reserv = {
    nom : document.getElementById("nom").value,
    HeurDebut : document.querySelector("#heure").value,
    HeurFin : document.querySelector("#date").value,
    date : document.querySelector("#time").value,
    num : document.querySelector("#nombre").value,
    type : document.querySelector("#reserv").value,
   }

   if (!reserv.nom || !reserv.HeurDebut || !reserv.HeurFin || !reserv.date || !reserv.num || !reserv.type) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  document.createElement("div")
  .className = `p-2 rounded mt-2 ${colors[reserv.type] || "bg-secondary text-white"}`
  .innerHTML = `
    <strong>${reserv.nom}</strong><br>
    ${reserv.HeurDebut} - ${reserv.HeurFin}`;
})
