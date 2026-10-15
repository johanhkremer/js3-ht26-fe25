import { ContactData } from "@/app/contact/schema";

type Contact = ContactData & { id: number };

// Låtsasdatabas: en vanlig array i serverns minne.
// globalThis gör att arrayen överlever hot reload i dev.
// Datan försvinner när servern startas om.
const globalForDb = globalThis as unknown as { contacts?: Contact[] };

export const contacts: Contact[] = (globalForDb.contacts ??= []);
