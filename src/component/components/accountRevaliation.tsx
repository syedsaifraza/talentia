'use server'

import { revalidatePath } from 'next/cache'

export async function handleAccountRevalidation() {
    revalidatePath('/account', 'page')
}