import * as React from 'react'
import { connect } from 'react-redux'

const styles = require('./index.scss')

interface PassProps {}

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = {
}

type Props = PassProps & {
} & typeof mapDispatchToProps

interface State {}

class Join extends React.Component<Props, State> {
  public render() {
    return <div className={styles.wrapper}>Join</div>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join)
