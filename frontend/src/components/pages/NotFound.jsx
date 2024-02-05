/* eslint-disable import/prefer-default-export, arrow-body-style */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
  return (
    <div className="h-[100dvh]  flex flex-col text-center items-center justify-center xs:text-[1.2rem] sm:text-[2rem] md:text-[3rem] lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6.7rem] bg-slate-700 text-white">
      <div className="flex flex-col text-center justify-center items-center ">
        <h1>404</h1>
        <FontAwesomeIcon icon={faTriangleExclamation} />
      </div>
      <h2>Page Not Found</h2>
    </div>
  )
}

export default NotFound
