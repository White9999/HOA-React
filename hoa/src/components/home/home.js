import React from 'react';
import banner from '@/img/doorway.jpg';
import '@/styles/components/home/index.scss';
import { Icon, Calendar, Carousel } from 'antd';
import content1 from '@/img/tu1.jpg';
import content2 from '@/img/tu2.jpg';
import content3 from '@/img/tu3.jpg';
import content4 from '@/img/tu4.jpg';
import thirdcontent from '@/img/club2.gif';
import dao5 from '@/img/timg (2).jpg';
import { Link } from 'react-router-dom';


class Home extends React.Component {
  render() {
    return (
      <div className="HOA_Home">
        {/* <Heand /> */}
        <div className="Home_banner"><img className="banner_img" src={banner} alt="banner" /></div>
        <div className="content_left">
          <div className="content_left_title">
            <p>WHAT's NEW AT DE　ANZA OAKS</p>
            <ul>
              <li><Link to="#">New Announcements<span>(2)</span></Link></li>
              <li><Link to="#">Upcoming Events<span>(9)</span></Link></li>
              <li><Link to="#">Recently Added Events<span>(7)</span></Link></li>
            </ul>
          </div>
          <div className="content_right">
            <Link to="/activities">
              <Icon type="smile" style={{ fontSize: '40px' }} /><p>Activities</p>
            </Link>
            <Link to="/news">
              <Icon type="global" style={{ fontSize: '40px' }} /><p>News</p>
            </Link>
            <Link to="/resources">
              <Icon type="dot-chart" style={{ fontSize: '40px' }} /><p>Resources</p>
            </Link>
            <Link to="/amenities">
              <Icon type="shop" style={{ fontSize: '40px' }} /><p>Amenities</p>
            </Link>
            <Link to="/city-resources">
              <Icon type="bank" style={{ fontSize: '40px' }} /><p>City Resources</p>
            </Link>
          </div>
        </div>
        <div className="content2">
          <div className="content2_left">
            <p className="content_title">Amenities</p>
            <Carousel autoplay className="carousel">
              <div><img src={content1} alt="content1" /></div>
              <div><img src={content2} alt="content2" /></div>
              <div><img src={content3} alt="content3" /></div>
              <div><img src={content4} alt="content4" /></div>
            </Carousel>
          </div>
          <div className="coontent2_right">
            <div className="calendar" style={{ borderRadius: 4 }}>
              <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
            </div>
            <div className="FF_Compatible">
              <div className="content2_right_list">
                <ul>
                  <li>
                    <p>February 10th,2019</p>
                    <p>Clubhouse Booking (Confirmed) GS<Link to="#">more</Link></p>
                  </li>
                  <li>
                    <p>February 10th,2019</p>
                    <p>Clubhouse Booking (Confirmed) GS<Link to="#">more</Link></p>
                  </li>
                  <li>
                    <p>February 10th,2019</p>
                    <p>Clubhouse Booking (Confirmed) GS<Link to="#">more</Link></p>
                  </li>
                  <li>
                    <p>February 10th,2019</p>
                    <p>Clubhouse Booking (Confirmed) GS<Link to="#">more</Link></p>
                  </li>
                  <li>
                    <p>February 10th,2019</p>
                    <p>Clubhouse Booking (Confirmed) GS<Link to="#">more</Link></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="third_content">
          <img src={thirdcontent} alt="thirdcontent" />
          <Link to="#" className="third_content_a">Click Here To Book The Clubhouse</Link>
        </div>
        <div className="fore_content">
          <img src={dao5} alt="map" />
        </div>
      </div>
    )
  }
}

export default Home