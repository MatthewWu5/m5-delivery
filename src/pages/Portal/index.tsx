import * as React from 'react'
import { connect } from 'react-redux'

const styles = require('./index.scss')

interface PassProps {}

const mapStateToProps = (state: IStore.IRoot) => ({
})

const mapDispatchToProps = {
}

type Props = PassProps & {
} & typeof mapDispatchToProps

interface State {
}

class Portal extends React.Component<Props, State> {
  state: State = {
  }

  public render() {
    return <div className={styles.wrapper}>Portal</div>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portal)
