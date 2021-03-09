import Native from './Examples/Native/Native'
import TransitionGroup from './Examples/TransitionGroup/TransitionGroup'
import ReactSpring from './Examples/ReactSpring/ReactSpring'
import GreenSock from './Examples/GreenSock/GreenSock'
import ThreeJs from './Examples/ThreeJs/ThreeJs'
const locations: { nav: string; path: string; Component: React.FC }[] = [
  {
    nav: 'Native',
    path: 'native',
    Component: Native,
  },
  {
    nav: 'Transition Group',
    path: 'transition-group',
    Component: TransitionGroup,
  },
  {
    nav: 'React Spring',
    path: 'react-spring',
    Component: ReactSpring,
  },
  {
    nav: 'GreenSock',
    path: 'greensock',
    Component: GreenSock,
  },
  {
    nav: 'Threejs',
    path: 'threejs',
    Component: ThreeJs,
  },
]
export default locations
