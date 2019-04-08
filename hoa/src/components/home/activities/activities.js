import React from 'react';
import '@/styles/components/home/activities/activities.scss'
import CalendarLogo from '@/img/tu1.jpg';
import FacilitiesLogo from '@/img/tu2.jpg';
import PhotoLogo from '@/img/tu3.jpg';

class Activities extends React.Component {
    render() {
        return (
            <div className="content_activities">
                <div className="content_div">
                    <img src={CalendarLogo} alt="CalendarLogo" />
                    <p>Events Calendar</p>
                </div>
                <div className="content_div">
                    <img src={FacilitiesLogo} alt="FacilitiesLogo" />
                    <p>Facilities</p>
                </div>
                <div className="content_div">
                    <img src={PhotoLogo} alt="PhotoLogo" />
                    <p>Photo Albums</p>
                </div>
            </div>
        )
    }
}

export default Activities