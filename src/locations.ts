import Native from './Examples/Native/Native'
import TransitionGroup from './Examples/TransitionGroup/TransitionGroup'
import ReactSpring from './Examples/ReactSpring/ReactSpring'
import GreenSock from './Examples/GreenSock/GreenSock'
import ThreeJs from './Examples/ThreeJs/ThreeJs'
import Lottie from './Examples/Lottie/Lottie'
const locations: {
  nav: string
  path: string
  Component: React.FC
  link?: string
}[] = [
  {
    nav: 'Native',
    path: 'native',
    Component: Native,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    nav: 'Transition Group',
    path: 'transition-group',
    Component: TransitionGroup,
    link: 'http://reactcommunity.org/react-transition-group/',
  },
  {
    nav: 'React Spring',
    path: 'react-spring',
    Component: ReactSpring,
    link: 'https://www.react-spring.io/',
  },
  {
    nav: 'GreenSock',
    path: 'greensock',
    Component: GreenSock,
    link: 'https://greensock.com/',
  },
  {
    nav: 'Lottie',
    path: 'lottie',
    Component: Lottie,
    link: 'https://lottiefiles.com/',
  },
  {
    nav: 'Threejs',
    path: 'threejs',
    Component: ThreeJs,
    link: 'https://threejs.org/',
  },
]
export default locations
