import React from 'react'
import COVIDDataCell from '../../components/COVIDDataCell'

class COVIDRegression extends React.Component {
  // initialize state in constructor
  // we'll update this state when we finish loading data
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <COVIDDataCell name="" />
      </>
    )
  }
}

export default COVIDRegression