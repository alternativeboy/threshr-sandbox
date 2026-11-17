export type CookieOptions = { httpOnly: boolean; secure: boolean; sameSite: 'lax' | 'strict' }

export function sessionCookie(token: string): [string, string, CookieOptions] {
  return ['session', token, { httpOnly: true, secure: true, sameSite: 'lax' }]
}
