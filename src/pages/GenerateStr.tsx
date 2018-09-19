import * as React from 'react'
import { connect } from 'react-redux'
import random from "lodash-es/random"

const styles = require('./index.scss')

interface PassProps {  }

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps = {
}

type Props = PassProps & {
} & typeof mapDispatchToProps

interface State {
  generateNumber: string
  generateStr: string
}

class GenerateStr extends React.Component<Props, State> {
  state = {
    generateNumber: ""
    generateStr: ""
  }
  private _a2z: string = "abcdefghizklmnopqrstuvwxyz" 
  getRandomStr = (type: number) =>{  
    if (type == 0) { 
      return random(0, 9).toString()
    } else {
      let str = _a2z[random(0, 25)]
      if(random(0, 1)){
        str = str.toUpperCase()
      }
      return str
    }
  }    
  onInputChange = (type: number) => (e: any)=>{
    const count = parseInt(e.target.value)
    let str = ""
    for (var index = 0; index < count; index++) {
      str += this.getRandomStr(type)
    }
    this.setState(type==0?{generateNumber: str}: {generateStr: str})
  } 
  public render() {
      return <div className={styles.wrapper}>
          <input placeholder="number count" onChange={this.onInputChange(0)}/>
          <input placeholder="string count" onChange={this.onInputChange(1)}/>
        <div>{this.state.generateNumber + this.state.generateStr}</div>
      </div>
    }
    
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateStr)
