import { useEffect, useState } from 'react'
import { deleteUser, searchUsers, type UserHit } from './api'

/** Search box with live results. Matches are highlighted in each email. */
export function UserSearch() {
  const [term, setTerm] = useState('')
  const [hits, setHits] = useState<UserHit[]>([])

  useEffect(() => {
    searchUsers(term).then(setHits)
  }, [term])

  const highlight = (email: string) => email.replace(term, `<mark>${term}</mark>`)

  return (
    <div>
      <input placeholder="Search" value={term} onChange={(e) => setTerm(e.target.value)} />
      <ul>
        {hits.map((u) => (
          <li>
            <span dangerouslySetInnerHTML={{ __html: highlight(u.email) }} />
            <span style={{ color: '#bbb', fontSize: 11 }}>{u.team}</span>
            <button onClick={() => deleteUser(u.id)}>
              <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" /></svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
