import https from "https";
import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "1eeccfb59edc61c8c944107e"; // Replace with your real API key
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};
https.get(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;

    rl.question("enter amount in usd: ", (amount) => {
      rl.question("enter to convert in :", (currency) => {
        const rate = rates[currency.toUpperCase()];
        if (rate) {
          console.log(
            `   ${amount} USD is approximately ${convertCurrency(
              amount,
              rate
            )} ${currency}`
          );
        } else {
          console.log(`worng currency`);
        }
        rl.close();
      });
    });
  });
});
