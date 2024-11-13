import React from 'react'
import TeamItems from '../components/common/TeamItems'

import team1 from '../../public/images/team1.png'
import team2 from '../../public/images/team2.png'
import team3 from '../../public/images/team3.png'
import team4 from '../../public/images/team4.png'
import CommonSectionHeading from './common/CommonSectionHeading'

function Team() {
 
 const TeamListData = [
   {
    name: "Asmat Ullah",
    job: "CEO",
    image: team1,
   },

    {
     name: "Muhammad Huzifa",
     job : "Project Manager",
     image: team2,
     
    },
    {
        name: "Fatima Sardar",
        job: "BDM",
        image: team3,
    },
    {
        name: "Amna Imran",
        job: "Marketing Head",
        image: team4,
    },
   
 ]

  return (
    // <div>
    <section className=' w-[100%] py-7 md:py-20' id='team'>
    <div>
     <CommonSectionHeading h4="Expert People" h2="Meet Our Professional Team Members" />
    </div>
     <div  className='flex w-[80%] md:gap-5 justify-center mx-auto flex-wrap'>
          {TeamListData.map((teamMember, index) => (
          <TeamItems key={index} name={teamMember.name} job={teamMember.job} image={teamMember.image}/>
        ))}
     </div>
    </section>
    // </div>
  )
}

export default Team
