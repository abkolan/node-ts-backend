import add from "./math/add";
import dotenv from 'dotenv-safe';

dotenv.config();

console.log(add(1,5));
console.log(`My name is: ${process.env.MY_NAME}`);
