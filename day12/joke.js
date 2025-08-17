import https from "https";
import chalk from "chalk";
import { json } from "stream/consumers";

const getjokes = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  https.get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", (close) => {
      const joke = JSON.parse(data);
      console.log(joke);
      console.log(`here is randomjoke:`);

      
      console.log(chalk.red(joke.setup));
      console.log(chalk.blue(joke.punchline));
    });

    response.on('error', (err)=> {
        console.log("error",err)
    })
  });
};

getjokes();
