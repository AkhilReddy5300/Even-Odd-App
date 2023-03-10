import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, text: 'Even'}

  incrementBtn = () => {
    const {count, text} = this.state
    const random = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: random}))
  }

  render() {
    const {count, text} = this.state
    let a = text
    if (count % 2 === 0) {
      a = 'Even'
    } else {
      a = 'Odd'
    }
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="header">Count {count}</h1>
          <p className="para">Count is {a}</p>
          <button className="button" type="button" onClick={this.incrementBtn}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
