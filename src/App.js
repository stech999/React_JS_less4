import './App.css';
import s from './Home.module.css';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className={s.container}>
          <NavLink className={s.colorText} to="/">
            <h3>Главная</h3>
          </NavLink>
          <NavLink className={s.colorText} to="/AboutPage">
            <h3>О нас</h3>
          </NavLink>
        </nav>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='AboutPage' element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;