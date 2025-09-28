import type { Metadata } from 'next'

import { LoginForm } from '@/pages/auth/LoginForm'

export const metadata: Metadata = {
	title: 'Вход в аккаунт'
}

export default function LoginPage() {
	return <LoginForm />
}
