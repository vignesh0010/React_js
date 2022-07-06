import React from 'react'

export default function Person({person,index}) {
  return (
    <div>
        <h1>{index}  {person.id}</h1>
        <h1>{index}  {person.name}</h1>
        <h1>{index}  {person.skill}</h1>
    </div>
  )
}
