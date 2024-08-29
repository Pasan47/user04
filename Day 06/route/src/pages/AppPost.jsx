import React from 'react'
import { useParams } from 'react-router-dom'

const AppPost = () => {
  const {param} = useParams();
  return (
    <div>
       <p className="text-lg text-gray-700">
        New App: <strong>{param}</strong>
      </p>
      
    </div>
  )
}

export default AppPost
