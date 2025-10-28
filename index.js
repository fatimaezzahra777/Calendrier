const form = document.querySelectorAll("td");
const formul = document.querySelector('.formul');

form.forEach(element =>{
  element.addEventListener('click', () => {
    formul.style.display = 'block'; 
  });
});

const btn = document.querySelector("#button");


btn.addEventListener('click', () => {
   btn.style.display ='none';
})



