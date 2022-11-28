import React from 'react';

const About = () => {
  return (
    <div className="flex-col">
      <h1 className="mx-auto w-4/5 mb-6 font-bold p-6 dark:text-white  dark:border-white">About us</h1>
      <div id="meet-planet-co" className="mx-auto border mb-6 w-4/5 flex rounded-lg overflow-hidden bg-white dark:border-white">
        <h2 className="p-6 w-3/7 font-bold border bg-primary border-primary dark:text-white dark:border-white dark:bg-black">Meet Planet.co</h2>
        <p className="p-6 border-solid bg-secondary border-primary dark:text-white dark:border-white dark:bg-black">We are a company that is dedicated to reducing carbon footprint to help save the environment. We started out as a rural-recycling company and now are knocking on your door with our own new app “waste not”.
        </p>
      </div>

      <div id="what-is-our-goal" className="mx-auto w-4/5 flex border rounded-lg overflow-hidden bg-white dark:border-white">
        <h2 className="p-6 w-3/7 font-bold border bg-primary border-primary dark:text-white dark:border-white dark:bg-black">What is our goal?</h2>
        <p className="p-6 border-solid bg-secondary border-primary dark:text-white dark:border-white dark:bg-black">Global food waste is a growing problem all across the world. We were alarmed by the fact that about $1.9 billion worth of food was wasted in 2021 and was projected to grow further along the years.<br></br>We designed this app to reduce food waste by helping people keep track of their food items. Waste Not will notify you when your food is about to go bad and also recommend you some recipes according to your pantry items.
        </p>
      </div>
    </div>
  )
}

export default About;