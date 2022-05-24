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

const Statistic = (props) => {
  return (
    <div> {props.text} {props.counter}</div>
  )
}

const Statistics = ({counterGd, counterNtrl, counterBd}) => {
  if ((counterGd + counterNtrl + counterBd) === 0) {
    return (
      <em>No statistics available</em>
    )
  }
  return (
    <div>
    <Statistic text="Good" counter={counterGd}/>
    <Statistic text="Neutral" counter={counterNtrl}/>
    <Statistic text="Bad" counter={counterBd}/>
    <Statistic text="Average"
                    counter={((((counterGd)*1)+
                    ((counterNtrl)*0)+((counterBd)*(-1)))/
                    ((counterGd)+(counterNtrl)+
                    (counterBd))||0).toFixed(2)}/>
    <Statistic text="Good percentage"
                    counter={(((counterGd)*100)/
                    ((counterGd)+(counterNtrl)+
                    (counterBd))||0).toFixed(2)}/>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counterGd: 0,
      counterNtrl: 0,
      counterBd: 0
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
        <Title title="Give feedback"/>
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
        <Statistics counterGd={this.state.counterGd} 
        counterNtrl={this.state.counterNtrl} 
        counterBd={this.state.counterBd} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
<App />,
document.getElementById('root'))