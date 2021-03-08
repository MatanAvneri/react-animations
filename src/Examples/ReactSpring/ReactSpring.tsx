import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import style from './ReactSpring.module.scss'

const Modal: React.FC = () => (
  <div className={style.ReactSpring__modal}>Lorem ipsum dolor sit amet</div>
)

const ReactSpring = () => {
  const [isModalOpen, openModal] = useState(false)
  const props = useSpring({
    from: { height: 0, opacity: 0, transform: 'scale(0);translateX(0)' },
    to: { height: isModalOpen ? 90 : 0, opacity: isModalOpen ? 1 : 0, transform: `scale(${isModalOpen ? 1 : 0});translateX(0)` },
    config: {
      duration: 300
    }
  })
console.log('props', props)
  return (
    <div className={style.ReactSpring}>
      <button onClick={() => openModal(!isModalOpen)}>Open Modal</button>
      <br />
      <animated.div style={{ ...props }}
      >
        <Modal />
      </animated.div>
      bottom content
    </div>
  )
}

export default ReactSpring
