import * as React from "react"
import { Route, Switch } from "react-router-dom"
import App from "@/pages/App"

export default class Root extends React.Component<{}, {}> {
  render() {
    return (
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    )
  }
}
