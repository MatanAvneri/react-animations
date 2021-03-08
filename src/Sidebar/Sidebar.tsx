import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import style from './style.module.scss'

const Sidebar: React.FC = () => {
  return (
    <header className={style.sidebar} role="banner">
      <h1>
        React Animations
      </h1>
      <div className={style['nav-wrap']}>
        <nav className={style['main-nav']} role="navigation">
          <ul className={classnames(style['unstyled'], style['list-hover-slide'])}>
            <li><Link to={{
              hash: 'native'
            }}>Native</Link></li>
            <li><Link to="#transition-group">Transition Group</Link></li>
            <li><Link to="#greensock">GreenSock</Link></li>
            <li><Link to="#threejs">Threejs</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Sidebar