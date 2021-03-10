import React, { createRef, useEffect, useRef } from 'react'
import { gsap, TimelineLite } from 'gsap'
import { PixiPlugin } from 'gsap/PixiPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import style from './Welcome.module.scss'

gsap.registerPlugin(PixiPlugin, MotionPathPlugin)

const Welcome: React.FC = () => {
  const textRef = createRef<HTMLDivElement>()
  const myTween = useRef(new TimelineLite({ paused: true }))

  useEffect(() => {
    myTween.current
      .set(textRef.current, {
        scale: 0,
        rotation: 0.01,
        z: 0.01,
      })
      .to(textRef.current, 2, { scale: 1 })
      .to(textRef.current, 1, { rotation: '+=360' })
    myTween.current.play()
  }, [])

  return (
    <div className={style.Welcome}>
      <div ref={textRef} className={style.Welcome__text}>
        CSS Animations
      </div>
    </div>
  )
}

export default Welcome
