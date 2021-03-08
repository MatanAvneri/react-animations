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
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Sidebar