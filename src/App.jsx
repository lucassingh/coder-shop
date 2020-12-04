import './App.scss';
import Navbar from './components/shared/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Newsletter from './components/shared/newsletter/Newsletter';
import Footer from './components/shared/footer/footer';
import Adidas from './pages/adidas/Adidas';

function App() {
  return (
    <>
        <Router>
            <Navbar/>
                    <Switch>
                        <Route path='/' exact component={ Home }/>
                        <Route path='/adidas' component={ Adidas }/>
                    </Switch>
                <Newsletter/>
                <Footer/>
        </Router>
    </>
  );
}

export default App;
