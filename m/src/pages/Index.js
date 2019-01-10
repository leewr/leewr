import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../store'
// import './Home/Home.scss'

class Home extends React.Component {
  componentDidMount() {
    if (this.props.circuits.length <= 0) {
      console.log('fetchData')
      this.props.fetchData()
    }
  }
  render() {
    const { circuits } = this.props
    console.log('circuits', circuits)
    return (
      <div>
        <h2>F1 2018 Season Calendar</h2>
        <ul>
          {circuits.list.map(({ id, title }) => (
            <li key={id} onClick={this.getShow}>
              {title}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  getShow() {
    console.log('click')
  }
}
Home.serverFetch = fetchData // static declaration of data requirements

const mapStateToProps = state => ({
  circuits: state.data
})

const mapDispatchToProps = {
  fetchData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
