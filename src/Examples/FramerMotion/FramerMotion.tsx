import React, { useState, useRef } from 'react'
import { motion, Variants, useMotionValue, useTransform } from 'framer-motion'
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
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])

  const constraintsRef = useRef<HTMLDivElement>(null)

  const loaderVariants: Variants = {
    loading: { pathLength: 0.25 },
    notLoading: { pathLength: 0 },
  }

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
      <svg viewBox="0 0 20 20">
        <motion.path
          d="M11.709,7.438H8.292c-0.234,0-0.427,0.192-0.427,0.427v8.542c0,0.234,0.192,0.427,0.427,0.427h3.417c0.233,0,0.426-0.192,0.426-0.427V7.865C12.135,7.63,11.942,7.438,11.709,7.438 M11.282,15.979H8.719V8.292h2.563V15.979zM6.156,11.709H2.74c-0.235,0-0.427,0.191-0.427,0.426v4.271c0,0.234,0.192,0.427,0.427,0.427h3.417c0.235,0,0.427-0.192,0.427-0.427v-4.271C6.583,11.9,6.391,11.709,6.156,11.709 M5.729,15.979H3.167v-3.416h2.562V15.979zM17.261,3.167h-3.417c-0.235,0-0.427,0.192-0.427,0.427v12.812c0,0.234,0.191,0.427,0.427,0.427h3.417c0.234,0,0.427-0.192,0.427-0.427V3.594C17.688,3.359,17.495,3.167,17.261,3.167 M16.833,15.979h-2.562V4.021h2.562V15.979z"
          variants={loaderVariants}
          fill="transparent"
          initial={false}
          strokeWidth="0.5"
          stroke="#A0d"
          transition={{ duration: 4 }}
          animate={isModalOpen ? 'loading' : 'notLoading'}
          style={{ pathLength, opacity }}
        />
      </svg>
    </div>
  )
}

export default FramerMotion
