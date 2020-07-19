import React, { useState } from 'react'
import './style.css'

interface lProps {
  title: string
  ready: boolean
  limit: number
  limitUp?: number
  id?: string
}

const isReady = (r: boolean): string => {
  return r ? 'green' : 'red'
}

const Box: React.FC<lProps> = props => {
  const [text, setText] = useState<string>("")
  const [ready, setReady] = useState<boolean>(props.ready)
  
  const { title, limit, limitUp,id } = props
  
  
  return (
    <div className="box">
      <h2>{title}</h2>
      <textarea
        id={id && "box"}
        className={isReady(ready)}
        cols={60}
        rows={5}
        value={text}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          const t = e.target.value
          setText(t)
          if (t.length >= limit) {
            if (limitUp) {
              if (t.length < limitUp) {
                setReady(true)
              } else {
                setReady(false)
              }
            }else {
              setReady(true)
            }
          } else {
            setReady(false)
          }
        }}
      />
      <input value={text.length} readOnly />
    </div>
  )
}

export default Box
