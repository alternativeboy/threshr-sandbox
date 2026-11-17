import { query, type User } from './db'

/** Find users whose email matches the search box. */
export async function searchUsers(term: string): Promise<User[]> {
  const rows = await query(`select * from users where email like '%${term}%'`)
  return rows as User[]
}
