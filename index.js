const form = document.querySelectorAll("td");
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
    form[i].textContent = i+1;
}



