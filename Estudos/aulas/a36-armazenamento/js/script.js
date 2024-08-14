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

document.getElementById('cookieBtn').addEventListener('click', () => {
  const input = document.getElementById('cookie');
  const cookie = `info=${input.value};`; //nome e valor do cookie
  const expiration = `expires=${new Date(2024, 9, 9)};`; // expiração do cookie
  const path = `path=/;`; // path onde o cookie poderá ser acessado
  document.cookie = cookie + expiration + path; // criação do cookie
  input.value = ''
})

document.getElementById('cookie2Btn').addEventListener('click', () => {
  const input = document.getElementById('cookie2');
  const cookie = `text=${input.value};`;
  const expiration = `expires=${new Date(2024, 8, 7)};`;
  const path = `path=/;`
  document.cookie = cookie + expiration + path;

})