// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  changeText = () => {
    const {text} = this.state
    if (text === 'Subscribe') {
      this.setState({text: 'Subscribed'})
    } else {
      this.setState({text: 'Subscribe'})
    }
  }

  render() {
    const {text} = this.state

    return (
      <div className="bg-container">
        <h1 className="welcome">Welcome</h1>
        <p className="message">Thank you! Happy Learning </p>
        <button className="button" type="button" onClick={this.changeText}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
