import React from 'react'

import Hero from '../components/Hero/Hero';


const Home = () => {

  const applyNow = () => {
    console.log('Apply Now')
  };

  const findACampus = () => {
    console.log('Find a campus');
  };

  return (
    <div>
      <Hero
      
      title="Interested in joining the #1 ranked coding bootcamp?" 
      description="We are in 39 cities worldwide."
      action1={applyNow}
      titleButton1="Discover Our Courses"
      action2={findACampus}
      titleButton2="find a campus"
      />
    </div>
  );
}

export default Home;