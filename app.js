// login button event handler

const loginArea = document.getElementById('login-area');
const transactionArea = document.getElementById('transaction-area');
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', function () {
  loginArea.style.display = 'none';
  transactionArea.style.display = 'block';
});

// deposit button
const depositButton = document.getElementById('deposit');
depositButton.addEventListener('click', function () {
  const depositNumber = getInputNumber('deposit-amount');

  updateSpanText('current-deposit', depositNumber);
  updateSpanText('current-balance', depositNumber);

  document.getElementById('deposit-amount').value = '';
});

// withDraw button event handler

const withdrawButton = document.getElementById('withdraw');
withdrawButton.addEventListener('click', function () {
  const withdrawNumber = getInputNumber('withdraw-amount');
  updateSpanText('current-withdraw', withdrawNumber);
  updateSpanText('current-balance', -1 * withdrawNumber);

  document.getElementById('withdraw-amount').value = '';
});

// update span text function

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totatAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totatAmount;
}

// getinput function

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
