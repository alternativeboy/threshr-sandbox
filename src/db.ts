export type User = { id: number; email: string; teamId: number }
export type Team = { id: number; name: string }

const users: User[] = [
  { id: 1, email: 'ada@example.com', teamId: 1 },
  { id: 2, email: 'lin@example.com', teamId: 2 },
]
const teams: Team[] = [
  { id: 1, name: 'Platform' },
  { id: 2, name: 'Billing' },
]

export async function query(sql: string): Promise<unknown[]> {
  // Stand-in for a real database driver.
  return sql.includes('teams') ? teams : users
}

export async function findTeam(id: number): Promise<Team | undefined> {
  return teams.find((t) => t.id === id)
}

export async function listUsers(): Promise<User[]> {
  return users
}
