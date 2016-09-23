import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class LeftNav extends React.Component {
  render () {
    return(
      <div className='left-nav'>
          <h3>SunHao@{this.props.title}</h3>
          <Link to='/'  onlyActiveOnIndex={true}className='active'
            activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}>
            <p className='glyphicon glyphicon-home'></p>
            <span>Home</span>
          </Link>
          <Link to='/blog'className='active'
            activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}>
            <p className='glyphicon glyphicon-film'></p>
            <span>Blog</span>
          </Link>
          <Link to='work'className='active'
            activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}>
            <p className='glyphicon glyphicon-phone'></p>
            <span>Work</span>
            </Link>
          <Link to='about'className='active'
            activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}>
            <p className='glyphicon glyphicon-tree-conifer'></p>
            <span>About</span>
          </Link>

      </div>
    )
  }
}

export default LeftNav;
