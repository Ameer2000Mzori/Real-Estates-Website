import React from 'react'
import housesObjs from '../hooks/HomePage'

const HomePage = () => {
  // eslint-disable-next-line

  return (
    <div className="flex flex-row  h-[100dvh] text-center items-center justify-center bg-slate-600">
      <ul className=" flex flex-row text-center items-center justify-center gap-4 w-[40%] h-[600px] flex-wrap">
        {housesObjs.map((house) => (
          <li className="w-[250px] h-[250px] bg-white" key={house.id}>
            <p>${house.price}</p>
          </li>
        ))}
      </ul>
      <div>
        <li className="w-[650px] h-[500px] bg-white">ss</li>
      </div>
    </div>
  )
}
export default HomePage
