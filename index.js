const jour = document.querySelectorAll(".active");
const formul = document.querySelector('.formul');
const semaine = document.querySelector(".semaine");
const formulaire = document.querySelector(".form-calendrier");
const calandar = document.querySelectorAll(".calandar-active");
const btn = document.querySelector("#button");
const body = document.querySelector("body");
let cases = null;


for (let i = 0; i < jour.length; i++) {
    jour[i].textContent = i+1;
} 

calandar.forEach(element => {
  element.addEventListener('click', () => {
    formul.style.display = 'block';
    formulaire.style.display = "flex";
    cases = element;
  })
})

const colors = {
  Vip: "bg-danger text-white",
  anniv: "bg-black text-white",
  place: "bg-warning text-white"

}

formul.addEventListener('submit', (event) => {
   event.preventDefault();

   const reserv = {
    nom : document.getElementById("nom").value.trim(),
    HeurDebut : document.querySelector("#heure").value.trim(),
    HeurFin : document.querySelector("#date").value.trim(),
    date : document.querySelector("#time").value.trim(),
    num : document.querySelector("#nombre").value.trim(),
    type : document.querySelector("#reserv").value.trim(),
   }

   if(reserv.HeurDebut>=reserv.HeurFin){
    alert("Changer l'heure Fin.");
    return;
   }

   if (!reserv.nom || !reserv.HeurDebut || !reserv.HeurFin || !reserv.date || !reserv.num || !reserv.type) {
    alert("Veuillez remplir tous les champs.");
    return;
  } else {
    alert ("la Réservation est ajoutée");
  }

  const div = document.createElement("div");
  div.className = `reserver ${colors[reserv.type]}`;
  div.innerHTML = `<p>${reserv.nom} ${reserv.HeurDebut}-${reserv.HeurFin}</p>`;
  cases.appendChild(div);
  formul.style.display = "none";
  
  
})



