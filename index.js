const form = document.querySelectorAll(".active-day");
const formul = document.querySelector('.formul');
const semaine = document.querySelector(".semaine");
const formulaire = document.querySelector(".form-calendrier");



form.forEach(element =>{
  element.addEventListener('click', () => {
    formul.style.display = 'block';
    formulaire.style.display = "flex"
  });
});

const btn = document.querySelector("#button");

btn.addEventListener('click', () => {
   btn.style.display ='none';
})

for (let i = 0; i <= form.length; i++) {
    formul[i].textContent = i+1;
}





