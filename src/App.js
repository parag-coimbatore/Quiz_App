import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {
  return (
      <>
      <div className="app" style={{ backgroundImage: "url(./q2.jpg)" }}>
        <Header />

        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/quiz' element={<Quiz/>}></Route>
          <Route exact path='/result' element={<Result/>}></Route>
        </Routes>
      </div>
      <Footer/>
      </>
  

  );
}

export default App;
