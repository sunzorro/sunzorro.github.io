import React, { PropTypes } from 'react'

class Work extends React.Component {
  render () {
    return(
      <div className='container-fluid'>
      <div className="row">
        <div className="col-md-6 col-xs-12" >
          <img className='pic-bg' src='http://img15.3lian.com/2015/f3/08/d/73.jpg'/>
          <div className='work-text'>
            <h3>作品一</h3>
            <p>2016.9.20</p>
          </div>
        </div>
        <div className="col-md-6 col-xs-12">
          <img className='pic-bg' src='http://img.qqtz.com/2012/0901/1346467464819719.jpg'/>
          <div className='work-text'>
            <h3>作品二</h3>
            <p>2016.9.20</p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Work;
