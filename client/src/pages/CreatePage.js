import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import {useHistory} from 'react-router-dom'

export const CreatePage = () => {
    const history =  useHistory()
    const auth =  useContext(AuthContext)
    const {request} = useHttp()
    const [note, setNote] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    })

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/note/generate', 'POST', { text: note}, {
                    Authorization: 'Bearer ' + auth.token    
                })
                history.push('/detail/' + data.note._id)
            } catch (e) {}
        }
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input 
                    placeholder="Заметка" 
                    id="note" 
                    type="text"
                    value = {note}
                    onChange= {e => setNote(e.target.value)}
                    onKeyPress={pressHandler}
                    />
                    <label htmlFor="note">Введите текст</label>
                </div>
            </div>
        </div>
    )
}