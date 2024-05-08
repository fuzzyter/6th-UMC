import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import MainPage from './components/pages/MainPage';
import PopularPage from './components/pages/PopularPage';
import NowPlayingPage from './components/pages/NowPlayingPage';
import TopRatedPage from './components/pages/TopRatedPage';
import UpComing from './components/pages/UpComingPage';


function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/popular" element={<PopularPage/>} />
          <Route path="/now" element={<NowPlayingPage/>} />
          <Route path="/top" element={<TopRatedPage/>} />
          <Route path="/up" element={<UpComing/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;