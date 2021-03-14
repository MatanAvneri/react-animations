import React, { createRef, useEffect, useRef, useState } from 'react'
import Measure from 'react-measure'
import { gsap, TimelineLite } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import style from './GreenSock.module.scss'

gsap.registerPlugin(PixiPlugin, MotionPathPlugin)

const GreenSock: React.FC = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const circleRef = createRef<HTMLDivElement>()
  const myTween = useRef(new TimelineLite({ paused: true }))

  useEffect(() => {
    myTween.current
      .clear()
      .to(circleRef.current, 0, {
        x: 0,
        y: 0,
        rotation: 0,
        borderRadius: 0,
        backgroundColor: 'blue',
        ease: 'linear',
      })
      .to(circleRef.current, 4, {
        x: width - 100,
        y: 0,
        rotation: 180,
        borderRadius: '100%',
        backgroundColor: 'red',
        ease: 'linear',
      })
      .to(circleRef.current, 4, {
        x: width - 100,
        y: height - 100,
        rotation: 0,
        borderRadius: 0,
        backgroundColor: 'blue',
        ease: 'linear',
      })
      .to(circleRef.current, 4, {
        x: 0,
        y: height - 100,
        rotation: 180,
        borderRadius: '100%',
        backgroundColor: 'red',
        ease: 'linear',
      })
      .to(circleRef.current, 4, {
        x: 0,
        y: 0,
        rotation: 0,
        borderRadius: 0,
        backgroundColor: 'blue',
        ease: 'linear',
      })
  }, [width, height])

  return (
    <Measure
      bounds
      client
      onResize={({ client }) => {
        setWidth(client!.width)
        setHeight(client!.height)
      }}
    >
      {({ measureRef }) => (
        <div className={style.GreenSock} ref={measureRef}>
          <div className={style.GreenSock__buttons}>
            <button onClick={() => myTween.current.play().repeat(-1)}>
              Play
            </button>
            <button onClick={() => myTween.current.pause()}>Pause</button>
          </div>
          <div ref={circleRef} className={style.GreenSock__circle} />
        </div>
      )}
    </Measure>
  )
}

export default GreenSock
