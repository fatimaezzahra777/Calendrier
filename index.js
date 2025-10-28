const form = document.querySelectorAll("td");
const formul = document.querySelector('.formul');

form.forEach(element =>{
  element.addEventListener('click', () => {
    formul.style.display = 'block'; 
  });
});


console.log(form);
console.log(formul);


