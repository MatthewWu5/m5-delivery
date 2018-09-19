import * as React from 'react'

const styles = require('./index.scss')

interface State {}

class NotFound extends React.Component<{}, State> {
  public render() {
    return (
      <div className={styles.wrapper}>
        Sorry, the page you were looking for doesn't exist
      </div>
    )
  }
}

export default NotFound
