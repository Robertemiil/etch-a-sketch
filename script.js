

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add(`div${i}`, 'grid-cell');
  container.appendChild(cell);
}
