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

  let currentDeposit = document.getElementById('current-deposit').innerText;
  let currentDepositNumber = parseFloat(currentDeposit);
  let totatDeposit = depositNumber + currentDepositNumber;

  document.getElementById('current-deposit').innerText = totatDeposit;
  document.getElementById('deposit-amount').value = '';
});
