const jour = document.querySelectorAll(".active");
const formul = document.querySelector('.formul');
const semaine = document.querySelector(".semaine");
const formulaire = document.querySelector(".form-calendrier");
const calandar = document.querySelectorAll(".calandar-active");
const btn = document.querySelector("#button");
const annule = document.querySelector(".annule");
const three = document.querySelector(".three").children;
const four = document.querySelector(".four").children;
const five = document.querySelector(".five").children;
const siix = document.querySelector(".siix").children;
const temp = document.querySelector(".temps_AM");
const deletBtn = document.querySelector("#deleteBtn");
const temps = temp.children;
let cases = null;

for (let i=0; i<temps.length ; i++){
  temps[i].textContent = i+3+":00AM";
}

for (let i = 0; i < jour.length; i++) {
  jour[i].textContent = i + 1;
}

calandar.forEach(element => {
  element.addEventListener('click', () => {
    formul.style.display = 'block';
    formulaire.style.display = "flex";
    cases = element;
    formul.reset();
  })
})

annule.addEventListener('click', () => {
  formul.style.display = 'none'
})

const colors = {
  Vip: "bg-danger text-white",
  anniv: "bg-black text-white",
  place: "bg-warning text-white"
}


formul.addEventListener('submit', (event) => {
  event.preventDefault();

  const reserv = {
    nom: document.getElementById("nom").value,
    HeurDebut: document.querySelector("#heure").value,
    HeurFin: document.querySelector("#date").value,
    date: document.querySelector("#time").value,
    num: document.querySelector("#nombre").value,
    type: document.querySelector("#reserv").value,
  }

  

  if (reserv.HeurDebut >= reserv.HeurFin) {
    alert("Changer l'heure Fin.");
    return;
  }

  if (!reserv.nom || !reserv.HeurDebut || !reserv.HeurFin || !reserv.date || !reserv.num || !reserv.type) {
    alert("Veuillez remplir tous les champs.");
    return;
  } else {
    alert("la Réservation est ajoutée");
  }

  const div = document.createElement("div");
  div.className = `reserver ${colors[reserv.type]}`;
  div.innerHTML = `<p>${reserv.nom} ${reserv.HeurDebut}-${reserv.HeurFin}<i class="fa fa-pen mx-1 text-light edit" title="Modifier"></i>
        <i class="fa fa-trash mx-1 text-light delete" title="Supprimer"></i></p>`;
  cases.appendChild(div);
  formul.style.display = "none";

  const delet = document.querySelector(".delete");

  delet.addEventListener('click', () => {
    const confirm = confirm("Vouez vous Supprimer")
    div.remove();
    
  })


})



const Moddify = () =>{
  
}


