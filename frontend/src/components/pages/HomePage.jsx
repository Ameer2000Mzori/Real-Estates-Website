import React from 'react'
import housesObjs from '../hooks/HomePage'
import bgImage from '../assets/bg-img.png'

const HomePage = () => {
  // eslint-disable-next-line

  const addToFavos = () => {}

  return (
    <>
      <img
        className="w-[100dvw] h-[100dvh]  object-cover absolute -z-10"
        src={bgImage}
        alt=""
      />
      <div className="flex flex-row  h-[100dvh] text-center items-center justify-center bg-slate-600 bg-opacity-25">
        <ul className="house-list flex flex-row text-center items-center justify-center gap-4 w-[60%] h-[600px] flex-wrap overflow-auto">
          {housesObjs.map((house) => (
            <li
              className="w-[250px] h-[250px] bg-white flex flex-col text-center items-center justify-center"
              key={house.id}
            >
              <div className="h-[80%] w-[100%] bg-white flex flex-col text-center items-center justify-center border-b-2 border-gray-300">
                <h2 className="text-gray-400 text-md font-bold">
                  250PX / 250PX
                </h2>
              </div>
              <div className="h-[20%] w-[100%] bg-slate-300 flex flex-row  text-center items-center justify-evenly border-b-2 border-gray-300">
                <p>{house.price}</p>
                <button
                  onClick={() => {
                    addToFavos(house)
                  }}
                  className="w-[100px] h-[30px] rounded-sm bg-slate-400 hover:bg-slate-500 active:bg-slate-200"
                  type="button"
                >
                  bookmarks{' '}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default HomePage
