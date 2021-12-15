import React from 'react'

export default function About() {
  const whoAmI = { fName: "I am Abdullah", Info: "فقلت استغفروا ربكم إنه كان غفارا "}
  return (
    <div className='About'>
      <p>
        <p>{whoAmI.fName}</p>
        <p>{whoAmI.Info}</p>
      </p>
    </div>
  )
}
