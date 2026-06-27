

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
const qtyButton = document.createElement('button');
qtyButton.classList.add('qtyButton');
qtyButton.textContent='click me';
document.body.prepend(qtyButton);
let cells  = 0;
const cellsLimit = 25;
const resetBtn = document.createElement('button');
resetBtn.textContent ='reset';
//FIXME cells > 0 ? container.after(resetBtn) : null ;


const cellQty = ()=>{
   const qty = Number(prompt('how many cells do you need ?'));
   if (!Number.isInteger(qty) || qty <= 0) {
     alert('Please enter a valid positive number.');
     return;
   }

   for (let i = 0; i < qty; i++) {
     const cell = document.createElement('div');
     cell.classList.add(`div${i}`, 'grid-cell');
     container.appendChild(cell);
   }

   cells += qty;
   console.log(cells);
}


qtyButton.addEventListener('click',()=>{
     if(cells <= cellsLimit)return cellQty();
     else if(cells >= cellsLimit) 
     return alert('cells exceeded the limits , please reset');
 }
);
