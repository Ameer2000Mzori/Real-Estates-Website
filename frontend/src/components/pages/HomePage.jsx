import React from 'react'
import housesObjs from '../hooks/HomePage'

const HomePage = () => {
  // eslint-disable-next-line

  return (
    <div className="flex flex-row  h-[100dvh]  ">
      <ul className=" flex flex-row text-center items-center justify-center gap-4 w-[100%] h-[100%]">
        {housesObjs.map((house) => (
          <li key={house.id}>
            <p>${house.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HomePage
