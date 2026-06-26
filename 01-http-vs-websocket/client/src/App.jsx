import React from 'react'
import axios from 'axios'

const App = () => {
  const sendRequest = async () => {
    const response = await axios.get('http://localhost:5000/api/ping')
    console.log(response.data.message)
  }
  return (
    <div className='bg-mauve-800 flex flex-col justify-center items-center text-white h-screen'>
      <h1>HTTP REQUEST DEMO</h1>
      <button onClick={() => { sendRequest() }} className='bg-mauve-600 p-2 rounded m-2 hover:bg-mauve-500 transition ease-in'>PING</button>
    </div>
  )
}

export default App