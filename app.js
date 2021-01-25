let loginArea = document.getElementById('login-area');
let transactionArea = document.getElementById('transaction-area');
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', function () {
  loginArea.style.display = 'none';
  transactionArea.style.display = 'block';
});
