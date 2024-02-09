import React from 'react'
import housesObjs from '../hooks/HomePage'

const HomePage = () => {
  // eslint-disable-next-line

  return (
    <div className="flex flex-row  h-[100dvh] text-center items-center justify-center bg-slate-600">
      <ul className="house-list flex flex-row text-center items-center justify-center gap-4 w-[60%] h-[600px] flex-wrap">
        {housesObjs.map((house) => (
          <li
            className="w-[250px] h-[250px] bg-white flex flex-col text-center items-center justify-center"
            key={house.id}
          >
            <div className="h-[80%] w-[100%] bg-white flex flex-col text-center items-center justify-center border-b-2 border-gray-300">
              <h2 className="text-gray-400 text-md font-bold">250PX / 250PX</h2>
            </div>
            <div className="h-[20%] w-[100%] bg-slate-300 flex flex-col text-center items-center justify-evenly border-b-2 border-gray-300">
              <p>{house.price}</p>
              <button type="button">add to bookmarks</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default HomePage
