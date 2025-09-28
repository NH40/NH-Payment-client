import type { Metadata } from 'next'

import { RegisterForm } from '@/pages/auth/RegisterForm'

export const metadata: Metadata = {
	title: 'Регистрация'
}

export default function Page() {
	return <RegisterForm />
}
