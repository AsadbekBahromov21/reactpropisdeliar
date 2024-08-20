import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
  return (
    <div>
        <h2 className='text-3xl'>Child</h2>
        <GrandChild/>
    </div>
  )
}

export default Child