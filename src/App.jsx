import './App.scss';
import Navbar from './components/shared/navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Newsletter from './components/shared/newsletter/Newsletter';
import Adidas from './pages/adidas/Adidas';
import Nike from './pages/nike/Nike';
import Puma from './pages/puma/Puma';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import ErrorPage from './pages/404-error/ErrorPage';
import ProductDetail from './components/products/product-detail/ProductDetail';
import { FooterContainer } from './containers/FooterContainer';

function App() {
  return (
    <>
        <BrowserRouter>
                <Navbar/>
                    <Switch>
                        <Route path='/' exact component={ Home }/>
                        <Route path='/category-adidas/:id' component={ Adidas }/>
                        <Route path='/category-nike/:id' component={ Nike }/>
                        <Route path='/category-puma/:id' component={ Puma }/>
                        <Route path='/shop' component={ Shop }/>
                        <Route path='/cart' component={ Cart }/>
                        <Route path='/product-detail/:id' component={ ProductDetail }/>
                        <Route path='*' component={ ErrorPage }/>
                    </Switch>
                <Newsletter/>
                <FooterContainer/>
        </BrowserRouter>
    </>
  );
}

export default App;
