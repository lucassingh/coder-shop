import { withRouter } from 'react-router-dom';

const ButtonRedirect = withRouter(({ history }) => (
    <div className="wrapper-cart-icon" onClick={() => { history.push('/cart') }}>
        <i className="fas fa-shopping-cart"></i>
        <span className="wrapper-cart-number"> 3 </span>
    </div>  
));

export default ButtonRedirect;