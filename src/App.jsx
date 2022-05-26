import { connect } from 'react-redux';

import Tasks from './components/Tasks';
import RegisterForm from './components/RegisterForm';

function App (props) {

  return (
    <div>
      {/* <Tasks /> */}
      <RegisterForm />
    </div>
  )
}

/* 
Consumer
  {store => {
    // mapStateToProps
    const props = store.counter;
    return <Component {...props} />;
  }
/Consumer
 */

const mapStateToProps = (store) => {
  return { counter: store.counter };
}

// HOC
const withStore = connect(mapStateToProps);

export default withStore(App);
