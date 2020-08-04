import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import './Hero.css';
import Button from '../Button/Button';

const Hero = ({ title, description, action1, action2, titleButton1, titleButton2 }) => {
  return (
    <div className="wrapper-section-one">
      <div className="hero-section">
        <div><h1>{title}</h1></div>
          <div>
            <p>
              {description}
            </p>
          </div>
          <div className="wrapperButton">
            <div className="actionButton">
              <Button 
                text={titleButton1}
                primary
                type="button"
                onClick={action1}
              />
            </div>
            <div className="actionButton">
              <Button 
                text={titleButton2}
                secondary
                type="button"
                onClick={action2}
              />
              <Link to={"/findCampus"}></Link>
            </div>
          </div>               
      </div>
    </div>
  );
}

export default Hero;