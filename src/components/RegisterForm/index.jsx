/* 

    Создать форму регистрации 
    на отправку данных из нее ложить данные в store.user
    а после появления данных пользователя показывать их вместо формы регистрации

// rfcredux

*/

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registerUserAction } from '../../store/actions/actionCreators'

export const RegisterForm = props => {
  const [formData, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  function handleChange ({ target: { name, value } }) {
    setForm(s => ({ ...s, [name]: value }))
  }

  function onSubmit (e) {
    e.preventDefault();
    
    console.log(formData);
    const action = registerUserAction(formData)
    props.dispatch(action)
  }

  return (
    <div>
      {props.user.data ? (
        JSON.stringify(props.user.data)
      ) : (
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>
      )}
    </div>
  )
}

const mapStateToProps = store => ({ user: store.user })

export default connect(mapStateToProps)(RegisterForm)
