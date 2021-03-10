import React from 'react'
import Lottie from 'react-lottie-player'
import animationData from './50486-rocket.json'

const LottieExample: React.FC = () => {
  return (
    <Lottie
      animationData={animationData}
      loop
      play
      style={{
        height: '100%',
      }}
    />
  )
}

export default LottieExample
