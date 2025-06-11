import React from 'react'
import Banner from '../components/Banner'
import { TopPerformer } from '../components/TopPerformer'
import { AboutInstitution } from '../components/AboutInstitution'
import { TopPlacements } from '../components/TopPlacements'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-8"> {/* Added spacing */}
        <TopPerformer />
      </div>
      <div className="mt-8"> {/* Added spacing */}
        <AboutInstitution />
      </div>
      <div className="mt-8"> {/* Added spacing */}
        <TopPlacements/>
      </div>
    </div>
  )
}

export default Home