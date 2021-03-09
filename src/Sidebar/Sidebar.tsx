import * as React from 'react'
import classnames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import locations from '../locations'
import style from './style.module.scss'

const Sidebar: React.FC = () => {
  const location = useLocation()
  return (
    <header className={style.sidebar} role="banner">
      <h1>React Animations</h1>
      <div className={style['nav-wrap']}>
        <nav className={style['main-nav']} role="navigation">
          <ul
            className={classnames(style['unstyled'], style['list-hover-slide'])}
          >
            {locations.map(({ nav, path }) => {
              return (
                <li key={nav}>
                  <Link
                    data-selected={`#${path}` === location.hash}
                    to={`#${path}`}
                  >
                    {nav}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Sidebar
