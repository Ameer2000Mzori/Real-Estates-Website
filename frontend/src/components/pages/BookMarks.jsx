import React, { useState, useEffect } from 'react'
import { bookmarks } from './HomePage'
import bgImage from '../assets/bg-img.png'

const BookMarks = () => {
  console.log('booksmarks insice here', bookmarks)

  return (
    <>
      <img
        className="w-[100vw] h-[100vh] object-cover absolute -z-10"
        src={bgImage}
        alt=""
      />
      <div className="flex flex-row h-[100vh] text-center items-center justify-center bg-slate-600 bg-opacity-25">
        <ul className="house-list flex flex-row text-center items-center justify-center gap-4 w-[60%] h-[600px] flex-wrap overflow-auto">
          {bookmarks.map((house) => (
            <li
              className="w-[250px] h-[250px] bg-white flex flex-col text-center items-center justify-center"
              key={house.id}
            >
              <div className="h-[80%] w-[100%] bg-white flex flex-col text-center items-center justify-center border-b-2 border-gray-300">
                <h2 className="text-gray-400 text-md font-bold">
                  250PX / 250PX
                </h2>
              </div>
              <div className="h-[20%] w-[100%] bg-slate-300 flex flex-row text-center items-center justify-evenly border-b-2 border-gray-300">
                <p className="">${house.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BookMarks
