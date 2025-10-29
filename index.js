const form = document.querySelectorAll("td");
const formul = document.querySelector('.formul');
const semaine = document.querySelector(".semaine");
const semaines = document.querySelector(".semaine");

form.forEach(element =>{
  element.addEventListener('click', () => {
    formul.style.display = 'block'; 
  });
});

const btn = document.querySelector("#button");


btn.addEventListener('click', () => {
   btn.style.display ='none';
})

const valeurs = Array.map(td => td.textContent);
console.log(valeurs); 



