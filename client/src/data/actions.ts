"use server"
import {z} from 'zod'

const subscribeSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
  });


export async function subscribeAction(prevState: any, formData: FormData) {
    console.log("Our first server action");
    const email = formData.get("email");

    const validatedFields = subscribeSchema.safeParse({
        email: email,
      });

    if (!validatedFields.success) {

        console.dir(validatedFields.error.flatten().fieldErrors, { depth: null})

        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            strapiErrors: null,
        };
    }

    console.log(email, "Our email input from form")
  }
  