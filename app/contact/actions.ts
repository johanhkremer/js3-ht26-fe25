"use server";

import { contacts } from "@/lib/db";
import { contactSchema, ContactData } from "./schema";

export async function sendContact(data: ContactData) {
    // Validera alltid igen på servern, klientvalideringen går att kringgå
    const result = contactSchema.safeParse(data);

    if (!result.success) {
        return { success: false, message: "Ogiltiga uppgifter" };
    }

    // Sparar i vår låtsasdatabas (en array), se lib/db.ts
    contacts.push({ id: contacts.length + 1, ...result.data });

    return { success: true, message: `Formulär mottaget, tack ${result.data.name}!` };
}