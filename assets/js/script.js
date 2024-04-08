const cores = ['Blue', 'Green', 'Purple', 'Red', 'Orange']; 
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const randomica = corRandomica();
  document.body.style.background = cores[randomica];
  document.querySelector('.color').innerHTML = cores[randomica];
});

function corRandomica() {
  return Math.floor(Math.random() * cores.length);
};