import React, { PropTypes } from 'react'
import BlogCard from '../components/BlogCard';
import { getJson } from '../until/helpers';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
    .then( (recData) => {
       this.setState({
         data:recData.getJson,
         wait:false
       })
     });
  }

  render () {
    return(
      <div style={{width:'100%',marginTop:'20px'}}>
        {this.state.wait ? <p className='loadNei'><span className='glyphicon glyphicon-refresh'
          style={{animation:'mylove 1s infinite linear',fontSize:'50px'}}>
        </span>正在加载</p> : this.state.data.map((item,i) => <BlogCard {...item} key={i} />)}
      </div>
    )
  }
}

export default Blog;
