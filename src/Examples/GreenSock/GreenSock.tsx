import React, { createRef, useEffect, useRef } from 'react'
import { gsap, TimelineLite } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import style from './GreenSock.module.scss'

gsap.registerPlugin(PixiPlugin, MotionPathPlugin)

const GreenSock: React.FC = () => {
  const circleRef = createRef<HTMLDivElement>()
  const myTween = useRef(new TimelineLite({ paused: true }))

  useEffect(() => {
    myTween.current
      .to(circleRef.current, 0, {
        x: 0,
        y: 0,
        rotation: 0,
        borderRadius: 0,
        backgroundColor: 'blue',
      })
      .to(circleRef.current, 1, {
        x: 500,
        y: 0,
        rotation: 180,
        borderRadius: '100%',
        backgroundColor: 'red',
      })
      .to(circleRef.current, 1, {
        x: 500,
        y: 500,
        rotation: 0,
        borderRadius: 0,
        backgroundColor: 'blue',
      })
      .to(circleRef.current, 1, {
        x: 0,
        y: 500,
        rotation: 180,
        borderRadius: '100%',
        backgroundColor: 'red',
      })
      .to(circleRef.current, 1, {
        x: 0,
        y: 0,
        rotation: 0,
        borderRadius: 0,
        backgroundColor: 'blue',
      })
  }, [])

  return (
    <>
      <button onClick={() => myTween.current.play().repeat(-1)}>Play</button>
      <button onClick={() => myTween.current.pause()}>Pause</button>
      <div ref={circleRef} className={style.GreenSock} />
    </>
  )
}

export default GreenSock
