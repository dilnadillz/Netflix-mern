import React from 'react'
import './Player.css'
import backarrow_icon from '../../assets/backarrow_icon.png'

const Player = () => {
  return (
    <div className='player'>
      <img src={backarrow_icon} alt=''/>
      <iframe width='90%' height='90%' src='https://www.youtube.com/watch?v=S9bCLPwzSC0&list=RDS9bCLPwzSC0&start_radio=1&rv=hCqscA8DFYE'
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
