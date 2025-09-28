import { saveToken } from '@/lib/cookies'

import { api } from '../instance'
import type { AuthResponse, LoginRequest, RegisterRequest } from '../types'

import { navigationConfig } from '@/config/navigation.config'

export const register = async (data: RegisterRequest) =>
	await api.post<AuthResponse>(navigationConfig.register, data).then(res => {
		if (res.data.accessToken) saveToken(res.data.accessToken)

		return res.data
	})

export const login = async (data: LoginRequest) =>
	await api.post<AuthResponse>(navigationConfig.login, data).then(res => {
		if (res.data.accessToken) saveToken(res.data.accessToken)

		return res.data
	})

export const refresh = async () =>
	await api.post<AuthResponse>('/auth/refresh').then(res => {
		if (res.data.accessToken) saveToken(res.data.accessToken)

		return res.data
	})
