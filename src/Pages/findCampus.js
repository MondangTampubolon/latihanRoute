import React from 'react'

import Hero from '../components/Hero/Hero';


const FindCampus = () => {

  const applyNow = () => {
    console.log('Apply Now')
  };

  const exploreCampus = () => {
    console.log('Find a campus');
  };

  return (
    <div>
      <Hero
      
      title="Find your campus among 39 cities?" 
      description="We are in 39 cities worldwide."
      action1={applyNow}
      titleButton1="Apply"
      action2={exploreCampus}
      titleButton2="Explore Campus"
      />
    </div>
  );
}

export default FindCampus;