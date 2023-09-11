import React from 'react'

const ErrorComp = () => {
  return (
    <div className='py-10 px-6 mx-auto  bg-yellow-500 w-96'>
        <h2 className='text-2xl'>Unexpected Application Error</h2>
        <p>-Please Check your Network</p>
        <p>-Check if the url is valid</p>
        <p>-Try reloading the applicaiotn</p>
    </div>
  )
}

export default ErrorComp