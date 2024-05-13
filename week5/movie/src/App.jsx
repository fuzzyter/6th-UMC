import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';

import MainPage from './components/pages/MainPage';
import PopularPage from './components/pages/PopularPage';
import NowPlayingPage from './components/pages/NowPlayingPage';
import TopRatedPage from './components/pages/TopRatedPage';
import UpComingPage from './components/pages/UpComingPage';
import NotFoundPage from './components/pages/NotFoundPage';
import MovieDetailPage from './components/pages/MovieDetailPage';
import './App.css';


function App() {
  const { movies } = useMovies('https://api.themoviedb.org/3/movie/popular?api_key=42b8be23d71ac7e304fe02f1f4e720da&language=en-US&page=1');

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/popular" element={<PopularPage/>} />
          <Route path="/nowplaying" element={<NowPlayingPage/>} />
          <Route path="/toprated" element={<TopRatedPage/>} />
          <Route path="/upcoming" element={<UpComingPage/>} />
          <Route path="/movie/:movieTitle" element={<MovieDetailPage movies={movies} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;