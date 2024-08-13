document.getElementById('sessionBtn').addEventListener('click', () => {
  const input = document.getElementById('session');
  sessionStorage.setItem('item', input.value);
  input.value = '';
})

document.getElementById('readSession').addEventListener('click', () => {
  const item = sessionStorage.getItem('item')
  alert(`A informação salva é ${item}`);
})

document.getElementById('localBtn').addEventListener('click', () => {
  const input = document.getElementById('local');
  localStorage.setItem('info', input.value);
  input.value = '';
})

document.getElementById('readLocal').addEventListener('click', () => {
  const info = localStorage.getItem('info')
  alert(`A informação armazenada em local storage é ${info}`)
})