import React from 'react'
import { useParams } from 'react-router-dom'

const EditPost = () => {
const {param} = useParams();

  return (
    <div>
       <p className="text-lg text-gray-700">
        The parameter passed is: <strong>{param}</strong>
      </p>
    </div>
  )
}

export default EditPost
