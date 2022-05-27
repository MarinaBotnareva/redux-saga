import React, {useState} from 'react'
import { connect } from 'react-redux'
import { createCommentAction } from '../../store/actions/actionCreators'


export const Comments = props => {
  const [comment, setComment] = useState({
  });

  function handleChange ({ target: { name, value } }) {
    setComment(s => ({ ...s, [name]: value }))
  }

  function onSubmit (e) {
    e.preventDefault();
    
    const action = createCommentAction(comment)
    props.dispatch(action)
  }
  return (
    <div style={{ border: '1px solid black' }}>
      <input name='comment' type = 'text' placeholder='Your comment' onChange={handleChange}/>
      <button
        onClick={onSubmit}
      >
        Add comment
      </button>
      <ul>
        {props.comments.list.map(
          /* create task list */
          (comment) => (
            <li key={comment.id}>{ comment.comment }</li>
          )
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = store => ({ comments: store.comments })

export default connect(mapStateToProps)(Comments);
