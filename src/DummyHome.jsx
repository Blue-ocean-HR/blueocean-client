import React from 'react'
import {Link} from 'react-router-dom'

const DummyHome = () => {
  return (
    <div>Home
      <Link to={`/${1234}`}>Link to Full recipe</Link>
    </div>
  )
}

export default DummyHome