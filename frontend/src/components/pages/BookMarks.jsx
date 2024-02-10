import React, { useState, useEffect } from 'react'
import bgImage from '../assets/bg-img.png'

const BookMarks = () => {
  const [savedBookMarks, setSavedBookMarks] = useState([])

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('savedBookMarks')) || []
    setSavedBookMarks(bookmarks)
  }, [])

  // delete function

  const deleteHouse = (house) => {
    console.log('the house clicked:', house)

    const newBookMarks = savedBookMarks.filter((book) => {
      return book.id !== house.id
    })

    setSavedBookMarks(newBookMarks)
    localStorage.setItem('savedBookMarks', JSON.stringify(newBookMarks))
    console.log('this is after delete', newBookMarks)
  }

  return (
    <>
      <img
        className="w-[100vw] h-[100vh] object-cover absolute -z-10"
        src={bgImage}
        alt=""
      />
      <div className="flex flex-row h-[100vh] text-center items-center justify-center bg-slate-600 bg-opacity-25">
        <ul className="house-list flex flex-row text-center items-center justify-center gap-4 w-[60%] h-[600px] flex-wrap overflow-auto">
          {savedBookMarks.map((house) => (
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

                <button
                  onClick={() => {
                    deleteHouse(house)
                  }}
                  className="w-[100px] h-[30px] rounded-sm bg-slate-400 hover:bg-slate-500 active:bg-slate-200"
                  type="button"
                >
                  DELETE
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BookMarks
