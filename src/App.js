import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import ConfirmedBooking from './components/ConfirmedBooking';
import Login from './pages/Login';
import { useReducer } from 'react';

function App() {
  const seedRandom = function(seed){
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return(s = s * a % m) / m;
    }
  }
  const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++){
      if(random() < 0.5){
        result.push(i + ':00');
      }
      if(random() > 0.5){
        result.push(i + ':30');
      }
    }
    return result;
  }

  const submitAPI = function(formData){
    return true;
  }
  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date){
    return {availableTimes: fetchAPI(new Date())}
  }

  const navigate = useNavigate();

  function submitForm(formData){
    if(submitAPI(formData)){
      navigate("/confirmed");
    }
  }

  return (
    <>
      <Header/>
      <Nav/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations availableTimes={state} dispatch={dispatch}
        submitForm={submitForm} />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
