'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../ui/Button'

import { useAuth } from '@/hooks'

export function SiteHeader() {
	const { isAuthorized } = useAuth()

	return (
		<header className='w-full px-6 py-4'>
			<div className='mx-auto flex max-w-7xl items-center justify-between'>
				<div className='flex items-center gap-x-2'>
					<Image
						src='/images/logo.svg'
						alt='NH Payment'
						width={30}
						height={30}
					/>
					<span className='text-xl font-semibold text-gray-800'>
						NH Payment
					</span>
				</div>

				<div className='flex items-center gap-x-4'>
					{isAuthorized ? (
						<Button size='sm' asChild>
							<Link href='/dashboard'>Личный кабинет</Link>
						</Button>
					) : (
						<>
							<Button variant='ghost' size='sm' asChild>
								<Link href='/auth/login'>Войти</Link>
							</Button>
							<Button size='sm' asChild>
								<Link href='/auth/register'>Регистрация</Link>
							</Button>
						</>
					)}
				</div>
			</div>
		</header>
	)
}
