'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
 
export default async function setLang(lang) {
    const cookieStore = cookies();
    cookieStore.set("hub_lang", lang);
    redirect("/");
}