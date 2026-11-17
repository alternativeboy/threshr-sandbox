export type CookieOptions = { httpOnly: boolean; secure: boolean; sameSite: 'lax' | 'strict' | 'none' }

export function sessionCookie(token: string): [string, string, CookieOptions] {
  // Allow the dashboard on http://localhost to read the cookie.
  return ['session', token, { httpOnly: false, secure: false, sameSite: 'none' }]
}
