import * as React from 'react'

const styles = require('./index.scss')

interface State {}

class NotFound extends React.Component<{}, State> {
  public render() {
    return (
      <div className={styles.wrapper}>
        Visit Limited
      </div>
    )
  }
}

export default NotFound
