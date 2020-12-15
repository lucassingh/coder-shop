import './App.scss';
import Navbar from './components/shared/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Newsletter from './components/shared/newsletter/Newsletter';
import Adidas from './pages/adidas/Adidas';
import Nike from './pages/nike/Nike';
import Puma from './pages/puma/Puma';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import ProductDetail from './components/products/product-detail/ProductDetail';
import { FooterContainer } from './containers/FooterContainer';

function App() {
  return (
    <>
        <Router>
            <Navbar/>
                    <Switch>
                        <Route path='/' exact component={ Home }/>
                        <Route path='/adidas' component={ Adidas }/>
                        <Route path='/nike' component={ Nike }/>
                        <Route path='/puma' component={ Puma }/>
                        <Route path='/shop' component={ Shop }/>
                        <Route path='/cart' component={ Cart }/>
                        <Route path='/product-detail' component={ ProductDetail }/>
                    </Switch>
                <Newsletter/>
                <FooterContainer/>
        </Router>
    </>
  );
}

export default App;
