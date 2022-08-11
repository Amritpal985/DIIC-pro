import React from 'react'
import AWrapper from './AWrapper'
import Back from './Back'
import TeamCard from './TeamCard'
import "./Team.css"
import "./About.css"
const Team = () => {
  return (
    <>
    <Back title="team"/>
    <section className="team padding">
        <div className="container grid">
            <TeamCard/>
        </div>
    </section>
    <AWrapper/>
    </>
  )
}

export default Team