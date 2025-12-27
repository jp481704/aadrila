import React, { useEffect } from 'react'
import VisionMission from '../components/VisionMission'
import TeamSlider from '../components/TeamSlider'

const About = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
<VisionMission/>
<TeamSlider/>
    </div>
  )
}

export default About