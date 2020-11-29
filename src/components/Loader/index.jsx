import React from 'react'

import './style.css'

const Loader = () => {
  return (
    <div className="loader-in-progress">
        <div className="loader-spinner" />
        <div className="loader-txt">Loading...</div>
    </div>
  )
}

export default Loader