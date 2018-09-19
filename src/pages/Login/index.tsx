import * as React from 'react'
import LoginForm from '@/components/LoginForm'
import logo from '@/assets/logo.svg'

const styles = require('./index.scss')

interface State {}

class Login extends React.Component<{}, State> {
  public render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <img src={logo} />
          <h1>Sign in to GitHub</h1>
        </div>
        <LoginForm />
      </div>
    )
  }
}

export default Login
