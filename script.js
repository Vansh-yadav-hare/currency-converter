const convertBtn = document.getElementById('convertBtn');
const amountInput = document.getElementById('amount');
const currencyFrom = document.getElementById('currencyFrom');
const currencyTo = document.getElementById('currencyTo');
const resultDisplay = document.getElementById('result');

// Exchange rates (static for demonstration)
const exchangeRates = {
    USD: {
        EUR: 0.85, // Example rate
        INR: 84.00, // Example rate
        USD: 1
    },
    EUR: {
        USD: 1.18, // Example rate
        INR: 87.00, // Example rate
        EUR: 1
    },
    INR: {
        USD: 0.013, // Example rate
        EUR: 0.011, // Example rate
        INR: 1
    }
};

convertBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = currencyFrom.value;
    const toCurrency = currencyTo.value;

    if (isNaN(amount)) {
        resultDisplay.textContent = "Please enter a valid amount.";
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    resultDisplay.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});
