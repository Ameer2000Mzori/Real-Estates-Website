import React from 'react'
import housesObjs from '../hooks/HomePage'

const HomePage = () => {
  // eslint-disable-next-line

  return (
    <div className="flex flex-row  h-[100dvh] text-center items-center justify-center ">
      <ul className=" flex flex-row text-center items-center justify-center gap-4 w-[80%] h-[100%] flex-wrap">
        {housesObjs.map((house) => (
          <li className="w-[350px] h-[250px]" key={house.id}>
            <p>${house.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HomePage
