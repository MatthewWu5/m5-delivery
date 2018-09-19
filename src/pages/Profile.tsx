import * as React from 'react'
import { connect } from 'react-redux'
import { getContacts } from '@/redux/actionCreators/contacts'
import { match } from 'react-router'

const styles = require('./index.scss')

interface PassProps {
  match: match<{ id: string; name: string }>
}

const mapStateToProps = (state: any) => ({
  contact: state.contact,
})

const mapDispatchToProps = {
  getContacts,
}

type Props = PassProps & {
  contact: any
} & typeof mapDispatchToProps

interface State {}

class Profile extends React.Component<Props, State> {
  public render() {
    return (
      <div className={styles.wrapper}>
        id: {this.props.match.params.id}, name: {this.props.match.params.name}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
