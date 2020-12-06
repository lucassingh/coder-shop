import { withRouter } from 'react-router-dom';

const ButtonRedirect = withRouter(({ history }) => (
  <i className="fas fa-shopping-cart" onClick={() => { history.push('/cart') }}></i>
));

export default ButtonRedirect;