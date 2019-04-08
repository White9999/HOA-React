import React from 'react';
import '@/styles/components/home/city-resources/city-resources.scss';
import cityLogo from '@/img/city resources.jpeg'

class News extends React.Component {
    render() {
        return (
            <div className="CityResources">
                <h2>Cupertino City Resources</h2>
                <div className="cityLogo"><img src={cityLogo} alt="cityLogo" /></div>
                <div className="content-1">
                    <p className="city_resources">De Anza Oaks is located in the city of Cupertino in Santa fClara County. This city is home to Apple Headquarters, De Anza College, and a wide variety of businesses and great public schools. Cupertino has a population of 64,000 people within 13 square miles. It is 42 miles south of San Francisco and is on the western side of Silicon Valley, next to the Santa Cruz Mountains.</p>
                    <p className="help_p">Helpful addresses:</p>
                    <ul className="addresses">
                        <li>Cupertino city hall: 10300 Torre Avenue</li>
                        <li>Cupertino public library: 10800 Torre Avenue, across the plaza from City Hall</li>
                        <li>Cupertino post office: 21701 Stevens Creek Blvd.</li>
                        <li>Santa Clara County Sheriff’s Office: 1601 S. De Anza Blvd., Suite #148</li>
                    </ul>
                    <p className="help_p">Here are some links to help you learn more about our city resources:</p>
                    <ul className="addresses">
                        <li>Elementary and Middle Schools are part of the Cupertino Union School District. There are 19 elementary schools and 4 middle schools within the district:
                            <a href="https://www.cusdk8.org/">https://www.cusdk8.org/</a>
                        </li>
                        <li>High Schools are part of the Fremont Union High School District:
                            <a href="https://www.fuhsd.org/">https://www.fuhsd.org/</a>
                        </li>
                        <li>
                            Cupertino is home to De Anza College, a 112-acre community college that serves over 25,000 students each year. De Anza is ranked among the top 3 community colleges in the United States for the number of Associate in Arts or Associate in Science degrees awarded:
                        <a href="http://deanza.edu/">http://deanza.edu/</a>
                        </li>
                    </ul>
                    <p className="help_p">Which schools do De Anza Oaks residents attend?</p>
                    <ul className="addresses">
                        <li>Welcome letter from the City Manager of Cupertino:
                            <a href="https://www.cupertino.org/home/showdocument?id=8620">https://www.cupertino.org/home/showdocument?id=8620</a>
                        </li>
                        <li>City of Cupertino website for residents:
                            <a href="https://www.cupertino.org/residents">https://www.cupertino.org/residents</a>
                        </li>
                        <li>Things to see and do:
                            <a href="https://www.cupertino.org/visitors/visiting-cupertino/what-to-see">https://www.cupertino.org/visitors/visiting-cupertino/what-to-see</a>
                        </li>
                        <li>History of Cupertino:
                            <a href="https://www.cupertino.org/our-city/about-cupertino/history">https://www.cupertino.org/our-city/about-cupertino/history</a>
                        </li>
                    </ul>
                    <p className="help_p">Utilities:</p>
                    <ul className="addresses">
                        <li>Residential Garbage Service:
                            <a href="https://www.cupertino.org/our-city/departments/environment-sustainability/waste">https://www.cupertino.org/our-city/departments/environment-sustainability/waste</a>
                        </li>
                        <li>San Jose Water Company:
                            <a href="https://www.sjwater.com/">https://www.sjwater.com/</a>
                        </li>
                        <li>California Water Service Company:
                            <a href="https://www.calwater.com/">https://www.calwater.com/</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default News