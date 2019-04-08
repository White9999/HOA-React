import React from 'react';
import '@/styles/components/home/amenities/amenities.scss';
import Park from '@/img/mapa.gif'

class News extends React.Component {
    render() {
        return (
            <div className="amenities">
                <h2>Amenities in De Anza Oaks</h2>
                <p className="amenities_text">The residents of De Anza Oaks enjoy a variety of amenities. Here are some of the reasons we love living in our community:</p>
                {/* 1 */}
                <div className="amenities_title">Gated Community</div>
                <div className="amenities_image"><img src={Park} alt="park" /></div>
                <div className="amenities_content_text"><li>Residents live in a gated community and every home has an entry code at the gate.</li></div>
                <div className="amenities_content_text"><li>The front gate provides our residents and children with a safe environment with no solicitors.</li></div>
                {/* 2 */}
                <div className="amenities_title">Junior Olympic Pool</div>
                <div className="amenities_image"><img src={Park} alt="park" /></div>
                <div className="amenities_content_text"><li>De Anza Oaks has a heated 25 yard pool and a heated children's pool available for the enjoyment of the homeowners and their tenants.</li></div>
                <div className="amenities_content_text"><li>Admittance to the pool is with a key card and lot identification tag only.</li></div>
                {/* 3 */}
                <div className="amenities_title">The Clubhouse</div>
                <div className="amenities_image"><img src={Park} alt="park" /></div>
                <div className="amenities_content_text"><li>The clubhouse has a kitchen, formal area, electric fireplace and two bathrooms and deck.</li></div>
                <div className="amenities_content_text"><li>The clubhouse can seat a maximum of 72 people as established by the fire department.</li></div>
                {/* 4 */}
                <div className="amenities_title">Children’s playground</div>
                <div className="amenities_image"><img src={Park} alt="park" /></div>
                <div className="amenities_content_text"><li>Children enjoy the outdoor playground year-round. The playground has two slides and monkey bars.</li></div>
                {/* 5 */}
                <div className="amenities_title">Green Fields</div>
                <div className="amenities_image"><img src={Park} alt="park" /></div>
                <div className="amenities_content_text"><li>There are two large green fields in the community that are commonly used by residents for sports, exercise, fun, and events. Kids often use the fields for football, frisbee and other forms of play.</li></div>
                <div className="amenities_content_text"><li>Many residents will walk their pets along the community’s many walking paths.</li></div>

            </div>
        )
    }
}

export default News