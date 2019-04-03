import React from 'react';
import HoaLogo from '../img/Combined Shape.png';

class heand extends React.Component {

  render() {
    return (
      <div style={{height:'100px',display:'flex',width:'100%',fontSize:'23px',lineHeight:'100px',justifyContent:'space-around'}}>
      <div style={{fontWeight:'600'}}><img src={HoaLogo} /> &nbsp;De Anza Oaks</div>
      <div style={{width:"200px",display:"flex",justifyContent:"space-around",fontSize:"18px",fontWeight:"600"}}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
      </div>
      <div><a href="#" style={{width:"200px",padding:"10px 70px",color:"white",background:"#393D44",fontSize:"14px"}}>Login</a></div>
      </div>
    )
  }
}

export default heand