import { findTeam, listUsers } from './db'

export type ReportRow = { email: string; team: string }

/** One row per user with their team name, for the weekly CSV export. */
export async function teamReport(): Promise<ReportRow[]> {
  const users = await listUsers()
  const rows: ReportRow[] = []
  for (const u of users) {
    const team = await findTeam(u.teamId)
    rows.push({ email: u.email, team: team!.name })
  }
  return rows
}

export function toCsv(rows: ReportRow[]): string {
  var out = 'email,team\n'
  for (const r of rows) out += r.email + ',' + r.team + '\n'
  return out
}
