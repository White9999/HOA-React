import React from 'react';
import banner from '@/img/doorway.jpg';
import '@/styles/components/home/index.scss';
import { Icon, Calendar, Carousel } from 'antd';
import 'antd/dist/antd.css';
import content1 from '@/img/tu1.jpg';
import content2 from '@/img/tu2.jpg';
import content3 from '@/img/tu3.jpg';
import content4 from '@/img/tu4.jpg';
import thirdcontent from '@/img/club2.gif';
import dao5 from '@/img/timg (2).jpg'


class Home extends React.Component {
  render() {
    return (
      <div className="HOA_Home">
        {/* <Heand /> */}
        <div className="Home_banner"><img className="banner_img" src={banner} /></div>
        <div className="content_left">
          <div className="content_left_title">
            <p>WHAT's NEW AT DE　ANZA OAKS</p>
            <ul>
              <li><a href="#">New Announcements<span>(2)</span></a></li>
              <li><a href="#">Upcoming Events<span>(9)</span></a></li>
              <li><a href="#">Recently Added Events<span>(7)</span></a></li>
            </ul>
          </div>
          <div className="content_right">
            <a href="#">
              <Icon type="smile" style={{ fontSize: '40px' }} /><p>Activities</p>
            </a>
            <a href="#">
              <Icon type="global" style={{ fontSize: '40px' }} /><p>News</p>
            </a>
            <a href="#">
              <Icon type="dot-chart" style={{ fontSize: '40px' }} /><p>Resources</p>
            </a>
            <a href="#">
              <Icon type="shop" style={{ fontSize: '40px' }} /><p>Amenities</p>
            </a>
            <a href="#">
              <Icon type="bank" style={{ fontSize: '40px' }} /><p>City Resources</p>
            </a>
          </div>
        </div>
        <div className="content2">
          <div className="content2_left">
            <p className="content_title">Amenities</p>
            <Carousel autoplay className="carousel">
              <div><img src={content1} /></div>
              <div><img src={content2} /></div>
              <div><img src={content3} /></div>
              <div><img src={content4} /></div>
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
                    <p>Clubhouse Booking (Confirmed) GS<a>more</a></p>
                  </li>
                  <li>
                    <p>February 10th,2019</p>
                    <p>Clubhouse Booking (Confirmed) GS<a>more</a></p>
                  </li>
                  <li>
                    <p>February 10th,2019</p>
                    <p>Clubhouse Booking (Confirmed) GS<a>more</a></p>
                  </li>
                  <li>
                    <p>February 10th,2019</p>
                    <p>Clubhouse Booking (Confirmed) GS<a>more</a></p>
                  </li>
                  <li>
                    <p>February 10th,2019</p>
                    <p>Clubhouse Booking (Confirmed) GS<a>more</a></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="third_content">
          <img src={thirdcontent} />
          <a className="third_content_a">Click Here To Book The Clubhouse</a>
        </div>
        <div className="fore_content">
          <img src={dao5} />
        </div>
      </div>
    )
  }
}

export default Home