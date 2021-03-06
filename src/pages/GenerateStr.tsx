import * as React from 'react'
import { connect } from 'react-redux'
import random from 'lodash-es/random'
import * as copy from 'copy-to-clipboard'
import { message } from 'antd'

const styles = require('./index.scss')

interface PassProps {}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

type Props = PassProps & {} & typeof mapDispatchToProps

interface State {
  generateNumber: string
  generateStr: string
  inputStrCount: number
}

class GenerateStr extends React.Component<Props, State> {
  state = {
    generateNumber: '',
    generateStr: '',
    inputStrCount: 'string'.length,
  }
  private _a2z: string = 'abcdefghizklmnopqrstuvwxyz'
  getRandomStr = (type: number) => {
    if (type == 0) {
      return random(0, 9).toString()
    } else {
      let str = this._a2z[random(0, 25)]
      if (random(0, 1)) {
        str = str.toUpperCase()
      }
      return str
    }
  }
  onInputChange = (type: number) => (e: any) => {
    if (type == 2) {
      this.setState({ inputStrCount: e.target.value.trim(' ').length })
    } else {
      const count = parseInt(e.target.value)
      if (count > 1000) {
        return
      }
      let str = ''
      for (var index = 0; index < count; index++) {
        str += this.getRandomStr(type)
      }
      const state = type == 0 ? { generateNumber: str } : { generateStr: str }
      this.setState(state as any, () => {
        copy(this.state.generateNumber + this.state.generateStr)
      })
    }
  }
  public render() {
    return (
      <div className={styles.generateStr}>
        <div style={{ marginBottom: 2 }}>
          get the length of the input string
        </div>
        <input placeholder="string" onChange={this.onInputChange(2)} />
        <span style={{ marginLeft: 5 }}>{this.state.inputStrCount}</span>
        <div style={{ marginBottom: 2, marginTop: 38 }}>
          string would be copy to clipboard after input
        </div>
        <input placeholder="number count" onChange={this.onInputChange(0)} />
        <input placeholder="string count" onChange={this.onInputChange(1)} />
        <div className={styles.showDiv}>
          {this.state.generateNumber + this.state.generateStr}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateStr)
