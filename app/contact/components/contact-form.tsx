"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { contactSchema, ContactData } from "../schema";
import { sendContact } from "../actions";

function ContactForm() {
    const [message, setMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactData>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: "", email: "" },
    });

    // Körs bara om valideringen i webbläsaren gick igenom
    async function onSubmit(data: ContactData) {
        const result = await sendContact(data);
        setMessage(result.message);

        if (result.success) {
            reset();
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex max-w-sm flex-col gap-4">
            <div>
                <label htmlFor="name">Namn</label>
                <input id="name" {...register("name")} className="w-full rounded border p-2" />
                {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="email">E-post</label>
                <input id="email" {...register("email")} className="w-full rounded border p-2" />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Skickar..." : "Skicka"}
            </Button>

            {message && <p>{message}</p>}
        </form>
    );
}

export default ContactForm;
