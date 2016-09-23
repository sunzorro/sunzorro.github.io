import React, { PropTypes } from 'react'
import {Link} from 'react-router';
class BlogCard extends React.Component {
  componentWillReceiveProps(xx){
    console.log(xx);
  }
  render () {
    let styles = {
      root:{
        width:'96%',
        margin:'0 auto',
        marginBottom:'30px',
        boxShadow:'0 1px 5px rbga(0,0,0,0.2),0 1px 5px rgba(0,0,0,0.4)'
      },
      index:{
       backgroundColor:'#00bcd4',
       height:'80px',
       textAlign:'center',
       borderRadius: '10px 10px 0 0',
       paddingTop:'10px'
     },
      num:{
      lineHeight:'60px',
      width:'60px',
      height:'60px',
      borderRadius:'50%',
      border: '2px solid #fff',
      display:'block',
      fontSize:'20px',
      margin:'0px auto',
      color:'#fff'
    },
      biaoti:{
        marginTop:'20px',
        fontSize:'24px'
      },
      neirong:{
        marginBottom:'10px',
        fontSize:'16px'
      },
      yuedu:{
        padding:'6px 12px',
        borderRadius:'5px',
        color:'#FF4081',
        fontSize:'12px',
        border:'1px solid #FF4081',
        textAlign:'center',
      }
    }
     let address = `item/${this.props.url}`;
    return(
      <div style={styles.root}>
        <div style={styles.index}><span style={styles.num}>{this.props.index}</span></div>
        <div>
          <p style={styles.biaoti}>{this.props.biaoti}</p>
          <p style={styles.neirong}>{this.props.neirong}</p>
          <Link to={address} style={styles.yuedu} className='yuedu'>阅读更多</Link>
        </div>
      </div>
    )
  }
}
BlogCard.defaultProps={
  index:1,
  biaoti:'这里是标题',
  neirong:'这里是介绍'
}
BlogCard.propTypes = {
  index: PropTypes.number.isRequired,
  biaoti: PropTypes.string.isRequired,
  neirong: PropTypes.string.isRequired
};

export default BlogCard;
