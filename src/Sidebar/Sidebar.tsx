import * as React from 'react'
import classnames from 'classnames'
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
            <li><a href="#">Native</a></li>
            <li><a href="#">Transition Group</a></li>
            <li><a href="#">GreenSock</a></li>
            <li><a href="#">Threejs</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Sidebar