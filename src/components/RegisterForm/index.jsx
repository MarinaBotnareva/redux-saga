/* 

    Создать форму регистрации 
    на отправку данных из нее ложить данные в store.user
    а после появления данных пользователя показывать их вместо формы регистрации

// rfcredux

*/

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registerUserAction } from '../../store/actions/actionCreators';

export const RegisterForm = (props) => {
  function onSubmit(e) {
    e.preventDefault();

    // if (sendToServer.status === 'OK')
    const action = registerUserAction(/*  */);
    props.dispatch(action);
    // else props.dispatch(registerUserActionError())
  }

  const [form, setForm] = useState({  });

  function handleChange({ target: { name, value } }) {
    setForm(s => ({ ...s,   }));
  }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" name="firstName"  value={} onChange={handleChange} />
            <input type="text" name="lastName"  value={} onChange={handleChange} />
            <input type="text" name="email" value={} onChange={handleChange} />
            <input type="text" name="password"  value={} onChange={handleChange} />
        </form>
    </div>
  )
}

const mapStateToProps = (store) => ({ user: store.user });


export default connect(mapStateToProps)(RegisterForm)
