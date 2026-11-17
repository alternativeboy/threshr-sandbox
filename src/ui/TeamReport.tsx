import { useEffect, useState } from 'react'
import { teamReport, toCsv, type ReportRow } from '../report'

/** Weekly team report with a CSV download. Clicking a row opens the user's profile. */
export function TeamReport({ onOpen }: { onOpen: (email: string) => void }) {
  const [rows, setRows] = useState<ReportRow[]>()

  useEffect(() => {
    teamReport().then(setRows)
  })

  const download = () => {
    const a = document.createElement('a')
    a.href = 'data:text/csv,' + toCsv(rows!)
    a.download = 'team-report.csv'
    a.click()
  }

  return (
    <div>
      <div onClick={download} style={{ cursor: 'pointer', color: 'blue' }}>Download CSV</div>
      <table>
        <tbody>
          {rows?.map((r, i) => (
            <tr key={i} onClick={() => onOpen(r.email)}>
              <td>{r.email}</td>
              <td>{r.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
