const cores = ['Blue', 'Green', 'Purple', 'White', 'Red', 'Yellow']; 
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const randomica = corRandomica();
  document.body.style.background = cores[randomica];
});

function corRandomica() {
  return Math.floor(Math.random() * cores.length);
}