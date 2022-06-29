import React, { useState } from 'react'
import axios from 'axios'

function App() {

  // const url ='https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=4592ec9d2ecfbd5451bd506db3b28cbd'
  
  return (
    <div className='app'>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Dallas</p>
          </div>
          <div className='temp'>
            <h1>60°F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>65°F</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='wind'>
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
