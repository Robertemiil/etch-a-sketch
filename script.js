const header = document.createElement('header');
document.body.prepend(header);
header.textContent= 'Etch-A-Sketch';
const navBar = document.createElement('nav');
header.after(navBar);
navBar.classList.add('navBar');
const container = document.createElement('div');
container.classList.add('container');
navBar.after(container);
const qtyButton = document.createElement('button');
qtyButton.classList.add('qtyButton');
qtyButton.textContent='click me';
navBar.prepend(qtyButton);
let cells  ;
const cellsLimit = 25;
const resetBtn = document.createElement('button');
resetBtn.textContent ='reset';
navBar.appendChild(resetBtn);


const cellQty = ()=>{
  reset(container);
  const qty = Number(prompt('how many cells do you need ?'));
  qtyButton.addEventListener('click',()=>{
    if(qty <= cellsLimit)return qty;

    else if(qty >= cellsLimit) 
    return alert('cells exceeded the limits , please try a number below 25');

    if(!Number.isInteger(qty) || qty <= 0) {
     alert('Please enter a valid positive number.');
     return;
    }

  }
   );
  
   //make cells squared
   const totalCells = cells + qty;
   container.style.gridTemplateColumns = `repeat(${qty}, 1fr)`;
   container.style.gridTemplateRows = `repeat(${qty}, 1fr)`;
    
   for (let i = 0; i < qty*qty; i++) {
     const cell = document.createElement('div');
     cell.classList.add(`div${i}`, 'grid-cell');
     container.appendChild(cell);
    }
   //For Test purposes
   cells = totalCells;
   console.log(cells);
  //conditional statement avoid event 
  //from happening on blank container 
  if(cells!=0){
  container.addEventListener('mouseover', (e)=>{
  const target = e.target;
  if(target.classList.contains('grid-cell'))
  target.style.backgroundColor = randomColor();
  });
 };
}

qtyButton.addEventListener('click',()=>cellQty());

function randomColor(){
  let result;
  let red = Math.round(Math.random()*250);
  let green = Math.round(Math.random()*250);
  let blue = Math.round(Math.random()*250);
  let alpha = Math.random() + 0.1;

  return  result = `rgba(${red},${green},${blue},${alpha})`; 
};

const reset = (r) =>{
  r.innerHTML='';
  cells = 0;
   
};
resetBtn.addEventListener('click', ()=>{
  reset(container);
});

