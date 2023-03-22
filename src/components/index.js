import Navbar from './navbar/navbar.js';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/home.js';
import Games from './games/games.js';
import News from './news/news.js';
import Company from './company/company.js';
import Careers from './careers/careers.js';
import Contact from './contact/contact.js';
import Shop from './shop/shop.js';
import Footer from './footer/footer.js';

import P5 from '../assets/P5.png';

import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {updateNews} from '../reducers/news.js';
import {updateGames} from '../reducers/games.js';
import {updateJobs} from '../reducers/jobs.js';
import {updateShop} from '../reducers/shop.js';

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateNews(
      [
        {"title": "Test 1", "date": "November 22, 2022", "description": "Lorum ipsum"},
        {"title": "Test 2", "date": "November 21, 2022", "description": "Lorum ipsum"},
        {"title": "Test 3", "date": "November 20, 2022", "description": "Lorum ipsum"},
        {"title": "Test 4", "date": "November 20, 2022", "description": "Lorum ipsum"},
        {"title": "Test 5", "date": "November 20, 2022", "description": "Lorum ipsum"},
        {"title": "Test 6", "date": "November 20, 2022", "description": "Lorum ipsum"},
        {"title": "Test 7", "date": "November 20, 2022", "description": "Lorum ipsum"},
        {"title": "Test 8", "date": "November 20, 2022", "description": "Lorum ipsum"},
      ]
    ));
  },[dispatch]);

  useEffect(() => {
    dispatch(updateGames(
      [
        {"image": "image", "title": "Persona 5", "availableNow": true},
        {"image": "image", "title": "Persona 4", "availableNow": true},
        {"image": "image", "title": "Persona 3", "availableNow": true},
        {"image": "image", "title": "Shin Megami Tensei", "availableNow": true},
        {"image": "image", "title": "Persona 5 strikers", "availableNow": true},
        {"image": "image", "title": "Catherine", "availableNow": false},
        {"image": "image", "title": "Radiant Historia", "availableNow": false},
        {"image": "image", "title": "Sentinel Aegis", "availableNow": false},
        {"image": "image", "title": "King of fighters", "availableNow": false},
        {"image": "image", "title": "Persona 5 dancing", "availableNow": false},
        {"image": "image", "title": "Persona 4 arena", "availableNow": false},
        {"image": "image", "title": "Demon souls", "availableNow": false},
        {"image": "image", "title": "Daylight", "availableNow": false},
        {"image": "image", "title": "Persona 1", "availableNow": false},
        {"image": "image", "title": "Persona 2", "availableNow": false},
      ]
    ));
  },[dispatch]);

  useEffect(() => {
    dispatch(updateJobs(
      [
        {"title": "HR Manager", "description": "Lorum ipsum"},
        {"title": "Developer", "description": "Lorum ipsum"},
        {"title": "Project Manager", "description": "Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum"},
      ]
    ));
  },[dispatch]);

  useEffect(() => {
    dispatch(updateShop(
      [
        {"image": P5, "title": "Persona 5"},
        {"image": P5, "title": "Persona 4"},
        {"image": P5, "title": "Persona 3"},
        {"image": P5, "title": "Shin Megami Tensei"},
        {"image": P5, "title": "Persona 5 strikers"},
        {"image": P5, "title": "Catherine"},
      ]
    ));
  },[dispatch])

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="Content-Container">
          <Routes>
            <Route path="AtlusClone" element={<Home />} />
            <Route path="games" element={<Games />} />
            <Route path="news" element={<News />} />
            <Route path="company" element={<Company />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
          </Routes>
        </div>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default Main;
