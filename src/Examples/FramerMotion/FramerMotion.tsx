import React, { useState, useRef } from 'react'
import { motion, Variants } from 'framer-motion'
import style from './FramerMotion.module.scss'

const Modal: React.FC<{ constraintsRef: React.RefObject<HTMLDivElement> }> = ({
  constraintsRef,
}) => (
  <motion.div
    drag
    dragConstraints={constraintsRef}
    onDragEnd={(e) => console.log('done dragging', e)}
    whileHover={{ scale: 1.1 }}
    className={style.FramerMotion__modal}
  >
    Lorem ipsum dolor sit amet
  </motion.div>
)

const FramerMotion: React.FC = () => {
  const [isModalOpen, openModal] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)
  const modalVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  }
  return (
    <div ref={constraintsRef} className={style.FramerMotion}>
      <button onClick={() => openModal(!isModalOpen)}>Open Modal</button>
      <br />
      <motion.div
        transition={{ type: 'spring', duration: 1 }}
        initial={false}
        animate={isModalOpen ? 'visible' : 'hidden'}
        variants={modalVariants}
      >
        <Modal constraintsRef={constraintsRef} />
      </motion.div>
      bottom content
    </div>
  )
}

export default FramerMotion
