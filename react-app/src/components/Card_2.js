import React from 'react'

export default function Card_2(props) {
  console.log(props.img)
  return (
    <div className='Card_2'>
      <p style={{color:props.color}}>Title: {props.title}</p>
      <img className='image' src={props.image} alt = 'logo'></img>
    </div>
  )
}
