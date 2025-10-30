const jour = document.querySelectorAll(".active");
const formul = document.querySelector('.formul');
const semaine = document.querySelector(".semaine");
const formulaire = document.querySelector(".form-calendrier");
const casee = document.querySelectorAll("td");
const btn = document.querySelector("#button");
const body = document.querySelector("body")


for (let i = 0; i < casee.length; i++) {
    casee[i].textContent = i+1;
} 


jour.forEach(element =>{
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
  } else {
    alert ("la Réservation est ajoutée");
  }

  const elem = document.createElement("div")
  elem.innerHTML = `
    <strong>${reserv.nom}</strong><br>
    ${reserv.HeurDebut} - ${reserv.HeurFin}`;
})
