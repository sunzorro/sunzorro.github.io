import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import LeftNav from './components/LeftNav';

class App extends React.Component {
  getChildContext() {
   return {muiTheme: getMuiTheme()};
 }
  constructor(){
    super();
    this.state={
      showNav:false,
      title:'Home'
    }
  }
  resetWidth(){
    this.setState({showNav:window.innerWidth >760 ? true : false});
  }
  componentDidMount(){
    this.resetWidth();
    window.onresize = this.resetWidth.bind(this)
  }

  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title:this.context.router.isActive('/',true)?'Home' :
            this.context.router.isActive('/blog')?'Blog' :
            this.context.router.isActive('/work')?'Work' :
            this.context.router.isActive('/about')?'About' : 'Item'
    })
  }
  render () {
    return(
      <div className='content-wrap'>
        {this.state.showNav ? <LeftNav title={this.state.title} /> : <NavHeader title={this.state.title} />}
        <div className='content-main'>

          {this.props.children}
        </div>
        {this.state.showNav ? '' : <NavFooter />}
      </div>
    )
  }
}
App.contextTypes = {
  router:React.PropTypes.object.isRequired
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
