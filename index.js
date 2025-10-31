const jour = document.querySelectorAll(".active-day");
const formul = document.querySelector('.formul');
const formulaire = document.querySelector(".form-calendrier");
const calandar = document.querySelectorAll(".calandar-active");
const annule = document.querySelector(".btn");
const temp = document.querySelector(".temps_AM");
const temps = temp.children;
let cases = null;
let idCounter = 0;
let editMode = false;     
let currentEdit = null;   


for (let i = 0; i < temps.length; i++) {
  temps[i].textContent = i + 3 + ":00AM";
}

for (let i = 0; i < jour.length; i++) {
  jour[i].textContent = i + 1;
}

calandar.forEach(element => {
  element.addEventListener('click', (e) => {
  
    if (e.target.tagName.toLowerCase() === 'i') return;
    formul.style.display = 'block';
    formulaire.style.display = "flex";
    cases = element;
    formul.reset();
    editMode = false;
    currentEdit = null;
  });
});

annule.addEventListener('click', () => {
  formul.style.display = 'none';
  formul.reset();
  editMode = false;
  currentEdit = null;
});

const colors = {
  Vip: "bg-danger text-white",
  anniv: "bg-succes text-white",
  place: "bg-warning text-white"
};


formul.addEventListener('submit', (event) => {
  event.preventDefault();

  const reserv = {
    nom: document.getElementById("nom").value,
    HeurDebut: document.querySelector("#heure").value,
    HeurFin: document.querySelector("#date").value,
    date: document.querySelector("#time").value,
    num: document.querySelector("#nombre").value,
    type: document.querySelector("#reserv").value,
  };

  if (reserv.HeurDebut >= reserv.HeurFin) {
    alert("Changer l'heure Fin.");
    return;
  }

  if (!reserv.nom || !reserv.HeurDebut || !reserv.HeurFin || !reserv.date || !reserv.num || !reserv.type) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  if (editMode && currentEdit) {
    currentEdit.className = `reserver ${colors[reserv.type]}`;
    currentEdit.innerHTML = `
      <p>
        ${reserv.nom} ${reserv.HeurDebut}-${reserv.HeurFin}
        <i class="fa fa-pen text-light edit" title="Modifier"></i>
        <i class="fa fa-trash text-light delete" title="Supprimer"></i>
      </p>
    `;
    formul.style.display = "none";
    editMode = false;
    currentEdit = null;
    alert("Réservation modifiée !");
    return;
  }

  idCounter++;
  const div = document.createElement("div");
  div.dataset.id = idCounter;
  div.className = `reserver ${colors[reserv.type]}`;
  div.innerHTML = `
    <p>
      ${reserv.nom} ${reserv.HeurDebut}-${reserv.HeurFin}
      <i class="fa fa-pen text-light edit" title="Modifier"></i>
      <i class="fa fa-trash text-light delete" title="Supprimer"></i>
    </p>
  `;
  cases.appendChild(div);
  formul.style.display = "none";
  alert("Réservation ajoutée !");
});


document.addEventListener("click", function (e) {

  if (e.target.classList.contains("delete")) {
    e.stopPropagation();
    const reservation = e.target.closest(".reserver");
    if (reservation && confirm("Supprimer cette réservation ?")) {
      reservation.remove();
    }
  }


  if (e.target.classList.contains("edit")) {
    e.stopPropagation();
    const reservation = e.target.closest(".reserver");
    if (reservation) {
 
      const text = reservation.querySelector("p").textContent.trim();
      const parts = text.split(" ");
      const nom = parts[0];
      const times = parts[1]?.split("-");
      const debut = times?.[0] || "";
      const fin = times?.[1] || "";

    
      document.getElementById("nom").value = nom;
      document.querySelector("#heure").value = debut;
      document.querySelector("#date").value = fin;
      document.querySelector("#reserv").value = "";

      currentEdit = reservation;
      editMode = true;


      formul.style.display = "block";
      formulaire.style.display = "flex";
    }
  }
});
