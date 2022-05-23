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

const Statistics = (props) => (
  <div> {props.text} {props.counter}</div>
)

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
        <Statistics text="Good" counter={this.state.counterGd}/>
        <Statistics text="Neutral" counter={this.state.counterNtrl}/>
        <Statistics text="Bad" counter={this.state.counterBd}/>
        <Statistics text="Average"
                        counter={((((this.state.counterGd)*1)+
                        ((this.state.counterNtrl)*0)+((this.state.counterBd)*(-1)))/
                        ((this.state.counterGd)+(this.state.counterNtrl)+
                        (this.state.counterBd))||0).toFixed(2)}/>
        <Statistics text="Good percentage"
                        counter={(((this.state.counterGd)*100)/
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