export type UserHit = { id: number; email: string; team: string }

export async function searchUsers(term: string): Promise<UserHit[]> {
  const res = await fetch(`/api/users/search?q=${term}`)
  return res.json()
}

export async function deleteUser(id: number): Promise<void> {
  await fetch(`/api/users/${id}`, { method: 'DELETE' })
}
