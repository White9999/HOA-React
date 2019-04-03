import React from 'react';
import HoaLogo from '../../img/Combined Shape.png';
import banner from '../../img/doorway.jpg'
import '../../styles/components/index.scss'

class Home extends React.Component {

  render() {
    return (
    <div className="HOA_Home">
      <div style={{height:'100px',display:'flex',width:'100%',fontSize:'23px',lineHeight:'100px',justifyContent:'space-around'}}>
      <div style={{fontWeight:'600'}}><img src={HoaLogo} />De Anza Oaks</div>
      <div style={{width:"200px",display:"flex",justifyContent:"space-around",fontSize:"18px",fontWeight:"600"}}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
      </div>
      <div><a href="#" style={{width:"200px",padding:"10px 70px",color:"white",background:"#393D44",fontSize:"14px"}}>Login</a></div>
      </div>
      <div style={{width:"100%",margin:"auto"}}><img src={banner} style={{margin:"0 auto",width:"100%"}} /></div>

    </div>
    )
  }
}

export default Home