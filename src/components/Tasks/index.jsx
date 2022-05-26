import React from 'react'
import { connect } from 'react-redux'
import { createTaskAction } from '../../store/actions/actionCreators'

export const Tasks = props => {
  return (
    <div style={{ border: '1px solid black' }}>
      <button
        onClick={() => {
          // props.dispatch({ type: actionTypes.ADD_TASK, payload: { text: ... } });
          const action = createTaskAction({ text: 'test text', isDone: true })
          props.dispatch(action);
        }}
      >
        Add task
      </button>
      <ul>
        {props.tasks.list.map(
          /* create task list */
          (task) => (
            <li key={task.id}>{ task.text }</li>
          )
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = store => ({ tasks: store.tasks })

export default connect(mapStateToProps)(Tasks);
