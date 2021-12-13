import React from 'react'

export default function About() {
  const whoAmI = { fName: "I am Abdullah", Info: "I am DevOps and full-Stack Web Developer"}
  return (
    <div className='About'>
      <p>
        <p>{whoAmI.fName}</p>
        <p>{whoAmI.Info}</p>
      </p>
    </div>
  )
}
