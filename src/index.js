import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => (
  <div>{props.title}</div>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const DisplayP = (props) => (
<div> {props.textP} {props.counterP}</div>
)

const DisplayNtrl = (props) => (
  <div> {props.textNtrl} {props.counterNtrl}</div>
  )

const DisplayN = (props) => (
  <div> {props.textN} {props.counterN}</div>
  )

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counterP: 0,
      counterNtrl: 0,
      counterN: 0
    }
  }

  setValueP = (value) => {
    return () => {
      this.setState({ counterP: value })
    }
  }

  setValueNtrl = (value) => {
    return () => {
      this.setState({ counterNtrl: value })
    }
  }

  setValueN = (value) => {
    return () => {
      this.setState({ counterN: value })
    }
  }

  render() {
    return (
      <div>
        <h1>
        <Title title="Give feedback" />
        </h1>
        <div>
          <Button 
            handleClick={this.setValueP(this.state.counterP + 1)} 
            text="Positive" 
          />
          <Button 
            handleClick={this.setValueNtrl(this.state.counterNtrl + 1)} 
            text="Neutral" 
          />
          <Button 
            handleClick={this.setValueN(this.state.counterN + 1)} 
            text="Negative" 
          />
        </div>
        <h2>
          <Title title="Statistics"/>
        </h2>
        <div>
        <DisplayP textP="Positive" counterP={this.state.counterP}/>
        <DisplayNtrl textNtrl="Neutral" counterNtrl={this.state.counterNtrl}/>
        <DisplayN textN="Negative" counterN={this.state.counterN}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
<App />, 
document.getElementById('root'))
