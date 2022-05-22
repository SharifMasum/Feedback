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

const DisplayGd = (props) => (
<div> {props.textP} {props.counterGd}</div>
)

const DisplayNtrl = (props) => (
  <div> {props.textNtrl} {props.counterNtrl}</div>
  )

const DisplayBd = (props) => (
  <div> {props.textN} {props.counterBd}</div>
  )

const DisplayAvg = (props) => (
  <div> {props.text} {props.counterAvg}</div>
  )

const DisplayGdPtg = (props) => (
  <div> {props.text} {props.counterGdPtg}%</div>
  )

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counterGd: 0,
      counterNtrl: 0,
      counterBd: 0,
      counterAvg: 0,
      counterGdPtg: 0
    }
  }

  setValueGd = (value) => {
    return () => {
      this.setState({ counterGd: value })
    }
  }

  setValueNtrl = (value) => {
    return () => {
      this.setState({ counterNtrl: value })
    }
  }

  setValueBd = (value) => {
    return () => {
      this.setState({ counterBd: value })
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
            handleClick={this.setValueGd(this.state.counterGd + 1)}
            text="Good"
          />
          <Button
            handleClick={this.setValueNtrl(this.state.counterNtrl + 1)}
            text="Neutral"
          />
          <Button
            handleClick={this.setValueBd(this.state.counterBd + 1)}
            text="Bad"
          />
        </div>
        <h2>
          <Title title="Statistics"/>
        </h2>
        <div>
        <DisplayGd textP="Good" counterGd={this.state.counterGd}/>
        <DisplayNtrl textNtrl="Neutral" counterNtrl={this.state.counterNtrl}/>
        <DisplayBd textN="Bad" counterBd={this.state.counterBd}/>
        <DisplayAvg text="Average"
                        counterAvg={((((this.state.counterGd)*1)+
                        ((this.state.counterNtrl)*0)+((this.state.counterBd)*(-1)))/
                        ((this.state.counterGd)+(this.state.counterNtrl)+
                        (this.state.counterBd))||0).toFixed(2)}/>
        <DisplayGdPtg text="Good percentage"
                        counterGdPtg={(((this.state.counterGd)*100)/
                        ((this.state.counterGd)+(this.state.counterNtrl)+
                        (this.state.counterBd))||0).toFixed(2)}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
<App />,
document.getElementById('root'))