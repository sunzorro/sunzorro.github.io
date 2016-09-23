import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import marked from 'marked';
import hljs from 'highlight.js';
import {getMd} from '../until/helpers';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    let nameurl = this.props.params.url
    getMd(nameurl)
      .then((recData) => {
        this.setState({
          data:recData.getMd,
          wait:false
        })
    });
  }
  render () {
    marked.setOptions({
     highlight: function (code) {
       return hljs.highlightAuto(code).value;
     }
   })
   const style = {
    container: {
      position: 'relative',
    },
    refresh: {
      display: 'inline-block',
      position: 'relative',
    },
  };
    return(
      <div className="post-content">
        {this.state.wait ?
          <div style={style.container}>
            <RefreshIndicator size={50}
                              left={70}
                              top={0}
                              loadingColor={"#FF9800"}
                              status="loading"
                              style={style.refresh}/>
          </div> :
          <div dangerouslySetInnerHTML={{__html: marked(this.state.data)}} />}
      </div>
    )
  }
}

export default Item;
