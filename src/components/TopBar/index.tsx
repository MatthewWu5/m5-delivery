import * as React from 'react'
import { NavLink } from 'react-router-dom'

const styles = require('./index.scss')

interface State {}

class TopBar extends React.Component<{}, State> {
  public render() {
    return (
      <div className={styles.wrapper}>
        <header className={styles['App-header']}>
          {/*<NavLink className="navLink" to="/login">
            Sign in
          </NavLink>{' '}
          or{' '}
          <NavLink className="navLink" to="/join">
            Sign up
          </NavLink>*/}
          Delivery Site
        </header>
      </div>
    )
  }
}

export default TopBar
