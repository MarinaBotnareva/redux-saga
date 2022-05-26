import React from 'react'
import { connect } from 'react-redux'
import {
  incrementAction,
  decreaseAction,
  resetAction
} from './store/actions/actionCreators'

export const Counter = props => {
  const actionIncrement = () => {
    props.dispatch(incrementAction())
  }

  const actionDecrement = () => {
    props.dispatch(decreaseAction())
  }

  const actionReset = () => {
    props.dispatch(resetAction())
  }

  return (
    <div>
      Counter: {props.counter.score}
      <div>
        <button onClick={actionDecrement}>-</button>
        <button onClick={actionIncrement}>+</button>
        <button onClick={actionReset}>Reset</button>
      </div>
    </div>
  )
}

const mapStateToProps = store => ({ counter: store.counter })

export default connect(mapStateToProps)(Counter)
