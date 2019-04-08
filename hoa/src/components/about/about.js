import React from 'react';
import '@/styles/components/about/index.scss';
import thirdcontent from '@/img/club2.gif';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="about">
          <p className="title">
            Welcome to our Community!
             </p>
          <div className="content">
            <p>De Anza Oaks is a gated community of town-homes nestled in the Cupertino foothills among beautiful surroundings. With abundant trees, rich landscaping, pleasant pathways, and a quiet atmosphere, it's a serene home here for us away from the bustle of the Silicon Valley.</p>
            <p>Welcome to our community web site. Feel free to explore the features available to the public on this site. If you are a resident of our community, click here to log into the private side of the web site. If you have not been notified of your login name and password, please complete the Login Request Form.</p>
            <p>For information concerning the Association, please contact Grayson Community Management: ph: 888-277-5580, e-mail: helpdesk@graysoncm.com, website: www.graysoncm.com.</p>
            <p className="title2">Welcome home!</p>
            <img src={thirdcontent} alt="thirdcontent" />
          </div>
        </div>
      </div>
    )
  }
}

export default Home