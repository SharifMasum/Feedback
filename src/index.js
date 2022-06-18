import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

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
    <table className='table'>
      <tr>
        <td> {props.text} </td>
        <td> {props.counter} </td>
      </tr>
    </table>
  )
}

const Statistics = ({ counterGd, counterNtrl, counterBd }) => {
  if ((counterGd + counterNtrl + counterBd) === 0) {
    return (
      <em>No statistics available, press button to see statistics</em>
    )
  }
  return (
    <div>
      <Statistic text="Good" counter={counterGd} />
      <Statistic text="Neutral" counter={counterNtrl} />
      <Statistic text="Bad" counter={counterBd} />
      <Statistic text="Average"
        counter={((((counterGd) * 1) +
          ((counterNtrl) * 0) + ((counterBd) * (-1))) /
          ((counterGd) + (counterNtrl) +
            (counterBd)) || 0).toFixed(2)} />
      <Statistic text="Good percentage"
        counter={(((counterGd) * 100) /
          ((counterGd) + (counterNtrl) +
            (counterBd)) || 0).toFixed(2)} />
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
        <header>
          <h1>Feedback Application</h1>
        </header>
        <h2 className='title'>
          <Title title="Press button to give feedback" />
        </h2>
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
        <h2 className='stats'>
          <Title title="Statistics" />
        </h2>
        <div>
          <Statistics counterGd={this.state.counterGd}
            counterNtrl={this.state.counterNtrl}
            counterBd={this.state.counterBd} />
        </div>
        <footer>&copy; Md Shariful Islam, 2022</footer>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'))