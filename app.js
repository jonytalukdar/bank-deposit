// login button event handler

let loginArea = document.getElementById('login-area');
let transactionArea = document.getElementById('transaction-area');
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', function () {
  loginArea.style.display = 'none';
  transactionArea.style.display = 'block';
});

// deposit button
let depositButton = document.getElementById('deposit');
depositButton.addEventListener('click', function () {
  let depositAmount = document.getElementById('deposit-amount').value;
  let depositNumber = parseFloat(depositAmount);

  updateSpanText('current-deposit', depositNumber);
  updateSpanText('current-balance', depositNumber);

  document.getElementById('deposit-amount').value = '';
});

function updateSpanText(id, depositNumber) {
  let current = document.getElementById(id).innerText;
  let currentNumber = parseFloat(current);
  let totatAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totatAmount;
}
