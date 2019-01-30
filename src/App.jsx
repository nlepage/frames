import React, { useState } from 'react'
import Button from 'antd/lib/button'
import Dropdown from 'antd/lib/dropdown'
import './App.css'

const App = () => {
  const [showSlides, setShowSlides] = useState(true)
  const [showCode, setShowCode] = useState(false)
  const split = showSlides && showCode

  return (
    <div className="App">
      <div className="App-actions">
        <Dropdown
          overlay={(
            <div className="App-actions-overlay">
              <div className="App-actions-button">
                <Button
                  icon="desktop"
                  shape="circle-outline"
                  onClick={() => setShowSlides(!showSlides)}
                  ghost={!showSlides}
                />
              </div>
              <div className="App-actions-button">
                <Button
                  icon="code"
                  shape="circle-outline"
                  onClick={() => setShowCode(!showCode)}
                  ghost={!showCode}
                />
              </div>
            </div>
          )}
        >
          <div className="App-actions-hover" />
        </Dropdown>
      </div>

      <iframe
        src="https://docs.google.com/presentation/d/1GJV5dI1KxTtY4tgXPgmWh-jlujqPvfI_2bLltTISnKw/embed"
        style={{
          display: !showSlides && 'none',
          width: split ? '50vw' : '100vw',
        }}
        title="Slides"
      />

      <iframe
        src="http://localhost:8080"
        style={{
          display: !showCode && 'none',
          width: split ? '50vw' : '100vw',
        }}
        title="Code"
      />
    </div>
  )
}

export default App
