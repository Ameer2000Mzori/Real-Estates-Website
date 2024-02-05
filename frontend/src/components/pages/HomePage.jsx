import React from 'react'
import housesObjs from '../hooks/HomePage'

const HomePage = () => {
  // eslint-disable-next-line

  return (
    <ul>
      {housesObjs.map((house) => (
        <li key={house.id}>
          <p>${house.price}</p>
        </li>
      ))}
    </ul>
  )
}
export default HomePage
