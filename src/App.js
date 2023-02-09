import './App.css';
import React, { useState } from 'react';
import Cocktails from './components/Cocktails/Cocktails';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';
import Autorization from './components/Autorization/Autorization';
import { BrowserRouter as Router, Routes, Route, Link,} from 'react-router-dom';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration'


function App() {
  const [strDrink, setStrDrink] = useState();
  const [strDrinkThumb, setStrDrinkThumb] = useState();
  const [idDrink, setIdDrink] = useState();
  const [cart, setCart] = useState([]);
  const [ver, setVer] = useState(false)

  const gettingCocktail = async (event) => {
    event.preventDefault();
    const api_url = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail',
    );
    const data = await api_url.json();
    setStrDrink(data.drinks[0].strDrink);
    setStrDrinkThumb(data.drinks[0].strDrinkThumb);
    setIdDrink(data.drinks[0].idDrink);
    setVer(true)
  };

  const addToCart = () => {
    setCart([
      ...cart,
      { strDrink: { strDrink }, strDrinkThumb: { strDrinkThumb }, idDrink: idDrink },
    ]);
  };

  const delProd = () => {
    setCart([])
  }

  const ordProd = () => {
    alert('Заказ сделан')
    setCart([])
  }

 

  return (
    <Router>
      <div>
        <header>
          <Link to='/'>Товары</Link>
          <Link to='/Cart'>Корзина</Link>
          <Link to='/Autorization'>Авторизация</Link>
          <Link to='/Registration'>Регистрация</Link>
        </header>

        <Routes>
          <Route path="/" element={<Main ver={ver} gettingCocktail={gettingCocktail} strDrink={strDrink} strDrinkThumb={strDrinkThumb} idDrink={idDrink} addToCart={addToCart} />}/>
          <Route path="/Cart" element={<Cart cart={cart} drink={strDrink} img={strDrinkThumb} id={idDrink} delProd={delProd} ordProd={ordProd} />}/>
          <Route path='/Autorization' element={<Autorization />}/>
          <Route path='/Registration' element={<Registration />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
