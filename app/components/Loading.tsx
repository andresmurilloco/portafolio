import React from 'react'

const Loading = () => {
  return (
    <div className='loading-container'>
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
      <h2 className='loading-text'>Fetching projects...</h2>
      <p>I apologize. It takes around 5 minutes to fetch up the first time.</p>
    </div>
  )
}

export default Loading