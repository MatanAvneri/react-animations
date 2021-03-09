import React, { useState } from 'react'
import style from './Native.module.scss'

const Native: React.FC = () => {
  const [numberOfCircles, setNumberOfCircles] = useState([0])
  return (
    <>
      <button
        onClick={() => {
          setNumberOfCircles([...numberOfCircles, numberOfCircles.length])
        }}
      >
        Add circle
      </button>
      {numberOfCircles.map((i) => {
        return <div key={i} className={style.Native} />
      })}
    </>
  )
}

export default Native
