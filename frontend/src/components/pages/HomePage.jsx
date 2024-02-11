import React, { useState, useEffect } from 'react'
// import housesObjs from '../hooks/HomePage'
import bgImage from '../assets/bg-img.png'

// eslint-disable-next-line

const HomePage = () => {
  const [savedBookMarks, setSavedBookMarks] = useState([])
  const [housesObjs, setHousesObjs] = useState([])
  // fetching data from api
  const getData = async () => {
    try {
      const res = await fetch('/houses')
      const data = await res.json()
      console.log(data)
      setHousesObjs(data)
    } catch (error) {
      console.log(error)
    } finally {
      console.log('finished fetching data')
    }
  }
  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('savedBookMarks')) || []
    setSavedBookMarks(bookmarks)
  }, [])

  const addToFavos = (house) => {
    const newBookMarks = [...savedBookMarks, house]
    setSavedBookMarks(newBookMarks)
    localStorage.setItem('savedBookMarks', JSON.stringify(newBookMarks))
  }

  const isHouseAlreadySaved = (houseId) => {
    return savedBookMarks.some((savedBook) => savedBook.id === houseId)
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
              <div className="h-[20%] w-[100%] bg-slate-300 flex flex-row text-center items-center justify-evenly border-b-2 border-gray-300">
                <p className="">${house.price}</p>
                {isHouseAlreadySaved(house.id) ? (
                  <p className="w-[100px] h-[25px] rounded-sm bg-slate-400 hover:bg-slate-500 active:bg-slate-200">
                    added
                  </p>
                ) : (
                  <button
                    onClick={() => addToFavos(house)}
                    className="w-[100px] h-[30px] rounded-sm bg-slate-400 hover:bg-slate-500 active:bg-slate-200"
                    type="button"
                  >
                    bookmarks
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default HomePage
