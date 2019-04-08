import React from 'react';
import '@/styles/components/home/news/news.scss'
import CalendarLogo from '@/img/tu1.jpg';
import FacilitiesLogo from '@/img/tu2.jpg';
import PhotoLogo from '@/img/tu3.jpg';

class News extends React.Component {
    render() {
        return (
            <div className="content_news">
                <div className="content_div">
                    <img src={CalendarLogo} alt="CalendarLogo" />
                    <p>Volunteer Needs</p>
                </div>
                <div className="content_div">
                    <img src={FacilitiesLogo} alt="FacilitiesLogo" />
                    <p>Announcements</p>
                </div>
                <div className="content_div">
                    <img src={PhotoLogo} alt="PhotoLogo" />
                    <p>Email Bulletins</p>
                </div>
            </div>
        )
    }
}

export default News