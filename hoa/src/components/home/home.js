import React from 'react';
import banner from '../../img/doorway.jpg';
import '../../styles/components/index.scss';
import Heand from '../../common/heand'

class Home extends React.Component {

  render() {
    return (
    <div className="HOA_Home">
      <Heand />
      <div style={{width:"100%",margin:"auto"}}><img src={banner} style={{margin:"0 auto",width:"100%"}} /></div>
    </div>
    )
  }
}

export default Home