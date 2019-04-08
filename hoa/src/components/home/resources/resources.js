import React from 'react';
import '@/styles/components/home/resources/resources.scss'
import CalendarLogo from '@/img/tu1.jpg';
import FacilitiesLogo from '@/img/tu2.jpg';
import PhotoLogo from '@/img/tu3.jpg';

class Activities extends React.Component {
    render() {
        return (
            <div className="content_resources">
                <div className="content_div">
                    <img src={CalendarLogo} alt="CalendarLogo" />
                    <p>Address Book</p>
                </div>
                <div className="content_div">
                    <img src={FacilitiesLogo} alt="FacilitiesLogo" />
                    <p>Board/Committee</p>
                </div>
                <div className="content_div">
                    <img src={PhotoLogo} alt="PhotoLogo" />
                    <p>eForms</p>
                </div>
                <div className="content_div">
                    <img src={CalendarLogo} alt="CalendarLogo" />
                    <p>FAQs</p>
                </div>
                <div className="content_div">
                    <img src={CalendarLogo} alt="CalendarLogo" />
                    <p>Docs</p>
                </div>
            </div>
        )
    }
}

export default Activities