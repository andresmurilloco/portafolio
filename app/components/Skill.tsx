import React from 'react'

export interface Props{
  skill: []
}

const Skill = ({skill}:Props) => {

  return (
    <div>
      {skill}
    </div>
  )
}

export default Skill