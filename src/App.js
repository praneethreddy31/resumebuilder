import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import Resume from './components/Resume';
import Resume from './components/NonExistingPage';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const converter = require ('number-to-words')
function App() {
  const[userInfo, setUserInfo] = useState({})
  const[source, setSource] = useState('')
  const random_number= Math.floor(Math.random()*10e4)
  const random_alpha_num = converter.toWords(random_number)
  const getRandomNumber = (randNum) => {
    return converter.toWords(randNum)
  }

  const generateImage = () => {
    setSource('http://robohash.org/stefan-$')
  }

  return (
    <div className="App">
       hello
    </div>
  );
}

export default App;
