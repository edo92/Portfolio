'use server';

import { redirect } from 'next/navigation';

export default async function Index() {
   redirect('/app/landing');
}
