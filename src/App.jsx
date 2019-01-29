import React, { useState } from 'react'
import './App.css'

const frames = [
  { id: '1', title: 'Slides', url: 'https://docs.google.com/presentation/d/1GJV5dI1KxTtY4tgXPgmWh-jlujqPvfI_2bLltTISnKw/embed' },
  { id: '2', title: 'Shell', url: 'http://localhost:8080/' },
]

const App = () => {
  const [curId, setCurId] = useState('1')

  return (
    <div className="App">
      {
        frames
          .map(({ id, url, title }) => (
            <div key={id} className={`App-frame ${id === curId ? 'App-fullscreen' : ''}`}>
              <div onClick={() => setCurId(id)} title={title} />
              <iframe src={url} title={title} />
            </div>
          ))
      }
    </div>
  )
}

export default App
