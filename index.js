const form = document.querySelectorAll("td");
const formul = document.querySelector('.formul');

form.forEach(element =>{
  element.addEventListener('click', () => {
    formul.style.display = 'block'; 
  });
});

const btn = document.querySelector("#button");

btn.foreach(butn =>{
  butn.addEventListener('click', () => {
    btn.style.display ='none';
  })
})


console.log(btn);
console.log(formul);


