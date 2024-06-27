import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar.jsx';
import PopularPage from './pages/PopularPage';
import MainPage from './pages/MainPage';
import NowPlayingPage from './pages/NowPlayingPage';
import TopRatedPage from './pages/TopRatedPage';
import UpComingPage from './pages/UpComingPage';
import MovieDetailPage from './pages/MovieDetailPage';
import NotFound from './pages/NotFoundPage';
import SignUp from './pages/SignUpPage';
import LogIn from './pages/LogInPage'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/nowplaying" element={<NowPlayingPage />} />
          <Route path="/toprated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpComingPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const isSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="nav-links">
        <li onClick={toggleSidebar}><a href="#home">Home</a></li>
        <li onClick={toggleSidebar}><a href="#movies">Movies</a></li>
        <li onClick={toggleSidebar}><a href="#about">About</a></li>
        <li onClick={toggleSidebar}><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

const isApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main>
      </main>
    </div>
  );
}

export default App;
