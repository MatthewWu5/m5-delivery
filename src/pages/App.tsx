import * as React from 'react'
import TopBar from '@/components/TopBar'
import { connect } from 'react-redux'
import { getContacts, setContactsEmail } from '@/redux/actionCreators/contacts'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { replace, push } from 'react-router-redux'
import Join from '@/pages/Join'
import Login from '@/pages/Login'
import Portal from '@/pages/Portal'
import Profile from '@/pages/Profile'
import NotFound from '@/components/NotFound'
import Forbidden from '@/components/Forbidden'
import history from '@/redux/history'
import GenerateStr from '@/pages/GenerateStr'

const styles = require('./index.scss')
interface PassProps {}

const mapStateToProps = (state: IStore.IRoot) => ({
  contacts: state.contact.items,
  test: state.contact.test,
})

const mapDispatchToProps = {
  getContacts,
  setContactsEmail,
  replace,
  push,
}

type Props = PassProps & {
  contacts: any
  test: string
} & typeof mapDispatchToProps

interface State {}

class App extends React.Component<Props, State> {
  onClick = () => {
    this.props.setContactsEmail({ id: 1, email: '1@changed.com' })
  }

  goToPortal = () => {
    this.props.push('/portal')
  }

  componentDidMount() {
    this.props.getContacts(1)
  }

  renderProfile = (props: RouteComponentProps<null>) => {
    return <Profile {...props} />
  }

  public render() {
    return (
      <>
        <TopBar />
        <div className={styles.wrapper}>
          <Switch>
            <Route path="/join" component={Join} />
            <Route path="/login" component={Login} />
            <Route path="/portal" component={Portal} />
            <Route path="/profile/:id&:name" component={this.renderProfile} />
            <Route path="/404" component={NotFound} />
            <Route path="/403" component={Forbidden} />
            <Redirect from="/admin" to="/" />
            <Route path="/generateStr" component={GenerateStr} />
          </Switch>
          <NavLink className={styles.navLink} to="/generateStr">
            generate specify string
          </NavLink>
        </div>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
