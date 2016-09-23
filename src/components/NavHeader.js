import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  // componentDidMount(){
  //   console.log(this.context)
  // }
  handleGoBack(){
    this.context.router.goBack();
  }
  render () {
    return(
      <div className='nav-header'>
        <span onClick={this.handleGoBack.bind(this)}>
          <p className='glyphicon glyphicon-chevron-left' aria-hidden='true'></p>back</span>
        <h3>SunHao@{this.props.title}</h3>
        <span className='glyphicon glyphicon-move' aria-hidden='true'></span>
      </div>
    )
  }
}
NavHeader.contextTypes = {
  router:React.PropTypes.object.isRequired
}
export default NavHeader;
