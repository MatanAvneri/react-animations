import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import style from './TransitionGroup.module.scss'

const Modal: React.FC = () => (
  <div className={style.TransitionGroup__modal}>Lorem ipsum dolor sit amet</div>
)

const TransitionGroup = () => {
  const [isModalOpen, openModal] = useState(false)
  const [isTransitionGroup, checkTransitionGroup] = useState(false)
  return (
    <div className={style.TransitionGroup}>
      <input id='transition-check' checked={isTransitionGroup} onClick={() => checkTransitionGroup(!isTransitionGroup)} type='checkbox' />
      <label htmlFor='transition-check'>With Transition Group</label>
      <br />
      <button onClick={() => openModal(!isModalOpen)}>Open Modal</button>
      <br />
      {
        !isTransitionGroup && isModalOpen && <Modal />
      }
      {
        isTransitionGroup && (
          <CSSTransition
          timeout={300}
            in={isModalOpen}
            classNames={{
              enter: style['Modal--enter'],
              enterActive: style['Modal--enter-active'],
              exit: style['Modal--exit'],
              exitActive: style['Modal--exit-active']
            }}
            unmountOnExit
          >
            <Modal />
          </CSSTransition>
        )
      }
    </div>
  )
}

export default TransitionGroup
