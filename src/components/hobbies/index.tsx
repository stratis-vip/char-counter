import React, { useState, useEffect } from 'react'
import './style.css'

const isReady = (r: boolean): string => {
  return r ? 'green' : 'red'
}

const Hobbies = () => {
  const [hobbies, setHobbies] = useState<string[] | undefined>(undefined)
  const [newHobby, setNewHobby] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [ready, setReady] = useState<boolean>(false)
  const limit = 20
  // const limitUp = 20

  useEffect(() => {
    if (!hobbies) {
      const a = localStorage.getItem('hobbies')
      if (!a) {
        localStorage.setItem('hobbies', JSON.stringify([]))
      } else {
        return setHobbies(JSON.parse(a).sort())
      }
      setHobbies([])
    }
  }, [hobbies])

  const createSelect = () => {
    if (!hobbies) {
      return null
    } else {
      if (hobbies.length === 0) {
        return null
      } else {
        return hobbies.map((hobby, idx) => <option key={idx}>{hobby}</option>)
      }
    }
  }

  return (
    <div>
      <h2>Hobbies</h2>
      <div className="hob">
        <div className="left">
          {hobbies && hobbies[0] && (
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                // const box:HTMLTextAreaElement|null = document.querySelector('#box')

                // if (box){
                const add = text === '' ? '' : ', '
                const nT = text + add + e.currentTarget.value
                setText(nT)
                if (nT.length >= limit) {
                  setReady(true)
                }
                // }
              }}
            >
              {createSelect()}
            </select>
          )}
          <input
            value={newHobby}
            onChange={e => {
              setNewHobby(e.target.value)
            }}
          />
          <button
            onClick={() => {
              if (hobbies && newHobby.length > 0) {
                if (hobbies.includes(newHobby)) {
                  alert('exists')
                } else {
                  const n = [...hobbies, newHobby].sort()
                  
                  localStorage.setItem('hobbies', JSON.stringify(n))
                  setHobbies(undefined)
                  setNewHobby('')
                }
              }
            }}
          >
            Πρόσθεση Χόμπι
          </button>
        </div>
        <textarea
          className={isReady(ready)}
          cols={40}
          rows={5}
          value={text}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            const t = e.target.value
            setText(t)
            if (t.length >= limit) {
              setReady(true)
            } else {
              setReady(false)
            }
          }}
        />
      </div>
    </div>
  )
}

export default Hobbies
