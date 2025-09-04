// export const PORT = isNaN(process.env.PORT) ? 3008 : parseInt(process.env.PORT);

import { z, ZodError } from "zod";

// const ageSchema = z.number().min(18).max(100).int();
// const age = 87;

// const parseint = ageSchema.parse(age);
// const  {data , error , sucess} = ageSchema.safeParse(age)
// console.log(data , sucess , error);

// try {
//   const parseint = ageSchema.parse(age);
//   console.log(parseint);
// } catch (error) {
//   if (error instanceof ZodError) {
//     console.log(error.issues[0].message);
//   } else {
//     console.log("unexpected eror", error);
//   }
// }




const port = z .coerce.number().min(1).max(7000).default(3008)

export const PORT =port.parse(process.env.PORT)

// console.log( `server is running on `)
