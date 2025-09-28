import { type NextRequest, NextResponse } from 'next/server'

import { navigationConfig } from './config/navigation.config'
import { EnumTokens } from './lib/cookies'

const protectedRoutes = [navigationConfig.dashboard]

const authRoutes = [navigationConfig.register, navigationConfig.login]

export default function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthenticated = !!accessToken && !!refreshToken

	if (!isAuthenticated && protectedRoutes.includes(pathname)) {
		const loginUrl = request.nextUrl.clone()

		loginUrl.pathname = navigationConfig.login

		return NextResponse.redirect(loginUrl)
	}

	if (isAuthenticated && authRoutes.includes(pathname)) {
		const dashUrl = request.nextUrl.clone()

		dashUrl.pathname = navigationConfig.dashboard

		return NextResponse.redirect(dashUrl)
	}

	return NextResponse.next()
}

export const config = {
	matcher: [navigationConfig.dashboard, '/auth/:path*']
}
