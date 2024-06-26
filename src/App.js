import './App.css';
import Nav from './components/nav';
import './components/css/container.css'
import './components/css/global.css'
import Home from './components/home';
import { Route,Routes } from 'react-router-dom';
import CardDetails from './components/card_details';
import Cart from './components/cart';
import NotFound from './components/notfound';


function App() {
  return (
    <>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/card_details/:productId' element={<CardDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
          
        </Routes>
        
    </>

  );
}

export default App;
