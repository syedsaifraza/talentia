
// app/actions/postActions.ts
'use server'

import { revalidatePath } from 'next/cache'

export async function handlePostRevalidation() {
  revalidatePath('/feed');
}
