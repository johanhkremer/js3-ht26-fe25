import { z } from "zod";

// Samma schema används i formuläret (klienten) och i serveraktionen (servern)
export const contactSchema = z.object({
    name: z.string().min(2, "Namnet måste vara minst 2 tecken"),
    email: z.email("Ogiltig e-postadress"),
});

export type ContactData = z.infer<typeof contactSchema>;
