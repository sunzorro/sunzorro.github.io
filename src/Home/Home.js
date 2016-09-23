import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    return(
      <div className= 'home-container'>
        <div className='home-cover'>
          <div className="home-item">
            <h2>I'M <span style={{color:'#0f0'}}>SUNHAO</span></h2>
            <p>WEB DEVELOPER</p>
            <button className='btn'><a href="https://github.com/sunzorro" style={{color:'#fff'}}>HIRE ME</a></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
