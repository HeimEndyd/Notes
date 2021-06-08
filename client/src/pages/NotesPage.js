import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Loader } from '../components/Loader'
import { NotesList } from '../components/NotesList'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'

export const NotesPage = () => {
  const [notes, setNotes] = useState([])
  const { loading, request } = useHttp()
  const { token } = useContext(AuthContext)

  const fetchNotes = useCallback(async () => {
    try {
      const fetched = await request('/api/note', 'GET', null, {
        Authorization: `Bearer ${token}`,
      })
      setNotes(fetched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  if (loading) {
    return <Loader />
  }
  return <>{!loading && <NotesList notes={notes} />}</>
}
